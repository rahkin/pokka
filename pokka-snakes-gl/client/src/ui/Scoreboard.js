export class Scoreboard {
    constructor(game) {
        this.game = game;
        this.scores = [];
        this.currentScore = 0;
        this.element = null;
        this.scoresContainer = null;
        
        this.createScoreboard();
    }

    createScoreboard() {
        // Create scoreboard container
        this.element = document.createElement('div');
        this.element.className = 'scoreboard';
        
        // Create title
        const title = document.createElement('h2');
        title.textContent = 'High Scores';
        this.element.appendChild(title);
        
        // Create scores container
        this.scoresContainer = document.createElement('div');
        this.scoresContainer.id = 'scores-container';
        this.element.appendChild(this.scoresContainer);
        
        // Add to game container
        document.body.appendChild(this.element);
    }

    updateScore(newScore) {
        this.currentScore = newScore;
        this.updateDisplay();
    }

    addScore(score) {
        this.scores.push(score);
        this.scores.sort((a, b) => b - a);
        this.scores = this.scores.slice(0, 10); // Keep only top 10
        this.updateDisplay();
        
        // Save scores to localStorage
        localStorage.setItem('snakeHighScores', JSON.stringify(this.scores));
    }

    loadScores() {
        const savedScores = localStorage.getItem('snakeHighScores');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
            this.updateDisplay();
        }
    }

    updateDisplay() {
        // Clear existing scores
        this.scoresContainer.innerHTML = '';
        
        // Add current score if game is active
        if (this.currentScore > 0) {
            const currentEntry = this.createScoreEntry(this.currentScore, this.getScoreRank(this.currentScore), true);
            this.scoresContainer.appendChild(currentEntry);
        }
        
        // Add high scores
        this.scores.forEach((score, index) => {
            if (score !== this.currentScore || this.currentScore === 0) {
                const entry = this.createScoreEntry(score, index + 1, false);
                this.scoresContainer.appendChild(entry);
            }
        });
    }

    createScoreEntry(score, rank, isCurrent) {
        const entry = document.createElement('div');
        entry.className = `score-entry${isCurrent ? ' current' : ''}`;
        
        const rankSpan = document.createElement('span');
        rankSpan.className = 'rank';
        rankSpan.textContent = `#${rank}`;
        
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = score;
        
        entry.appendChild(rankSpan);
        entry.appendChild(scoreSpan);
        
        return entry;
    }

    getScoreRank(score) {
        return this.scores.filter(s => s > score).length + 1;
    }

    reset() {
        this.currentScore = 0;
        this.updateDisplay();
    }

    cleanup() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
} 