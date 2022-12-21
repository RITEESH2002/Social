import React, { useContext } from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import user from "../../assets/ai.png"
import logo from "../../VConnectfinal.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarleft">
          <NavLink to="/">
            <img style={{ height: 50, width: 200 }} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon
              style={{
                color: "white",
                fontSize: "20px !important",
                //!important for material icons
                marginLeft: "10px",
              }}
            />
            <input placeholder="search..." className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
       

        

<NavLink to ="/">


            <span className="topbarLink">Homepage</span>
</NavLink>
    

    

            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon style={{ color: "white" }} />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon style={{ color: "white" }} />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsActiveIcon style={{ color: "white" }} />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "user/blank.jpg"
              }
              alt="user"
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topbar;
