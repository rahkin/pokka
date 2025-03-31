import { Game } from './Game';
import './styles/hud.css';

let game = null;

async function initializeGame() {
    try {
        // Show loading screen first
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        
        if (loadingScreen && gameContainer) {
            loadingScreen.style.display = 'flex';
            gameContainer.style.display = 'none';
            
            // Update initial loading text
            const loadingText = document.getElementById('loading-text');
            if (loadingText) {
                loadingText.textContent = 'Initializing game...';
            }
        }
        
        // Create game instance
        game = new Game();
        
        // The loading screen will be managed by the Game class
        // and will be hidden when everything is ready
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (game) {
                game.handleResize();
            }
        });
        
        // Handle window close
        window.addEventListener('beforeunload', () => {
            if (game) {
                game.cleanup();
            }
        });
    } catch (error) {
        console.error('Failed to initialize game:', error);
        const loadingText = document.getElementById('loading-text');
        if (loadingText) {
            loadingText.textContent = 'Error loading game. Please refresh the page.';
        }
    }
}

// Start initialization when the window loads
window.addEventListener('load', initializeGame);
