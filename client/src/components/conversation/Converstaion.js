import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./conversation.css"

function Conversation({conversation, currentUser}) {
  const [user, setUser] = useState(null)

  const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  
  useEffect(()=>{
    const friendId = conversation.members.find((m)=>
      m !== currentUser._id );
      // console.log("HI",friendId)
    const getUser = async () => {
      try{
        const res = await axios("/users?userId=" + friendId)
        setUser(res.data)
      } catch(err) {
        console.log(err)
      }
    };
    getUser();
  },[currentUser, conversation])
  // console.log(user)
  return (
    <div className='conv'> 
      <img src={user?.profilePicture ? user.profilePicture : PF+"/user/blank.jpg"} alt="userimg" 
        className='convimg'
      />
      <span className='convname'>{user?.username}</span>
    </div>
  )
}

export default Conversation
