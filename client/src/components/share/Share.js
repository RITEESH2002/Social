import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { PermMedia, Sell, Room, AddReaction, Send, Cancel } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
// import share from "../../assets/ai.png"
import axios from "axios";
const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "user/blank.jpg"
            }
            alt="share"
          />
          <input
            placeholder={`Whats on your mind ${user.username} ?`}
            className="shareInput"
            ref={desc}
          />
        </div>

        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="lightblue" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg , .jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption">
              <Sell htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="red" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <AddReaction htmlColor="yellow" className="shareIcon" />
              <span className="shareOptionText">Emoji's</span>
            </div>
          </div>
          <button
            className="shareButton"
            style={{ display: "flex" }}
            type="submit"
          >
            Share
            <Send
              style={{
                marginLeft: "10px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
