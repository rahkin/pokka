export class GameUI {
    constructor(callbacks) {
        this.callbacks = callbacks;
        this.highScores = JSON.parse(localStorage.getItem('snakeHighScores')) || [];
        this.createHUD();
        this.createGameOverScreen();
    }

    createHUD() {
        this.hud = document.createElement('div');
        this.hud.className = 'hud';
        this.hud.innerHTML = `
            <div class="controls">
                <button id="pauseButton">⏸️</button>
                <button id="fullscreenButton">⛶</button>
            </div>
            <div class="mobile-controls">
                <button id="upButton">↑</button>
                <button id="leftButton">←</button>
                <button id="rightButton">→</button>
                <button id="downButton">↓</button>
            </div>
        `;
        document.body.appendChild(this.hud);
        this.hud.style.display = 'none';
    }

    createGameOverScreen() {
        this.gameOverScreen = document.createElement('div');
        this.gameOverScreen.className = 'menu game-over';
        this.gameOverScreen.innerHTML = `
            <div class="menu-content">
                <h2>Game Over!</h2>
                <div class="final-score">Score: <span id="finalScore">0</span></div>
                <button id="restartGame">Play Again</button>
                <button id="returnToMenu">Main Menu</button>
            </div>
        `;
        document.body.appendChild(this.gameOverScreen);
        this.gameOverScreen.style.display = 'none';
    }

    showHUD() {
        this.hud.style.display = 'block';
    }

    hideHUD() {
        this.hud.style.display = 'none';
    }

    showGameOver(score) {
        this.gameOverScreen.style.display = 'flex';
        document.getElementById('finalScore').textContent = score;
    }

    hideGameOver() {
        this.gameOverScreen.style.display = 'none';
    }
} 