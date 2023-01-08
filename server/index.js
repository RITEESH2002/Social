const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv =  require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users.js')
const authRoute = require('./routes/auth.js')
const bodyParser = require("body-parser")
const postRoute = require("./routes/posts")
const conversationRoute = require("./routes/conversations")
const messageRoute = require("./routes/messages")
const multer = require("multer")
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
  console.log("Connected to MONGO")
})

// Each app.use(middleware) is called every time a request is sent to the server.
app.use(bodyParser.urlencoded({ extended: true }));

//middleware : have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle
app.use(express.json())
// It parses incoming requests with JSON payloads
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// js module that helps in securing HTTP headers
app.use(morgan("common"))
// to log HTTP requests and errors, and simplifies the process

// app.get("/", (req,res)=>{
//   res.send("welcome to homepage")
// })
// app.get("/users", (req,res)=>{
//   res.send("welcome to Userspage")
// })

app.use("/images", express.static(path.join(__dirname, "public/images")))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  // destination is used to determine within which folder the uploaded files should be stored.
  
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
  // filename is used to determine what the file should be named inside the folder. 
})

const upload = multer({storage});

//The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions.\
// app.post(path, callback [, callback ...])

app.post("/api/upload", upload.single("file"), (req, res)=>{
  try{
    return res.status(200).json("Uploaded successfully") 
  }catch(err){
    console.log(err)
  }
})


app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/conversations", conversationRoute)
app.use("/api/messages", messageRoute)

app.listen(8800, ()=>{
  console.log("Backend Server is ready!")
})