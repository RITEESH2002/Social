import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Update.css";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Update = ({ setOpenUpdate, user }) => {

  // const {user} = useContext(AuthContext)

  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [desc, setDesc] = useState(user.desc) 
  const [name, setName] = useState(user.username) 
  const [password, setPassword] = useState("") 
  const [passwordAgain, setPasswordAgain] = useState("") 
  const [city, setCity] = useState(user.city) 
  const [from, setFrom] = useState(user.from) 
  const [relationship, setRelationship] = useState(user.relationship) 
  const email = user.email
  const refe = useRef()
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const password1 = useRef();
  const passwordAgain1 = useRef();
  // console.log(user)
  
 
  const handleClick = async (e) => {
    e.preventDefault();
    // window.location.reload();
    if(passwordAgain1.current.value !== password1.current.value){
      passwordAgain1.current.setCustomValidity("Passwords dont match!")
    } else{
      
      const upd = {
        userId: user._id,
        // username : name,
        // profilePicture: fileName1,
        // coverPicture: fileName,
        email : email,
        password : password,
        desc: desc,
        city: city,
        from: from,
        relationship: relationship,
      } ;
      if (cover) {
        const data = new FormData();
        const fileName = Date.now() + cover.name;
        // console.log(fileName)
        data.append("name", fileName);
        data.append("file", cover);
        upd.coverPicture = fileName
        
        try {
          await axios.post("/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
      if (profile) {
        const data1 = new FormData();
        const fileName1 = Date.now() + profile.name;
        // console.log(fileName1)
        data1.append("name", fileName1);
        data1.append("file", profile);
        upd.profilePicture = fileName1;
      
        try {
          await axios.post("/upload", data1);
        } catch (err) {
          console.log(err);
        }
      }
      try {
        await axios.put("/users/"+ user._id, upd);
        window.location.reload()
        // navigate('/home')

      } catch(err) {
        console.log(err)
      }
    }
  };
//   const upload = async (file) => {
//     console.log(file)
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//     //   const res = await makeRequest.post("/upload", formData);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

  // const handleChange = (e) => {
  // //   setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  // };

// //   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (user) => {
//       return makeRequest.put("/users", user);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["user"]);
//       },
//     }
//   );

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   //TODO: find a better way to get image URL
    
  //   // let coverUrl;
  //   // let profileUrl;
  //   // coverUrl = cover ? await upload(cover) : user.coverPic;
  //   // profileUrl = profile ? await upload(profile) : user.profilePic;
    
  //   // mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
  //   // setOpenUpdate(false);
  //   // setCover(null);
  //   // setProfile(null);
  // }
   console.log("cover :", cover)
   console.log("profile :", profile)
 console.log("password ", password)
 console.log("passwordAgaiun ", passwordAgain)
  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form onSubmit={handleClick}>
          <div className="files">
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : (user.coverPicture
                ? PF + user.coverPicture
                : PF + "user/blank.jpg")
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : (user.profilePicture
                ? PF + user.profilePicture
                : PF + "user/blank.jpg")
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <label>Description</label>
          <input
            type="text"
            value={desc}
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            maxLength="100"
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            name="email"
           
            disabled
          />
          <label>Password</label>
          <input
            type="password"
            // value={password}
            ref={password1}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <label>Password Again</label>
          <input
            type="password"
            // value={passwordAgain}
            name="password"
            ref={passwordAgain1}
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
          {/* <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          /> */}
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>From</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <label>Relationship Status</label>
          <input
            type="text"
            name="relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          />
          <button type="submit" >Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default Update;
