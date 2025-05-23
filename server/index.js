// Basic Socket.io server for Pokka's Bash Arena
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Configure allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://pokka-bash-arena.onrender.com', 'https://your-frontend-domain.com']
  : ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'];

console.log('[Server] Allowed origins:', allowedOrigins);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  },
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000,
  connectTimeout: 10000,
  allowEIO3: true
});

const PORT = process.env.PORT || 3001;

// Game rooms management
const rooms = new Map(); // roomId -> { players: Set<socket>, playerIds: Map<socket, playerId>, scores: Map<playerId, score>, gameState: 'waiting' | 'playing' }

// Arena layouts
const ARENA_LAYOUTS = ['BASIC', 'PILLARS', 'MAZE', 'ASYMMETRIC'];

// Create a new room
function createRoom() {
  const roomId = `room-${Math.random().toString(36).substring(2, 8)}`;
  rooms.set(roomId, {
    players: new Set(),
    playerIds: new Map(),
    scores: new Map(),
    gameState: 'waiting',
    createdAt: Date.now()
  });
  return roomId;
}

// Get available room or create new one
function getAvailableRoom() {
  for (const [roomId, room] of rooms.entries()) {
    if (room.players.size < 4) {
      return roomId;
    }
  }
  return createRoom();
}

// Add round timers to rooms
function startRound(roomId) {
  const room = rooms.get(roomId);
  if (!room) return;
  // Pick a random layout
  const layout = ARENA_LAYOUTS[Math.floor(Math.random() * ARENA_LAYOUTS.length)];
  room.layout = layout;
  room.gameState = 'playing';
  room.roundEnd = Date.now() + 60000; // 60 seconds from now
  // Reset scores
  room.scores = new Map(Array.from(room.players).map(p => [room.playerIds.get(p) || p.id, 0]));
  io.to(roomId).emit('game_start', {
    roomId,
    players: Array.from(room.players).map(p => room.playerIds.get(p) || p.id),
    layout,
    roundEnd: room.roundEnd
  });
  // Start round timer
  if (room.roundTimer) clearTimeout(room.roundTimer);
  room.roundTimer = setTimeout(() => {
    // End round, set state to waiting, start new round
    room.gameState = 'waiting';
    // Broadcast leaderboard
    io.to(roomId).emit('leaderboard', {
      scores: Array.from(room.scores.entries()).map(([id, score]) => ({ id, score }))
    });
    io.to(roomId).emit('game_state_changed', {
      roomId,
      gameState: 'waiting',
      players: Array.from(room.players).map(p => room.playerIds.get(p) || p.id)
    });
    setTimeout(() => startRound(roomId), 3000); // 3s break, then new round
  }, 60000);
}

io.on('connection', (socket) => {
  // console.log('[Server] User connected:', socket.id); // Commented out

  // Handle room joining
  socket.on('join_room', (data) => {
    const playerId = data && data.playerId ? data.playerId : socket.id;
    let roomId;
    let room;
    // Try to find a room with < 4 players
    for (const [rid, r] of rooms.entries()) {
      if (r.players.size < 4) {
        roomId = rid;
        room = r;
        break;
      }
    }
    if (!roomId) {
      roomId = createRoom();
      room = rooms.get(roomId);
    }
    // Double-check: if room is now full, create a new one
    if (room.players.size >= 4) {
      roomId = createRoom();
      room = rooms.get(roomId);
    }
    socket.join(roomId);
    room.players.add(socket);
    room.playerIds.set(socket, playerId);
    
    // console.log(`[Server] Player ${socket.id} joined room ${roomId}`); // Commented out
    // console.log(`[Server] Room ${roomId} now has ${room.players.size} players`); // Commented out
    // Add concise debug log for all rooms and their player IDs
    console.log('[Server] Current rooms:');
    for (const [rid, r] of rooms.entries()) {
      const ids = Array.from(r.playerIds.values());
      console.log(`  ${rid}: [${ids.join(', ')}]`);
    }

    // Notify all players in the room about the new player
    io.to(roomId).emit('room_update', {
      roomId,
      players: Array.from(room.players).map(p => room.playerIds.get(p) || p.id),
      gameState: room.gameState
    });

    // If we have enough players, start the game
    if (room.players.size >= 2 && room.gameState === 'waiting') {
      startRound(roomId);
    }
  });

  // Handle player updates
  socket.on('player_update', (data) => {
    const rooms = Array.from(socket.rooms).filter(r => r !== socket.id);
    rooms.forEach(roomId => {
      socket.to(roomId).emit('game_state', {
        ...data,
        playerId: socket.id
      });
    });
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    // console.log('[Server] User disconnected:', socket.id, 'Reason:', reason); // Commented out
    
    // Remove player from all rooms
    for (const [roomId, room] of rooms.entries()) {
      if (room.players.has(socket)) {
        room.players.delete(socket);
        room.playerIds.delete(socket);
        // console.log(`[Server] Player ${socket.id} left room ${roomId}`); // Commented out
        
        // If room is empty, delete it
        if (room.players.size === 0) {
          if (room.roundTimer) clearTimeout(room.roundTimer);
          rooms.delete(roomId);
          // console.log(`[Server] Room ${roomId} deleted (empty)`); // Commented out
        } else {
          // Notify remaining players
          io.to(roomId).emit('player_left', {
            playerId: socket.id,
            remainingPlayers: Array.from(room.players).map(p => room.playerIds.get(p) || p.id)
          });

          // If not enough players, reset game state
          if (room.players.size < 2 && room.gameState === 'playing') {
            room.gameState = 'waiting';
            if (room.roundTimer) clearTimeout(room.roundTimer);
            io.to(roomId).emit('game_state_changed', {
              roomId,
              gameState: 'waiting',
              players: Array.from(room.players).map(p => room.playerIds.get(p) || p.id)
            });
          }
        }
      }
    }
  });

  // Listen for orb collection
  socket.on('orb_collected', ({ roomId, playerId }) => {
    const room = rooms.get(roomId);
    if (!room) return;
    const score = (room.scores.get(playerId) || 0) + 1;
    room.scores.set(playerId, score);
    io.to(roomId).emit('score_update', { playerId, score });
  });

  // Listen for player defeat (e.g., by projectile)
  socket.on('player_defeated', ({ roomId, playerId, killerId }) => {
    const room = rooms.get(roomId);
    if (!room) return;
    // Award points to killer
    if (killerId && killerId !== playerId) {
      const killerScore = (room.scores.get(killerId) || 0) + 5;
      room.scores.set(killerId, killerScore);
      io.to(roomId).emit('score_update', { playerId: killerId, score: killerScore });
    }
    // Broadcast death
    io.to(roomId).emit('player_died', { playerId });
    // Respawn after delay
    setTimeout(() => {
      io.to(roomId).emit('player_respawn', { playerId });
    }, 3000);
  });

  // Handle errors
  socket.on('error', (error) => {
    // console.error('[Server] Socket error:', error); // Commented out
  });
});

// Error handling for the server
server.on('error', (error) => {
  // console.error('[Server] Server error:', error); // Commented out
});

server.listen(PORT, () => {
  console.log(`[Server] Socket.io server running on port ${PORT}`);
  console.log(`[Server] Server URL: http://localhost:${PORT}`);
}); 