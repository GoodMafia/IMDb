// UseState
import { useState } from 'react';

// SCSS
import './Header.scss'

// Images
import ProjectLogo from "../../img/Logo.svg";
import SearchImg from "../../img/Search.svg"
import UserLogo from "../../img/Oval.png"


export default function Header() {
    const [isHover, setIsHover] = useState(false)

    function onHover(){
      setIsHover(true);
    }

    function noHover(){
      setIsHover(false);
    }

    const activeInputStyle = {
        width: '150px',
        display: 'block'
    }

    const passiveInputStyle = {
      width: '0'
    }

  return (
    <header>
      <div className="container parent">
        <div>
          <a href="#"><img src={ProjectLogo} alt="img" /></a>
        </div>
        <div>
          <a href="#" className="link">Box Office</a>
          <a href="#" className="link">Media</a>
          <a href="#" className="link">Society</a>
          <a href="#" className="link">Ratings</a>
          <a href="#" className="link">DVD & Blu-Ray</a>
        </div>
        <div className='flexJustify' onMouseLeave={() => noHover()}>
        <div className="searchBlock"><input className="searchInp" type="text" style={isHover === true ? activeInputStyle : passiveInputStyle }/></div>
          <button className="searchBtn" onMouseEnter={() => onHover()}><img className="search-icon" src={SearchImg} alt="img" /></button>
          <img src={UserLogo} alt="img" />
        </div>
      </div>
    </header>
  );
}
