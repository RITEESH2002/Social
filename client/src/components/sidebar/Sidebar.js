import React from 'react'
import "./Sidebar.css"
import Lotties from "../../lottie/Lotties";
import { NavLink } from 'react-router-dom';
// import user1 from "../../assets/blog02.png"
import {
    RssFeed,
    ThreePRounded,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    Diversity1TwoTone
  } from '@mui/icons-material';
//   import Diversity1Icon from '@mui/icons-material/Diversity1';
const Sidebar = () => {
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        
        <NavLink to ="/messenger">

        <li className="sidebarListItem">
          <ThreePRounded className="sidebarIcon" />
          <Lotties />
          <span className="sidebarListItemText">Chats</span>
        </li>

        </NavLink>
      <hr className="sidebarHr" /> 
        
        <NavLink to ="/news">

        <li className="sidebarListItem">
          <School className="sidebarIcon" />
          <Lotties />
          <span className="sidebarListItemText">News</span>
        </li>
        </NavLink>
        
      </ul>
      
    </div>
  </div>
  )
}

export default Sidebar
