import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Serve static files from the client/dist directory
app.use('/pokka-snakes-gl', express.static(join(__dirname, '../client/dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/dist/index.html'));
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });

    // Add your game-specific socket events here
});

const PORT = 3001; // Changed to 3001 to avoid conflict with Vite
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});