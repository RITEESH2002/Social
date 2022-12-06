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

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
  console.log("Connected to MONGO")
})

// Each app.use(middleware) is called every time a request is sent to the server.
app.use(bodyParser.urlencoded({ extended: true }));

//middleware : have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle
app.use(express.json())
// It parses incoming requests with JSON payloads
app.use(helmet())
// js module that helps in securing HTTP headers
app.use(morgan("common"))
// to log HTTP requests and errors, and simplifies the process

// app.get("/", (req,res)=>{
//   res.send("welcome to homepage")
// })
// app.get("/users", (req,res)=>{
//   res.send("welcome to Userspage")
// })

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.listen(8800, ()=>{
  console.log("Backend Server is ready!")
})