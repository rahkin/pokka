#!/bin/bash
# Kill any existing servers
pkill -f "python server.py"
sudo kill -9 $(sudo lsof -t -i:5173) 2>/dev/null
sudo kill -9 $(sudo lsof -t -i:3000) 2>/dev/null

# Clear caches
rm -rf dist
rm -rf node_modules/.vite

# Start Vite dev server
npm run dev -- --debug
