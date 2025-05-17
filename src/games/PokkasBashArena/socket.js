// WebSocket/Colyseus multiplayer sync for Pokka's Bash Arena
// Fallback to bot if no match

import { io } from 'socket.io-client';

const MATCHMAKING_TIMEOUT = 5000; // 5 seconds

export function setupMultiplayer(gameLogic, onBotNeeded, onPlayerJoined, onPlayerLeft, onGameStateUpdate) {
  let client = null;
  let matchmakingTimer = null;

  const connect = async () => {
    try {
      // Use ws://localhost:2567 for local, wss://your-production-server for prod
      const endpoint = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") 
        ? "ws://localhost:2567" 
        : "wss://YOUR_RENDER_SERVICE_URL"; // <-- Replace with your Render.com Socket.io server URL

      client = io(endpoint, { transports: ['websocket'] });

      client.on('connect', () => {
        console.log('Connected to Socket.io server with id:', client.id);
        if (matchmakingTimer) clearTimeout(matchmakingTimer);
      });

      client.on('waiting_for_opponent', () => {
        console.log('Waiting for opponent...');
        // Optionally show UI feedback
        if (matchmakingTimer) clearTimeout(matchmakingTimer);
        matchmakingTimer = setTimeout(() => {
          console.log('Matchmaking timed out. Requesting AI bot.');
          client.disconnect();
          onBotNeeded();
        }, MATCHMAKING_TIMEOUT);
      });

      client.on('match_found', (data) => {
        console.log('Match found!', data);
        if (matchmakingTimer) clearTimeout(matchmakingTimer);
        // Notify game logic that a remote player joined
        onPlayerJoined('remote', data.players.find(id => id !== client.id));
      });

      client.on('player_left', (playerId) => {
        console.log('Player left:', playerId);
        onPlayerLeft(playerId);
      });

      client.on('game_update', (gameState) => {
        onGameStateUpdate(gameState);
      });

      client.on('disconnect', (reason) => {
        console.log('Disconnected from Socket.io server:', reason);
        // Optionally trigger AI fallback or notify user
      });

      client.on('connect_error', (error) => {
        console.error('Socket.io connection error:', error);
        if (matchmakingTimer) clearTimeout(matchmakingTimer);
        onBotNeeded();
      });
    } catch (e) {
      console.error('Multiplayer connection failed:', e);
      if (matchmakingTimer) clearTimeout(matchmakingTimer);
      onBotNeeded();
    }
  };

  const sendPlayerUpdate = (data) => {
    if (client && client.connected) {
      client.emit('player_update', data);
    }
  };

  const disconnect = () => {
    if (matchmakingTimer) clearTimeout(matchmakingTimer);
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
    isBotMode: () => !(client && client.connected)
  };
} 