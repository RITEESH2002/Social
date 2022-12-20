import React from 'react'
import "./chatonline.css"

function Chatonline() {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="img">
                <img src={`${PF}ai.png`} alt="user" className='imageuser'/>
                <div className='userbadge'></div>
            </div>
            <span className='name'>MY_name</span>
        </div>
      
    </div>
  )
}

export default Chatonline
