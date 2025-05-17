# rahkin.github.io

My personal portfolio website hosted on GitHub Pages.

## About

This repository contains the source code for my personal portfolio website. The site showcases my projects, skills, and experience.

## Technologies Used

- HTML5
- CSS3
- JavaScript (coming soon)

## Local Development

To run this site locally:

1. Clone the repository
2. Open `index.html` in your browser

## Contact

Feel free to reach out to me for any questions or collaboration opportunities!

## Multiplayer Server (Socket.io)

### Running Locally

1. Open a terminal and navigate to the `server/` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The server will run on port 2567 by default.

### Deploying to Render.com

1. In your Render.com dashboard, create a new **Web Service**.
2. Connect your repository and set the root directory to `server/`.
3. Set the start command to:
   ```bash
   npm start
   ```
4. Make sure the build command is:
   ```bash
   npm install
   ```
5. The service will be available at the URL provided by Render.com. Update your client code to use this URL for multiplayer connections.

### Notes
- The server uses in-memory matchmaking and is suitable for small-scale or demo use. For production, consider persistent storage and scaling strategies. 