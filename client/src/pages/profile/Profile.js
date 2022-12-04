import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import cover from "../../assets/user/2.jpg"
import user from "../../assets/co1.png"
import "./Profile.css"
function Profile() {
  return (
    <div style={{color:"white"}}>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={user} alt="username" className="profileCoverImg" />
                <img src={cover} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h5 className="profileInfoName">
                    MY_NAME
                </h5>
                <span className='profileInfoDesc'>
                 <span className="profileInfoName1">About Me:-</span>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quia voluptatibus incidunt praesentium non fuga nesciunt iure exercitationem! Excepturi vel veniam vitae enim similique quasi cumque porro sunt voluptatum incidunt.
                </span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
      <Rightbar profile/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
