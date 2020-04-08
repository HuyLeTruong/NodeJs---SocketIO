var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function (socket) {
  console.log("Co ket noi: " + socket.id);
  //Disconnect
  socket.on("disconnect", function () {
    console.log("Ngat ket noi: " + socket.id);
  });

  socket.on("Client-send-data", function (data) {
    console.log(data);
    // all sockets will recieve data from server
    //io.sockets.emit("Server-send-data", socket.id + " " + data + "8888");

    // talk-back to client who send data to server
    //socket.emit("Server-send-data", data + "-current" + socket.id);

    // broadcast to other users
    socket.broadcast.emit("Server-send-data", data + "broadcast");
  });
});

app.get("/", function (req, res) {
  res.render("home.ejs");
});
