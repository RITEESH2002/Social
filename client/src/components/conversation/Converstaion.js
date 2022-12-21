import React from 'react'
import "./conversation.css"

function Conversation() {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='conv'> 
      <img src={`${PF}ai.png`} alt="userimg" 
        className='convimg'
      />
      <span className='convname'>MY_NAME</span>
    </div>
  )
}

export default Conversation
