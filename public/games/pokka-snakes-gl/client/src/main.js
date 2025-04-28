import { Game } from './Game';
import './styles/hud.css';

console.log('Main script starting...');

// Function to update loading progress
function updateLoadingProgress(percent, text) {
    console.log(`Loading progress: ${percent}% - ${text}`);
    
    // Get elements each time to ensure we have the latest references
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    
    if (loadingBar) {
        loadingBar.style.width = `${percent}%`;
        console.log('Updated loading bar width:', loadingBar.style.width);
    } else {
        console.error('Loading bar element not found');
    }
    
    if (loadingText) {
        loadingText.textContent = text || 'Loading...';
        console.log('Updated loading text:', loadingText.textContent);
    } else {
        console.error('Loading text element not found');
    }
}

// Initialize game
function initGame() {
    console.log('Initializing game...');
    try {
        // Ensure loading screen is visible
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
        
        updateLoadingProgress(10, 'Creating game instance...');
        const game = new Game(updateLoadingProgress);
        
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
        updateLoadingProgress(0, 'Error loading game. Please refresh the page.');
    }
}

// Start initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded, initializing game');
    initGame();
});
