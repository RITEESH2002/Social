import React from 'react'
import "./Rightbar.css"
// import bimg from "../../assets/gift.png"
// import aic from "../../assets/connect2.jpg"
// import frnd from "../../assets/user/2.jpg"
// import frnd1 from "../../assets/user/3.jpg"
import Lotties from '../../lottie/Lotties'
const Rightbar = ({user}) => {
  
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightBar=()=>{
    return (
      <>

<div className="birthdayConatiner">
          <img src={`${PF}heart.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            Your Freind Birthday today🎂
          </span>
          {/* <img src={aic} alt="" className="rightbarAd" /> */}
          <Lotties/>
          <h4 className='rightbarTitle1' style={{color:"gray",marginBottom:"15px",fontWeight:"bold"}}>
          Connecting You With The Digital Life
          </h4>
          <h4 className='rightbarTitle'>
          Online Friends
          </h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/user/2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/user/2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/blog02.png" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/blog02.png" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={`${PF}heart.png`} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">ABC</span>
            </li>
          </ul>
        </div>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
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
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.realtionship === 2 ? "Commited" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}heart.png`}
              alt="ABC"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ABC</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}heart.png`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}heart.png`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}heart.png`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}heart.png`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {user ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
