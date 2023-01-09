import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './Nav.css'
import { NavLink } from "react-router-dom";
import VConnectfinal from '../../VConnectfinal.svg'
// BEM = Block Element Modifier

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img style={{height:50, width:200}} src={VConnectfinal
          } alt="logo"/>
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
      <NavLink to="/login">
        <button type="button">Sign in</button>
      </NavLink>
      <NavLink to="/register">
        <button type="button">Sign up</button>
      </NavLink>
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
          <NavLink to="/login">

            <button type="button" style={{marginBottom:"10px"}}>Sign in</button>
          </NavLink>

          <NavLink to="/register">


            <button type="button">Sign up</button>
          </NavLink>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
