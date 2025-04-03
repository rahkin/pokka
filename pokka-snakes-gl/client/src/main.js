import { Game } from './Game';
import './styles/hud.css';

console.log('Main script starting...');

// Create loading screen dynamically
function createLoadingScreen() {
    // Create elements
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    
    const title = document.createElement('h1');
    title.textContent = "Pokka's Snakes";
    
    const progressContainer = document.createElement('div');
    progressContainer.id = 'loading-progress';
    
    const loadingBar = document.createElement('div');
    loadingBar.id = 'loading-bar';
    
    const loadingText = document.createElement('div');
    loadingText.id = 'loading-text';
    loadingText.textContent = 'Loading resources...';
    
    // Style elements
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        color: #ffffff;
        z-index: 9999;
        font-family: 'One Little Font', monospace;
    `;
    
    title.style.cssText = `
        font-size: 48px;
        margin-bottom: 20px;
        color: #3EE0B1;
        text-shadow: 0 0 10px rgba(62, 224, 177, 0.5);
    `;
    
    progressContainer.style.cssText = `
        width: 300px;
        height: 20px;
        background-color: #333333;
        border: 2px solid #666666;
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
    `;
    
    loadingBar.style.cssText = `
        width: 0%;
        height: 100%;
        background-color: #3EE0B1;
        transition: width 0.3s ease;
    `;
    
    loadingText.style.cssText = `
        margin-top: 10px;
        font-size: 24px;
        color: #888888;
        text-align: center;
    `;
    
    // Assemble elements
    progressContainer.appendChild(loadingBar);
    loadingScreen.appendChild(title);
    loadingScreen.appendChild(progressContainer);
    loadingScreen.appendChild(loadingText);
    
    // Add to document
    document.body.insertBefore(loadingScreen, document.body.firstChild);
    
    return loadingScreen;
}

// Function to update loading progress
function updateLoadingProgress(percent, text) {
    console.log(`Loading progress: ${percent}% - ${text}`);
    
    // Get elements each time to ensure we have the latest references
    const loadingBar = document.querySelector('#loading-bar');
    const loadingText = document.querySelector('#loading-text');
    
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
        // Create and show loading screen
        const loadingScreen = createLoadingScreen();
        console.log('Loading screen created:', loadingScreen);

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
if (document.readyState === 'loading') {
    console.log('Document still loading, adding DOMContentLoaded listener');
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    console.log('Document already loaded, initializing game immediately');
    // Add a small delay to ensure DOM is fully processed
    setTimeout(initGame, 0);
}
