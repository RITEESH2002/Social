import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from "../../assets/ai.png"
import logo from "../../VConnectfinal.svg"
function Topbar() {
  return (
    <>
        <div className="topbarContainer">
            <div className="topbarleft">
            <a href=""><img style={{height:50, width:200}} src={logo
          } alt="logo"/></a>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon style={{color:"white",fontSize:"20px !important",marginLeft:"10px"}}/>
                    <input placeholder='search...' className='searchInput'/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>

                </div>
                <div className='topbarIcons'>
                    <div className="topbarIconItem">
                        <PersonIcon style={{color:"white" }}/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon style={{color:"white"}}/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsActiveIcon style={{color:"white"}}/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src={user} alt="user" className='topbarImg'/>
            </div>
        </div>
    </>
  )
}

export default Topbar
