import React from 'react'
import "./Share.css"
import {PermMedia, Sell,Room, AddReaction,Send} from "@mui/icons-material";
import share from "../../assets/ai.png"
const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={share} alt="share" />
        <input
          placeholder="Just Share to connect!"
          className="shareInput"
        />
      </div>
      {/* <hr className="shareHr"/> */}
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <PermMedia htmlColor="lightblue" className="shareIcon"/>
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  <Sell htmlColor="green" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                  <Room htmlColor="red" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  <AddReaction htmlColor="yellow" className="shareIcon"/>
                  <span className="shareOptionText">Emoji's</span>
              </div>
          </div>
          <button className="shareButton" style={{display:"flex"}}>
          Share..
          
          <Send style={{marginLeft:"10px",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"20px",fontWeight:"bold"}}/>
          </button>
      </div>
    </div>
  </div>
  )
}

export default Share
