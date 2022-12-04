import React from "react";
import "./Loginv.css";
import Reg from "../../lottie/Log"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper" style={{padding:"20px",border:"1px solid white"}}>
        <div className="loginLeft">
        <h2 className="loginLogo">VConnect</h2>
        
          <Reg/>
          <span className="loginDesc" style={{color:"white",textAlign:"center"}}>
            VConnect you to the world🌐
          </span>
          <h3 style={{color:"white",marginTop:"15px",textAlign:"center"}}>Login Here ➡️</h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}