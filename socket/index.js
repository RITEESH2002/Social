// //Socket.IO is a JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.

// const io = require("socket.io")(8900, {
//   cors: {
//     //Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
//     origin: "http://localhost:3000",
//   },
// });
// let users=[];
// // have to take socket id and user id from client side but socket id always changes when page is refreshed. 
// const addUser = (userId, socketId) => {
//   !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
// };
// //above function to push only unique users other wise it pushes users every time

// // when users disconnected have to removed from user array 
// const removeUser = (socketId) => {
//   users = users.filter((user) => user.socketId !== socketId);
// };
// //this down function is to find which user is sending message
// const getUser = (userId) => {
//   return users.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
//   //connection
//   console.log("A user connected");
//   socket.on("addUser", (userId) => {
//     addUser(userId, socket.id);
//     io.emit("getUsers", users);
//   });

//   //send message and get 
//   socket.on("sendMessage", ({ senderId, 
//       receiverId, text }) => {
//     const user = getUser(receiverId);
//     io.to(user.socket.id).emit("getMessage", {
//       senderId,
//       text,
//     });
//   });

//   // disconnect function 
//   socket.on("disconnect", () => {
//     console.log("user disconnected!");
//     removeUser(socket.id);
//     io.emit("getUsers", users);
//   });
// });


// // send event to client -> use io 
// //to send to every client -> use io.emit
// //to send to one client -> use io.to(socketID).emit
// //take event from client-> use socket.on
// //send event to server -> use socket.emit
// //take event from server-> use socket.on 

const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId !== userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});