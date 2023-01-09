import React, { useContext, useEffect, useState } from "react";
import "./Rightbar.css";
// import bimg from "../../assets/gift.png"
// import aic from "../../assets/connect2.jpg"
// import frnd from "../../assets/user/2.jpg"
// import frnd1 from "../../assets/user/3.jpg"
import axios from "axios";
import Lotties from "../../lottie/Lotties";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";
import Update from "../Update/Update";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser, dispatch} = useContext(AuthContext)

  const [friends, setFriends] = useState([])

  const [followed, setFollowed] = useState(currentUser.following.includes(user?.id))
  const[upadted,setupdated]=useState(false);

  useEffect(()=>{
    const getFriends = async () => {
      try{
        const friendList = await axios.get("/users/friends/"+ user._id);
        setFriends(friendList.data)
      }catch(err){
        console.log(err)
      }
    }
    getFriends();
  } , [user])

  const handleClick = async () => {
    try{
      if(followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id
        })
        dispatch({type: "UNFOLLOW", payload: user._id})
      } 
      else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id
        })
        dispatch({type: "FOLLOW", payload: user._id})
      }
    } catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }

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
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayConatiner">
          <img src={`${PF}heart.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">Your Freind Birthday today🎂</span>
          {/* <img src={aic} alt="" className="rightbarAd" /> */}
          <Lotties />
          <h4
            className="rightbarTitle1"
            style={{ color: "gray", marginBottom: "15px", fontWeight: "bold" }}
          >
            Connecting You With The Digital Life
          </h4>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src="assets/user/2.jpg"
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src="assets/user/2.jpg"
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src="assets/blog02.png"
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src="assets/blog02.png"
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src={`${PF}heart.png`}
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
        </div>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
      {user._id !== currentUser._id && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> : <Add/>}
        </button>
      )}
      <div className="cont">


        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship}
            </span>
          </div>
          <div className="up" style={{display:"flex",alignItems:"center",gap:"3.5rem"}}>


          {user._id === currentUser._id && (
        <button className="rightbarFollowButton" onClick={()=>setupdated(true)}>
          Update
         
        </button>
      )}

      {user._id === currentUser._id && (
        <button className="rightbarFollowButton" onClick={logout}>
      Logout
         
        </button>
      )}
          </div>
        </div>
        
          {
            upadted && <Update setOpenUpdate={setupdated} user={user} />
            
            }

        
      </div>
        <h4 className="rightbarTitle">User friends</h4>
        {friends.map(friend=>(
          <NavLink to={"/profile/"+ friend.username}>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={friend.profilePicture ? PF + friend.profilePicture : PF + "user/blank.jpg"}
              alt="ABC"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
        </div>
          </NavLink>
        ))
        }
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
