// Game Constants
const CELL_SIZE = 20;
const PACMAN_SPEED = 2;
const GHOST_SPEED = 1.5;
const POWER_PELLET_DURATION = 10000; // 10 seconds
const POINT_VALUE = 10;
const POWER_PELLET_VALUE = 50;

// Game State
let gameState = {
    score: 0,
    isPlaying: false,
    isPoweredUp: false,
    playerName: '',
    highScores: JSON.parse(localStorage.getItem('highScores')) || []
};

// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let grid = [];
let pacman = { x: 0, y: 0, direction: 'right', nextDirection: 'right' };
let ghosts = [];
let dots = [];
let powerPellets = [];

// Initialize Game
function initGame() {
    // Set canvas size
    canvas.width = CELL_SIZE * 28;
    canvas.height = CELL_SIZE * 31;
    
    // Initialize grid
    grid = createMaze();
    
    // Initialize game objects
    initializeGameObjects();
    
    // Setup event listeners
    setupEventListeners();
    
    // Show player name modal
    showModal('playerNameModal');
}

// Create Maze Layout
function createMaze() {
    // Basic maze layout (1 = wall, 0 = path, 2 = power pellet)
    return [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,2,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,2,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,2,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,2,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
}

// Initialize Game Objects
function initializeGameObjects() {
    // Initialize Pacman
    pacman = {
        x: 14 * CELL_SIZE,
        y: 17 * CELL_SIZE,
        direction: 'right',
        nextDirection: 'right'
    };

    // Initialize Ghosts
    ghosts = [
        { x: 13 * CELL_SIZE, y: 11 * CELL_SIZE, color: '#FF0000', direction: 'right' },
        { x: 14 * CELL_SIZE, y: 11 * CELL_SIZE, color: '#00FFFF', direction: 'left' },
        { x: 15 * CELL_SIZE, y: 11 * CELL_SIZE, color: '#FFB8FF', direction: 'up' }
    ];

    // Initialize Dots and Power Pellets
    dots = [];
    powerPellets = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 0) {
                dots.push({ x: x * CELL_SIZE, y: y * CELL_SIZE });
            } else if (grid[y][x] === 2) {
                powerPellets.push({ x: x * CELL_SIZE, y: y * CELL_SIZE });
            }
        }
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
    
    // Mobile controls
    document.getElementById('upBtn').addEventListener('click', () => handleDirection('up'));
    document.getElementById('downBtn').addEventListener('click', () => handleDirection('down'));
    document.getElementById('leftBtn').addEventListener('click', () => handleDirection('left'));
    document.getElementById('rightBtn').addEventListener('click', () => handleDirection('right'));
    
    // Menu buttons
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('tutorialBtn').addEventListener('click', () => showModal('tutorialModal'));
    document.getElementById('leaderboardBtn').addEventListener('click', showLeaderboard);
    
    // Modal buttons
    document.getElementById('submitName').addEventListener('click', handleNameSubmit);
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => hideAllModals());
    });
    document.getElementById('playAgain').addEventListener('click', startGame);
}

// Handle Keyboard Input
function handleKeyPress(event) {
    if (!gameState.isPlaying) return;
    
    switch(event.key) {
        case 'ArrowUp':
            handleDirection('up');
            break;
        case 'ArrowDown':
            handleDirection('down');
            break;
        case 'ArrowLeft':
            handleDirection('left');
            break;
        case 'ArrowRight':
            handleDirection('right');
            break;
    }
}

// Handle Direction Changes
function handleDirection(direction) {
    if (!gameState.isPlaying) return;
    
    const opposites = {
        'up': 'down',
        'down': 'up',
        'left': 'right',
        'right': 'left'
    };
    
    if (opposites[direction] !== pacman.direction) {
        pacman.nextDirection = direction;
    }
}

// Start Game
function startGame() {
    hideAllModals();
    gameState.isPlaying = true;
    gameState.score = 0;
    gameState.isPoweredUp = false;
    updateScore();
    initializeGameObjects();
    document.getElementById('bgMusic').play();
    gameLoop();
}

// Game Loop
function gameLoop() {
    if (!gameState.isPlaying) return;
    
    updateGame();
    drawGame();
    requestAnimationFrame(gameLoop);
}

// Update Game State
function updateGame() {
    updatePacman();
    updateGhosts();
    checkCollisions();
}

// Update Pacman Position
function updatePacman() {
    const nextX = pacman.x + (pacman.direction === 'right' ? PACMAN_SPEED : 
                              pacman.direction === 'left' ? -PACMAN_SPEED : 0);
    const nextY = pacman.y + (pacman.direction === 'down' ? PACMAN_SPEED : 
                              pacman.direction === 'up' ? -PACMAN_SPEED : 0);
    
    // Check if next position is valid
    const gridX = Math.floor(nextX / CELL_SIZE);
    const gridY = Math.floor(nextY / CELL_SIZE);
    
    if (grid[gridY][gridX] !== 1) {
        pacman.x = nextX;
        pacman.y = nextY;
        pacman.direction = pacman.nextDirection;
        
        // Check for dots and power pellets
        checkDotCollision();
    }
}

// Update Ghosts
function updateGhosts() {
    ghosts.forEach(ghost => {
        // Simple ghost movement (can be improved with pathfinding)
        const directions = ['up', 'down', 'left', 'right'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        
        const nextX = ghost.x + (randomDirection === 'right' ? GHOST_SPEED : 
                                randomDirection === 'left' ? -GHOST_SPEED : 0);
        const nextY = ghost.y + (randomDirection === 'down' ? GHOST_SPEED : 
                                randomDirection === 'up' ? -GHOST_SPEED : 0);
        
        const gridX = Math.floor(nextX / CELL_SIZE);
        const gridY = Math.floor(nextY / CELL_SIZE);
        
        if (grid[gridY][gridX] !== 1) {
            ghost.x = nextX;
            ghost.y = nextY;
            ghost.direction = randomDirection;
        }
    });
}

// Check Collisions
function checkCollisions() {
    // Check ghost collisions
    ghosts.forEach(ghost => {
        if (isColliding(pacman, ghost)) {
            if (gameState.isPoweredUp) {
                // Eat ghost
                ghost.x = 14 * CELL_SIZE;
                ghost.y = 11 * CELL_SIZE;
                gameState.score += 200;
                updateScore();
            } else {
                gameOver();
            }
        }
    });
}

// Check Dot Collisions
function checkDotCollision() {
    // Check regular dots
    dots = dots.filter(dot => {
        if (isColliding(pacman, dot)) {
            gameState.score += POINT_VALUE;
            updateScore();
            document.getElementById('pointSound').play();
            return false;
        }
        return true;
    });
    
    // Check power pellets
    powerPellets = powerPellets.filter(pellet => {
        if (isColliding(pacman, pellet)) {
            gameState.score += POWER_PELLET_VALUE;
            updateScore();
            activatePowerUp();
            document.getElementById('powerUpSound').play();
            return false;
        }
        return true;
    });
    
    // Check win condition
    if (dots.length === 0 && powerPellets.length === 0) {
        gameWin();
    }
}

// Activate Power Up
function activatePowerUp() {
    gameState.isPoweredUp = true;
    setTimeout(() => {
        gameState.isPoweredUp = false;
    }, POWER_PELLET_DURATION);
}

// Draw Game
function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw maze
    drawMaze();
    
    // Draw dots
    drawDots();
    
    // Draw power pellets
    drawPowerPellets();
    
    // Draw ghosts
    drawGhosts();
    
    // Draw Pacman
    drawPacman();
}

// Draw Maze
function drawMaze() {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 1) {
                ctx.fillStyle = '#0000FF';
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}

// Draw Dots
function drawDots() {
    ctx.fillStyle = '#FFF';
    dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x + CELL_SIZE/2, dot.y + CELL_SIZE/2, 2, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Draw Power Pellets
function drawPowerPellets() {
    ctx.fillStyle = '#FFF';
    powerPellets.forEach(pellet => {
        ctx.beginPath();
        ctx.arc(pellet.x + CELL_SIZE/2, pellet.y + CELL_SIZE/2, 6, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Draw Ghosts
function drawGhosts() {
    ghosts.forEach(ghost => {
        ctx.fillStyle = ghost.color;
        ctx.beginPath();
        ctx.arc(ghost.x + CELL_SIZE/2, ghost.y + CELL_SIZE/2, CELL_SIZE/2, Math.PI, 0);
        ctx.lineTo(ghost.x + CELL_SIZE, ghost.y + CELL_SIZE);
        ctx.lineTo(ghost.x, ghost.y + CELL_SIZE);
        ctx.closePath();
        ctx.fill();
    });
}

// Draw Pacman
function drawPacman() {
    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    ctx.arc(pacman.x + CELL_SIZE/2, pacman.y + CELL_SIZE/2, CELL_SIZE/2 - 2, 0.2, Math.PI * 1.8);
    ctx.lineTo(pacman.x + CELL_SIZE/2, pacman.y + CELL_SIZE/2);
    ctx.closePath();
    ctx.fill();
}

// Utility Functions
function isColliding(obj1, obj2) {
    return obj1.x < obj2.x + CELL_SIZE &&
           obj1.x + CELL_SIZE > obj2.x &&
           obj1.y < obj2.y + CELL_SIZE &&
           obj1.y + CELL_SIZE > obj2.y;
}

function updateScore() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('score').classList.add('score-update');
    setTimeout(() => {
        document.getElementById('score').classList.remove('score-update');
    }, 300);
}

function gameOver() {
    gameState.isPlaying = false;
    document.getElementById('bgMusic').pause();
    document.getElementById('bgMusic').currentTime = 0;
    document.getElementById('finalScore').textContent = gameState.score;
    showModal('gameOverModal');
    updateHighScores();
}

function gameWin() {
    gameState.isPlaying = false;
    document.getElementById('bgMusic').pause();
    document.getElementById('bgMusic').currentTime = 0;
    gameState.score += 1000; // Bonus for completing the level
    document.getElementById('finalScore').textContent = gameState.score;
    showModal('gameOverModal');
    updateHighScores();
}

function updateHighScores() {
    gameState.highScores.push({
        name: gameState.playerName,
        score: gameState.score
    });
    
    // Sort by score and keep top 10
    gameState.highScores.sort((a, b) => b.score - a.score);
    gameState.highScores = gameState.highScores.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('highScores', JSON.stringify(gameState.highScores));
}

function showLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';
    
    gameState.highScores.forEach((score, index) => {
        const entry = document.createElement('div');
        entry.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        leaderboardList.appendChild(entry);
    });
    
    showModal('leaderboardModal');
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function handleNameSubmit() {
    const nameInput = document.getElementById('playerName');
    if (nameInput.value.trim()) {
        gameState.playerName = nameInput.value.trim();
        hideAllModals();
        startGame();
    }
}

// Initialize game when page loads
window.addEventListener('load', initGame); 