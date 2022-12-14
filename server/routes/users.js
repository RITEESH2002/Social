
const User = require("../models/User")
const router = require('express').Router();
const bcrypt= require("bcrypt")
// Multiple requests can be easily differentiated with the help of the Router()

// router.get("/", (req,res)=> {
//   res.send("hey its user route")
// })

//update user
router.put("/:id", async(req, res)=>{
  if(req.body.userId === req.params.id || req.body.isAdmin){
  // if that user or admin then only allow to update user 
    if(req.body.password){ //IF PASSWORD changed
      try{
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password , salt)
      // generate new hash password
      }
      catch(err){
        return res.status(500).json(err)
      }
    }
    try{
      // updating the user with the $set operator
      const user = await User.findByIdAndUpdate(req.params.id, {
       $set: req.body, 
   //$set outputs documents that contain all existing fields from the input documents and newly added fields
     })
     res.status(200).json("Account has been updated")
    }
    catch (err) {
      return res.status(500).json(err)
    }
  }
  else {
    return res.status(403).json("You can update only your acc")
  }
})


//delete user
router.delete("/:id", async (req,res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted")
    }
    catch (err) {
      return res.status(500).json(err);
    }
  }
  else {
    return res.status(403).json("You can delete only your account");
  }
});

// router.get("/:id", async (req,res) => {
//   try{
//     const user = await User.findById(req.params.id)
//     const {password, updatedAt, ...other} = user._doc // all content of that user (_doc)
//     // hiding password and updated at
//     res.status(200).json(user)
//   } catch(err){
//     res.status(500).json(err)
//   }
// })

// get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user
router.put("/:id/follow", async(req,res) => {
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id); // praveen
      const currentUser = await User.findById(req.body.userId); // riteesh
      if(!user.followers.includes(req.body.userId)) 
      // if riteesh not in praveens followers
      {
        await user.updateOne({$push: { followers: req.body.userId}})
        // add riteesh in praveens followers
        await currentUser.updateOne({$push: {following: req.params.id}})
        // add praveen in riteeshs following
        res.status(200).json("User has been followed");
      }
      else {
        res.status(403).json("You already follow this user")
      }
    } catch(err){
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot follow yourself :|");
  }
})


//unfollow a user

router.put("/:id/unfollow" , async(req,res)=> {
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if(user.followers.includes(req.body.userId))
      {
        await user.updateOne({ $pull: {followers: req.body.userId }})
        await currentUser.updateOne( {$pull: {following: req.params.id}})
        res.status(200).json("User has been unfollowed");
      }
      else{
        res.status(403).json("You already unfollow this user")
      }
    }catch(err) {
      res.status(500).json(err)
    }
  }
  else {
    res.status(403).json("Cannot unfollow yourself :!");
  }
})

module.exports = router
