import React, { useContext, useRef } from "react";
import "./Loginv.css";
import Reg from "../../lottie/Log"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = (e) =>{
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value},
    dispatch)
 
  }

  console.log(user)
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
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" className="loginInput" ref={email} />
            <input placeholder="Password" required minLength="6" type="password" className="loginInput" ref={password} />
            <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress size="25px"  /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress size="25px" /> : "Create An Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}