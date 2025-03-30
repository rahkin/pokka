import { Game } from './Game';
import './styles/hud.css';

let game = null;

async function initializeGame() {
    try {
        // Create game instance
        game = new Game();
        
        // Wait for all resources to load
        await game.audioManager.initializeSounds();
        
        // Check if any sounds were loaded
        if (game.audioManager.loadedSounds.size === 0) {
            throw new Error('No sound files were loaded successfully');
        }
        
        // Hide loading screen and show game
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        
        if (loadingScreen && gameContainer) {
            loadingScreen.style.display = 'none';
            gameContainer.style.display = 'block';
        }
        
        // Start the game
        game.start();
        
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
