import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './Nav.css'
import VConnectfinal from '../../VConnectfinal.svg'
// BEM = Block Element Modifier

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#home"><img style={{height:50, width:200}} src={VConnectfinal
          } alt="logo"/></a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#VConnect">About VConnect</a></p>
          <p><a href="#howtouse">HowToUse</a></p>
          <p><a href="#contact">ContactUs</a></p>
          <p><a href="#find">FindUs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
       <button type="button">Sign In</button>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#VConnect">About VConnect</a></p>
            <p><a href="#howtouse">HowToUse</a></p>
            <p><a href="#contact">ContactUs</a></p>
            <p><a href="#find">FindUs</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
