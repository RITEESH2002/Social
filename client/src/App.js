import React from 'react'
import { Nav } from './components'
import { Header, About, Use, Contact, Find } from './containers'
import './App.css';
import styled from "styled-components";
import { AccountBox } from "./pages/Login";
import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile';
import Login from './pages/loginv/Loginv';
import Register from './pages/register/Register';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const App = () => {
  return (
    <div className="App">
       {/* <div className="grad_bg">  */}
          {/* <Nav /> */}
          {/* <Header />
       </div>
       <About />
       <Use />
       <Contact />
       <Find /> */}
      {/* <Login/>
      <Register/> */}
       <Home/>
       {/* <Profile/> */}
       
 
           {/* <AppContainer>
             <AccountBox />
           </AppContainer> */}
       </div>
  
  )
}

export default App
