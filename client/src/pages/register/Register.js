import React, { useRef } from "react";
import "./Register.css";
import logo from "../../VConnectfinal.svg";
import Reg from "../../lottie/Reg";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords dont match!")
    } else{
      const user = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
      } ;
      try {
        await axios.post("/auth/register", user);
        navigate('/login')
      } catch(err) {
        console.log(err)
      }
    }
  };

  return (
    <div className="login">
      <div
        className="loginWrapper"
        style={{
          padding: "30px",
          border: "2px solid gray",
          borderRadius: "10px",
        }}
      >
        <div className="loginLeft">
          <h3 className="loginLogo">VConnect</h3>
          <Reg />
          <span
            className="loginDesc"
            style={{ color: "white", textAlign: "center" }}
          >
            VConnect you to the world 🌐
          </span>
          <h3
            style={{ color: "white", marginTop: "15px", textAlign: "center" }}
          >
            Register Here ➡️
          </h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
              type="text"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">Sign Up </button>
            <button className="loginRegisterButton">
              Log into your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
