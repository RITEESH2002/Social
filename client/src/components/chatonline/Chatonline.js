import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./chatonline.css"

function Chatonline({onlineUsers,currentId,setCurrentChat}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const PF =  process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);
 console.log(friends)

 
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='chatOnline'>
{
  onlineFriends.map((o)=>{


        <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
            <div className="img">
                <img src={`${PF}ai.png`} alt="user" className='imageuser'/>
                <div className='userbadge'></div>
            </div>
            <span className='name'>{o?.username}</span>
        </div>
  })
}

      
    </div>
  )
}

export default Chatonline
