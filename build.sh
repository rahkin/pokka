#!/bin/bash

# Build Snake Game
echo "Building Snake Game..."
cd pokka-snakes-gl/client
npm install
npm run build
cd ../..

# Copy assets
echo "Copying assets..."
cp -r assets/* .

# Create render.yaml for static site deployment
echo "Creating render.yaml..."
cat > render.yaml << EOL
services:
  - type: web
    name: pokka-arcade
    env: static
    buildCommand: chmod +x build.sh && ./build.sh
    staticPublishPath: .
    headers:
      - path: /*
        name: Cache-Control
        value: no-cache
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
EOL

echo "Build complete!" 