const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set("port", 1880);
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "/static", "index.html"));
});

server.listen(1880, function () {
    console.log("Starting server on port 1880");
});

io.on("connection", function (socket) {
    socket.emit("new", socket.id);
});