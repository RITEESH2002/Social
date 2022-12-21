import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
// import cover from "../../assets/user/2.jpg"
// import user from "../../../public/assets/user/1.jpeg"
import "./Profile.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Profile() {
  
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({});
  const params = useParams()

  useEffect(()=>{
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`)
      setUser(res.data)
    }
    fetchUser();
  },[params.username])

  return (
    <div style={{color:"white"}}>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={user.coverPicture ? PF + user.coverPicture : PF+"user/No_Cover.jpg"} alt="username" className="profileCoverImg" />
                <img src={user.profilePicture ? PF + user.profilePicture : PF+"user/blank.jpg"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h5 className="profileInfoName">
                    {user.username}
                </h5>
                <span className='profileInfoDesc'>
                 
                    {user.desc}
                </span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed username={params.username}/>
      <Rightbar user = {user}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
