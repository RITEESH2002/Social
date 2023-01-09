// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import "./Comment.css";
// const Comment = () => {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [comment, setComment] = useState("");
//   const { user } = useContext(AuthContext);
//   // const comments = [
//   //   {
//   //     id: 1,
//   //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//   //     name: "John Doe",
//   //     userId: 1,
//   //     profilePicture:
//   //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   // ];
//   const handleComment = async () => {
//     const comm = {
//       value : comment
//     }
//     // await axios.post("/posts/"+post._id, comm);
//     window.location.reload();
//   };
//   return (
//     <>
//       <div className="comments">
//         <div className="write">
//           <img
//             className="imgpro"
//             src={
//               user.profilePicture
//                 ? PF + user.profilePicture
//                 : PF + "user/blank.jpg"
//             }
//             alt=""
//           />
//           <input
//             type="text"
//             placeholder="write a comment"
//             className="inputt"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//           <button className="buttonn" onClick={handleComment}>Send</button>
//         </div>
//         {post.comment.map((comment) =>
//          (
//           <div className="comment">
//             <img src={user.profilePicture} alt="" className="imgpro" />
//             <div className="info">
//               <span>{comment.name}</span>
//               <p>{comment.desc}</p>
//             </div>
//             <span className="date">1 hour ago</span>
//           </div>
//         )
//         )
//         }
//       </div>
//     </>
//   );
// };

// export default Comment;
