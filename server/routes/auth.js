const router = require('express').Router()
const User = require("../models/User")
const bcrypt = require('bcrypt')

// REGISTER
router.post("/register", async (req, res)=> {
  
  try{
    //For generating protected password
    //A salt is a random string that makes the hash unpredictable
    const salt = await bcrypt.genSalt(10);
    // gensalt generates a random text salt for use with hashpw
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    // bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt
    
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
      //  req.body.password
    });

    // save user and respond
    const user = await newUser.save(
    //   function(err) {
    //   if(err) {
    //     console.log("Can't create new user: %s", err);
  
    //   } else {
    //    /* We succesfully saved the new user, so let's send back the user id. */
  
    //   }
    // }
    );
    console.log(user)
    res.status(200).json(user);
  } catch(e) {
    console.log(e)
  }
  
  // const user = await new User({
    //   username:"john",
    //   email:"john@gmail.com",
    //   password:"123456789",
    // })
    
    // res.send("OK")
  // await user.save();
  
});

// LOGIN
router.post('/login', async (req,res) => {
  try{
    const user = await User.findOne({email : req.body.email});
    !user && res.status(404).json("user not found")
    console.log(1)
    
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    // console.log(req.body.password === user.password)
    !validPassword && res.status(400).json("Wrong password")
    console.log(2)
    
    res.status(200).json(user)
    console.log(3)
  }
  catch (err) {
    console.log(err);
  }
})

module.exports = router