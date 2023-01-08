import React,{useContext} from 'react'
import {format} from "timeago.js"
import { AuthContext } from '../../context/AuthContext'

import "./messege.css"
const Message = ({message, own}) => {
    const {user}=useContext(AuthContext)
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messtop">
            <img src={user?.profilePicture ? user.profilePicture : PF+"/user/blank.jpg"} alt="userimg" className='messaimg'/>
            <p className="messtext">
                {message.text}
            </p>
        </div>
        <div className="messaghr">
            {format(message.createdAt)}
        </div>
      
    </div>
  )
}

export default Message
