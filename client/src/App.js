import React, { useContext } from 'react'
import { Nav } from './components'
// import { Header, About, Use, Contact, Find } from './containers'
import './App.css';
import News from './pages/News/News';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom"
import { AccountBox } from "./pages/Login";
import { Navigate } from 'react-router-dom';

import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile';
import Login from './pages/loginv/Loginv';
import Register from './pages/register/Register';
import Starting from './containers/Starting';
import { AuthContext } from './context/AuthContext';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const App = () => {

  const {user} = useContext(AuthContext)

  return (
    <BrowserRouter>

    <div className="App">
       <div className="grad_bg"> 
           {/* <Nav /> */}
       </div>
         {/* <Starting /> */}
      {/* <Login/>
      <Register/>
       <Home/>
       <Profile/> */}
       
 
            {/* <AppContainer>
             <AccountBox />
           </AppContainer>  */}

           <Routes>
           
            <Route exact path="/" element={user ? <Home/> : <Starting />} />
            <Route path="/register" element={user ?  <Navigate to="/"/> : <Register />} />
            
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
            {/* <Route path="/home" element={user ? <Home/> : <Starting/>} /> */}
            <Route path="/news" element={<News/>}/>
            <Route path="/profile/:username" element={user ? <Profile/> : <Starting/>} />
            
          </Routes>
       </div>
    </BrowserRouter>
  
  )
}

export default App
