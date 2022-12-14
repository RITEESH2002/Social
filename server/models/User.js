const mongoose = require('mongoose')
// Schema represents the structure of the document default values 
//required min,max is all validator in built
// required islike not null

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true
  },
  email:{
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  profilePicture: {
    type: String,
    default: ""
  },
  coverPicture: {
    type: String,
    default: ""
  },
  //followers can be more than one so its array
  followers: {
    type: Array,
    default: []
  } // user id's stored in array 
  ,
  following: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  desc: {
    type: String,
    max: 50
  },
  city: {
    type: String,
    max: 50
  },
  from: {
    type: String,
    max: 50
  },
  relationship: {
    type: Number,
    enum: [1,2,3]
  }
},
{timestamps: true}
)
// creates a validator and checks if the value is given in an array -> enum 
// timestamps why its used ->  it stores current time of the database created and when its updated 
module.exports = mongoose.model("User", UserSchema)