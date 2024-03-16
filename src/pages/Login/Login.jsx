import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


export default function Login(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorText, setErrorText] = useState(false)
	const auth = getAuth()
	const navigate = useNavigate()

	function loginUser(event) {
		event.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				setErrorText(false)
				const loggedIn = user.user
				props.setUser(loggedIn)
				navigate('/')
			})
			.catch(e => setErrorText(true))
	}

	return (
		<div className='formContainer'>
			<form className='form' id='login-form' onSubmit={loginUser}>
				<h2>Авторизация</h2>
				<div className='form-group'>
					<input
						type='email'
						id='loginEmail'
						name='loginEmail'
						required
						onChange={event => setEmail(event.target.value)}
					/>
					<label htmlFor='loginEmail'>Email</label>
				</div>
				<div className='form-group'>
					<input
						type='password'
						id='loginPassword'
						name='loginPassword'
						required
						onChange={event => setPassword(event.target.value)}
					/>
					<label htmlFor='loginPassword'>Пароль</label>
				</div>
				<button type='submit' className='submit-btn'>
					Войти
				</button>
				{errorText && <h3 className='error-text'>Неверный email или пароль</h3>}
				<Link to='/register' className='link-text'>
					Регистрация
				</Link>
			</form>
		</div>
	)
}
