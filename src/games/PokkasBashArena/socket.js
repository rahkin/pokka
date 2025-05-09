// WebSocket/Colyseus multiplayer sync for Pokka's Bash Arena
// Fallback to bot if no match

// import { Client } from 'colyseus.js'; // If using Colyseus
// import io from 'socket.io-client'; // If using Socket.io

const MATCHMAKING_TIMEOUT = 5000; // 5 seconds

export function setupMultiplayer(gameLogic, onBotNeeded, onPlayerJoined, onPlayerLeft, onGameStateUpdate) {
  let client = null;
  let room = null;
  let matchmakingTimer = null;

  const connect = async () => {
    try {
      // Replace with your actual server endpoint
      const endpoint = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") 
        ? "ws://localhost:2567" 
        : "wss://your-colyseus-server.com"; // Replace with your deployed server

      // ---- Colyseus Example ----
      // client = new Client(endpoint);
      // console.log(`Attempting to connect to Colyseus at ${endpoint}`)
      // room = await client.joinOrCreate('bash_arena_room'); // Replace 'bash_arena_room' with your room name
      // console.log('Joined room successfully:', room.sessionId, room.name);
      // handleRoomEvents(room);
      // if (matchmakingTimer) clearTimeout(matchmakingTimer);
      // onPlayerJoined('local', room.sessionId); // Notify game logic about local player

      // ---- Socket.io Example ----
      // client = io(endpoint);
      // client.on('connect', () => {
      //   console.log('Connected to Socket.io server with id:', client.id);
      //   client.emit('join_bash_arena'); // Request to join a game
      //   if (matchmakingTimer) clearTimeout(matchmakingTimer);
      // });
      // handleSocketEvents(client);

      // For now, simulate no connection and trigger bot
      console.warn('Multiplayer endpoint not configured. Simulating timeout.');
      if (matchmakingTimer) clearTimeout(matchmakingTimer);
      matchmakingTimer = setTimeout(() => {
        console.log('Matchmaking timed out. Requesting AI bot.');
        onBotNeeded();
      }, MATCHMAKING_TIMEOUT);


    } catch (e) {
      console.error('Multiplayer connection failed:', e);
      // Fallback to AI if connection fails immediately
      if (matchmakingTimer) clearTimeout(matchmakingTimer);
      onBotNeeded();
    }
  };

  const handleRoomEvents = (currentRoom) => {
    // Colyseus specific event handling
    currentRoom.onMessage('game_state', (message) => {
      // console.log('Received game state:', message);
      onGameStateUpdate(message);
    });

    currentRoom.onMessage('player_joined', (message) => {
      console.log('Player joined:', message.playerId, message.playerData);
      onPlayerJoined('remote', message.playerId, message.playerData); // Notify game logic
    });

    currentRoom.onMessage('player_left', (message) => {
      console.log('Player left:', message.playerId);
      onPlayerLeft(message.playerId);
    });

    currentRoom.onStateChange((state) => {
        // console.log("Colyseus room state changed: ", state);
        // This can be used for more complex state synchronization if needed
    });

    currentRoom.onError((code, message) => {
      console.error('Colyseus room error:', code, message);
      // Potentially trigger AI fallback or notify user
    });

    currentRoom.onLeave((code) => {
      console.log('Left Colyseus room, code:', code);
      // If an unexpected leave, might need to clean up or show message
    });
  };

  const handleSocketEvents = (socket) => {
    // Socket.io specific event handling
    socket.on('match_found', (data) => {
      console.log('Match found!', data);
      // data might include opponentId, initial game state, etc.
      // onPlayerJoined('remote', data.opponentId, data.initialOpponentState);
      // onGameStateUpdate(data.gameState);
    });

    socket.on('player_joined', (player) => {
        console.log('A player joined the game:', player.id);
        onPlayerJoined('remote', player.id, player.initialData);
    });

    socket.on('player_left', (playerId) => {
        console.log('Player left:', playerId);
        onPlayerLeft(playerId);
    });

    socket.on('game_update', (gameState) => {
      onGameStateUpdate(gameState);
    });

    socket.on('disconnect', (reason) => {
      console.log('Disconnected from Socket.io server:', reason);
      // Potentially trigger AI fallback or notify user
      // onBotNeeded(); // Or handle reconnection logic
    });

    socket.on('connect_error', (error) => {
        console.error('Socket.io connection error:', error);
        if (matchmakingTimer) clearTimeout(matchmakingTimer);
        onBotNeeded(); // Fallback if connection error occurs
    });
  };

  const sendPlayerUpdate = (data) => {
    if (room && room.connection.isOpen) {
      // Colyseus: room.send('player_input', data);
    } else if (client && client.connected) {
      // Socket.io: client.emit('player_update', data);
    }
  };

  const disconnect = () => {
    if (matchmakingTimer) clearTimeout(matchmakingTimer);
    if (room) {
      console.log('Leaving Colyseus room...');
      room.leave();
      room = null;
    }
    if (client && typeof client.disconnect === 'function') {
      console.log('Disconnecting Socket.io client...');
      client.disconnect();
      client = null;
    }
    console.log('Multiplayer disconnected.');
  };

  // Start connection attempt
  connect();

  return {
    connect,
    disconnect,
    sendPlayerUpdate,
    isBotMode: () => !room && !(client && client.connected) // Simplistic check
  };
} 