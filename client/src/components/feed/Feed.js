import React, { useContext, useEffect, useState } from 'react'
import "./Feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { Posts } from '../../dummyData'
import { AuthContext } from '../../context/AuthContext'
const Feed = ({username}) => {

  const {user} = useContext(AuthContext) 
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/"+ username ): await axios.get("posts/timeline/" + user._id)
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts();
  },[username, user._id])

  return (
    <div className='feed'>
     <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
