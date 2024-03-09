import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




export default function Register(props) {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  // const [name, setName] = useState("")

  const auth = getAuth();
  const navigate = useNavigate();


  function validPass(){
    return confirmPassword === password
  }

  async function createUser(event){
    event.preventDefault()
    if(!validPass()){
        setErrorPassword(true)
        return;
    }
    setErrorPassword(false)
    createUserWithEmailAndPassword(auth, email, password).then((currentUser)=>{

      let user = currentUser.user;
      
      props.setUser(user)
      navigate("/")
    })
  }

  return (
    <div className="formContainer">
      <form className="form" id="register-form" onSubmit={createUser}>
        <h2>Регистрация</h2>
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="firstName">Имя</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
          <label htmlFor="lastName">Фамилия</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="password">Пароль</label>
        </div>
        {errorPassword && <h4 className="error-text">Пароли не совпадают</h4>}
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <label htmlFor="password">Подтвердите пароль</label>
        </div>
        <button className="submit-btn" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/login" className="link-text">Авторизация</Link>
      </form>
    </div>
  );
}
