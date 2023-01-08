import React from 'react'
import {format} from "timeago.js"

import "./messege.css"
const Message = ({message, own}) => {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messtop">
            <img src={`${PF}ai.png`} alt="userimg" className='messaimg'/>
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
