//Socket.IO is a JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.

const io = require("socket.io")(8900, {
  cors: {
    //Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  io.emit("Welcome","Hello this is socket server")
});
