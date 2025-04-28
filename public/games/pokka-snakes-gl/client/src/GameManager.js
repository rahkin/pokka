spawnBotSnake() {
    if (this.isGameOver || !this.snake) return;

    // Get player position
    const playerPos = this.snake.head.position;
    const worldSize = this.worldSize;
    const minDistance = 20; // Minimum distance from player

    // Try to find a valid spawn position
    let spawnPos;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        // Generate random position
        const x = (Math.random() - 0.5) * (worldSize - 10);
        const z = (Math.random() - 0.5) * (worldSize - 10);
        spawnPos = new THREE.Vector3(x, 0.5, z);

        // Check distance from player
        const distanceToPlayer = spawnPos.distanceTo(playerPos);
        
        // Check if position is valid (far enough from player and not too close to walls)
        if (distanceToPlayer >= minDistance && 
            Math.abs(x) < worldSize/2 - 5 && 
            Math.abs(z) < worldSize/2 - 5) {
            break;
        }

        attempts++;
    }

    // If we couldn't find a good position, use a fallback position
    if (attempts >= maxAttempts) {
        // Place bot in opposite quadrant from player
        const x = -Math.sign(playerPos.x) * (worldSize/4);
        const z = -Math.sign(playerPos.z) * (worldSize/4);
        spawnPos = new THREE.Vector3(x, 0.5, z);
    }

    // Create and initialize bot snake
    this.botSnake = new BotSnake(this.game, spawnPos);
    this.botSnake.game = this.game;
    this.botSnake.gameManager = this;
    this.botSnake.initialize();

    // Log spawn information
    console.log('GameManager: Spawned bot snake', {
        position: spawnPos,
        distanceToPlayer: spawnPos.distanceTo(playerPos),
        playerPosition: playerPos,
        worldSize: worldSize
    });
} 