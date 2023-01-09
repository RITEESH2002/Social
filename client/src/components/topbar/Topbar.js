import React, { useContext, useState } from "react";
import "./Topbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import user from "../../assets/ai.png"
import logo from "../../VConnectfinal.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Topbar() {
  const[toggleMenu,setToggleMenu]=useState(false);
  const[upadted,setupdated]=useState(false);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [searchUser, setSearchUser] = useState("");
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      console.log(searchUser);
      try{
        const res = await axios("/users?username=" + searchUser);
        setSearchUser(res.data);
      }catch(e){
        console.log(e)
      }
    }
  };

  const logout=()=>{
    let text;
  if (window.confirm("Do you want to Logout!") == true) {
    localStorage.clear();
    window.location.href="/";
    text="Logging you out"
  
} else {
  text = "";
}
  }

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
            <input
              placeholder="search..."
              className="searchInput"
              onChange={(e) => setSearchUser(e.target.value)}
              // value={searchUser}
              onKeyDown={handleKeyPress}
            />
          </div>
          {searchUser ? (
            <div className="divii">
            <NavLink to = {`/profile/${searchUser.username}`}>
              <div className="searchText">{searchUser.username}</div>
              </NavLink>
            </div>
          ) : (
            <></>
          )}
        </div>
          <Link to={`/profile/${user.username}`}>
        <div className="topbarRight">
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "user/blank.jpg"
              }
              alt="user"
              className="topbarImg"
            />
          <span className="textRight">{user.username}</span>
        </div>
          </Link>


        <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p> <NavLink to ="/">
              <span>Homepage</span>
              </NavLink></p>
            <p><span>Timeline</span></p>
            <p> <NavLink to ="/messenger">
              <span>Chat</span>
              </NavLink></p>
              <p> <NavLink to ="/news">
              <span>News</span>
              </NavLink></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <button type="button">


          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "user/blank.jpg"
              }
              alt="user"
              className="topbarImgs"
            />
          </Link>
          </button>
     
            <button type="button" onClick={logout} style={{marginTop:"6px"}}>Logout</button>
          </div>
        </div>
        )}
      </div>
    
      </div>
    </>
  );
}

export default Topbar;
