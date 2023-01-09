const router = require("express").Router();
const Post = require("../models/Post");
const { castObject } = require("../models/User");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  // Create post with all contents in req body
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//make a comment
router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    try{
    const post = await PostMessage.findById(id);

    // post.comments.push(value);
      await post.updateOne({ $push: { comment: req.body.userId } });
      res.status(200).json("The comment has been sent");

    } catch(e){
      res.status(500).json(e)
    }

    
}
;

//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //Selected the post on which any user clicks

    if (req.body.userId === post.userId) 
    //If the user is same as the one who uploaded the post then
    {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated :)");
    } else {
      res.status(403).json("You can update only your post :/");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // console.log(post)
    if (post.userId !== req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
      
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like / dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId))
    // the post's like list doesnot have say user X
    {
      await post.updateOne({ $push: { likes: req.body.userId } });
      //Make him like it
      res.status(200).json("The post has been liked :)");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      //Make him dislike it
      res.status(200).json("The post has been disliked :(");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//get a post
router.get("/:id", async(req,res)=>{
  try{
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  }catch(err){
    res.status(500).json(err)
  }
})


//get timeline posts
router.get("/timeline/:userId" , async(req,res)=>{
  try{
    //SAY RITEESH follows PRAVEEN
    const currentUser = await User.findById(req.params.userId) //RITEESH
    const userPosts = await Post.find({userId : currentUser._id}) //RITEESH's posts
    const friendPosts = await Promise.all
    // Promise used because looping has to be done resulting in callback hell
    //Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
    (
      currentUser.following.map((friendId) => {
        return Post.find({userId : friendId})
      })
    )
    //All posts of following of Riteesh (here praveen only)
    res.status(200).json(userPosts.concat(...friendPosts))
  }catch(err){
    res.status(500).json(err)
  }
})

//get user's posts
router.get("/profile/:username" , async(req,res)=>{
  try{
    //SAY RITEESH follows PRAVEEN
    const user = await User.findOne({username : req.params.username}) //RITEESH
    const posts = await Post.find({userId : user._id}) //RITEESH's posts
   
    //All posts of following of Riteesh
    res.status(200).json(posts)
  }catch(err){
    res.status(500).json(err)
  }
})


module.exports = router;
