const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Konfiguracja aplikacji
const PORT = process.env.PORT || 2000;
app.use(express.json());

const players = {};
const rooms = {};

server.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});
