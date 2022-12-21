import React from 'react'

import "./messege.css"
const Message = ({own}) => {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messtop">
            <img src={`${PF}ai.png`} alt="userimg" className='messaimg'/>
            <p className="messtext">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, deleniti?
            </p>
        </div>
        <div className="messaghr">
            1 hour
        </div>
      
    </div>
  )
}

export default Message
