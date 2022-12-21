import React from 'react'
// import Topbar from "../"
import "./messenger.css"
import Conversation from '../../components/conversation/Converstaion'
import Chatonline from '../../components/chatonline/Chatonline'
import Message from '../../components/messege/Messege'
// import Topbar from '../../components/topbar/Topbar'
import { NavLink } from 'react-router-dom'
import logo from "../../VConnectfinal.svg"
function Messenger() {
  return (
    <>

<div style={{height:"70px",position:"sticky",width:"100%",zIndex:"1",background:"#0b011f",borderBottom:"1px solid black"}}>
        

          <div className="topbarContainer">
          <div className="topbarleft">
          <NavLink to="/">
            <img style={{ height: 50, width: 200 }} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="topbarCenter">
        <a href="" style={{textDecoration:"none"}}>

     <h1 style={{color:"gray",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold",textShadow:"1px 1px 1px white"}}>
       VConnect Messenger
      </h1>
    </a>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
       

        

      <NavLink to ="/">


            <span className="topbarLink">Homepage</span>
      </NavLink>
    

    

           
          </div>
      
        </div>
      </div>
      </div>
    <div className="messenger">
    <div className='chatmenu'>
    <div className="menuwrap" style={{color:"white"}}>
        <input className='search' placeholder='search your friends'/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
      </div>
      <div className='chatbox' style={{color:"white"}}> 
      <div className="chatwrap">
        <div className="chattop" style={{overflowY:"scroll"}}>
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message own={true}/>
        </div>
        <div className="chatbot">
            <textarea className='type' placeholder='Write to send'>

                
            </textarea>
            <button className='send'>
                Send
            </button>
        </div>
      </div>
      </div>
      <div className="chatonl">
        <div className="onlwrap" style={{color:"white"}}>
            <Chatonline/>
            <Chatonline/>
            <Chatonline/>
            <Chatonline/>
            <Chatonline/>
        </div>
      </div>

    </div>

    </>
  )
}

export default Messenger
