import React from "react";
import "./Register.css";
import logo from "../../VConnectfinal.svg"
import Reg from "../../lottie/Reg";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper" style={{padding:"30px",border:"2px solid gray",borderRadius:"10px"}}>
        <div className="loginLeft">
          <h3 className="loginLogo">
            VConnect
          </h3>
          <Reg />
          <span className="loginDesc" style={{color:"white",textAlign:"center"}}>
            VConnect you to the world🌐
          </span>
          <h3 style={{color:"white",marginTop:"15px",textAlign:"center"}}>Register Here ➡️</h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Register </button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
