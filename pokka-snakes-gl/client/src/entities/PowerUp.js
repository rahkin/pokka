import * as THREE from 'three';

export class PowerUp {
    constructor(game, type) {
        this.game = game;
        this.type = type;
        this.position = new THREE.Vector3();
        this.mesh = null;
        this.glow = null;
        this.createMesh();
    }

    createMesh() {
        const colors = {
            ghost: 0x808080,     // Gray
            timeSlow: 0x00ffff,  // Cyan
            magnet: 0xff00ff,    // Magenta
            shield: 0xffff00     // Yellow
        };

        // Ensure we have a valid color for the power-up type
        const color = colors[this.type] || 0xffffff; // Default to white if type not found

        // Create main power-up mesh using OctahedronGeometry for diamond shape
        const geometry = new THREE.OctahedronGeometry(0.5, 0);
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.8,
            transparent: true,
            opacity: 1.0,
            shininess: 100
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.visible = true;

        // Add glow effect using a larger octahedron
        const glowGeometry = new THREE.OctahedronGeometry(0.6, 0);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.5,
            side: THREE.BackSide
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        this.mesh.add(glowMesh);

        // Add to scene
        if (this.game && this.game.scene) {
            this.game.scene.add(this.mesh);
            console.log('PowerUp: Added mesh to scene', {
                type: this.type,
                position: this.position.clone(),
                hasMesh: !!this.mesh,
                meshVisible: this.mesh.visible,
                color: color,
                scene: this.game.scene
            });
        } else {
            console.error('PowerUp: Failed to add mesh to scene - game or scene not found');
        }
    }

    setPosition(position) {
        this.position.copy(position);
        if (this.mesh) {
            this.mesh.position.copy(position);
        }
        console.log('PowerUp: Position set', {
            position: this.position.clone(),
            meshPosition: this.mesh ? this.mesh.position.clone() : null
        });
    }

    update(deltaTime) {
        if (!this.mesh) return;

        // Update floating animation
        const floatHeight = 0.2;
        const floatSpeed = 2;
        this.mesh.position.y = this.position.y + Math.sin(Date.now() * 0.001 * floatSpeed + this.floatOffset) * floatHeight;

        // Rotate the power-up
        this.mesh.rotation.y += deltaTime * 2;
        this.mesh.rotation.x += deltaTime * 1.5; // Add some tilt to the rotation
    }

    cleanup() {
        if (this.mesh) {
            if (this.game && this.game.scene) {
                this.game.scene.remove(this.mesh);
            }
            this.mesh.geometry.dispose();
            this.mesh.material.dispose();
            if (this.mesh.children.length > 0) {
                this.mesh.children[0].geometry.dispose();
                this.mesh.children[0].material.dispose();
            }
            this.mesh = null;
        }
    }

    collect() {
        // Remove from scene
        this.game.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
        this.mesh.children[0].geometry.dispose();
        this.mesh.children[0].material.dispose();
    }

    applyEffect(snake) {
        switch(this.type) {
            case 'speed':
                snake.speed *= 1.5;
                setTimeout(() => { snake.speed /= 1.5; }, this.duration);
                break;
            case 'size':
                for(let i = 0; i < 3; i++) snake.grow();
                break;
            case 'ghost':
                snake.segments.forEach(segment => {
                    segment.material.transparent = true;
                    segment.material.opacity = 0.3;
                });
                setTimeout(() => {
                    snake.segments.forEach(segment => {
                        segment.material.transparent = false;
                        segment.material.opacity = 1;
                    });
                }, this.duration);
                break;
            case 'magnet':
                snake.magnetActive = true;
                setTimeout(() => { snake.magnetActive = false; }, this.duration);
                break;
            case 'shield':
                snake.isInvulnerable = true;
                setTimeout(() => { snake.isInvulnerable = false; }, this.duration);
                break;
        }
    }
} 