// Basic Socket.io server for Pokka's Bash Arena
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Adjust as needed for production
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 2567;

// Simple in-memory matchmaking
let waitingPlayer = null;

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Matchmaking: pair up two players
  if (waitingPlayer) {
    // Start a new game room
    const roomId = `room-${waitingPlayer.id}-${socket.id}`;
    socket.join(roomId);
    waitingPlayer.join(roomId);
    io.to(roomId).emit('match_found', { roomId, players: [waitingPlayer.id, socket.id] });
    waitingPlayer = null;
  } else {
    waitingPlayer = socket;
    socket.emit('waiting_for_opponent');
  }

  // Relay player updates to the room
  socket.on('player_update', (data) => {
    const rooms = Array.from(socket.rooms).filter(r => r !== socket.id);
    rooms.forEach(roomId => {
      socket.to(roomId).emit('game_update', data);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    if (waitingPlayer === socket) {
      waitingPlayer = null;
    }
    // Notify others in the room
    const rooms = Array.from(socket.rooms).filter(r => r !== socket.id);
    rooms.forEach(roomId => {
      socket.to(roomId).emit('player_left', socket.id);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
}); 