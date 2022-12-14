import React from 'react'
import "./Sidebar.css"
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
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon" />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <ThreePRounded className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
        {/* <li className="sidebarListItem">
          <PlayCircleFilledOutlined className="sidebarIcon" />
          <span className="sidebarListItemText">Videos</span>
        </li> */}
        <NavLink to ="/news">

        <li className="sidebarListItem">
          <School className="sidebarIcon" />
          <span className="sidebarListItemText">News</span>
        </li>
        </NavLink>
        {/* <li className="sidebarListItem">
          <Group className="sidebarIcon" />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon" />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <WorkOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <Event className="sidebarIcon" />
          <span className="sidebarListItemText">Events</span>
        </li> */}
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        <li className="sidebarListItem">
        <Diversity1TwoTone className='sidebarIcon'/>
        <span className='sidebarListItemText'>Friends</span>
        </li>
            <li className="sidebarFriend">
                <img src={`${PF}ai.png`} alt="Praveen" className="sidebarFriendImg" />
                <span className='sidebarFriendName'>Praveen</span>
            </li>
            <li className="sidebarFriend">
                <img src={`${PF}ai.png`} alt="Riteesh_pai" className="sidebarFriendImg" />
                <span className='sidebarFriendName'>Riteesh_pai</span>
            </li>
            <li className="sidebarFriend">
                <img src={`${PF}ai.png`} alt="ABC" className="sidebarFriendImg" />
                <span className='sidebarFriendName'>ABC</span>
            </li>
            <li className="sidebarFriend">
                <img src={`${PF}ai.png`} alt="XYZ" className="sidebarFriendImg" />
                <span className='sidebarFriendName'>XYZ</span>
            </li>
            <li className="sidebarFriend">
                <img src={`${PF}ai.png`} alt="CBD" className="sidebarFriendImg" />
                <span className='sidebarFriendName'>CBD</span>
            </li>
        </ul>
    </div>
  </div>
  )
}

export default Sidebar
