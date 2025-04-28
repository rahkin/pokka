import * as THREE from 'three';
import { PowerUpSystem } from '../systems/PowerUpSystem';

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
        // Get power-up type definition from PowerUpSystem
        const powerUpType = PowerUpSystem.Types[this.type];
        if (!powerUpType) {
            console.error('PowerUp: Invalid power-up type', {
                type: this.type,
                availableTypes: Object.keys(PowerUpSystem.Types)
            });
            return;
        }

        // Create main power-up mesh using OctahedronGeometry for diamond shape
        const geometry = new THREE.OctahedronGeometry(0.5, 0);
        const material = new THREE.MeshPhongMaterial({
            color: powerUpType.color,
            emissive: powerUpType.color,
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
            color: powerUpType.color,
            transparent: true,
            opacity: 0.5,
            side: THREE.BackSide
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        this.mesh.add(glowMesh);

        // Add floating animation offset
        this.floatOffset = Math.random() * Math.PI * 2;

        // Add to scene
        if (this.game && this.game.scene) {
            this.game.scene.add(this.mesh);
            console.log('PowerUp: Added mesh to scene', {
                type: this.type,
                powerUpType: powerUpType.id,
                position: this.position.clone(),
                hasMesh: !!this.mesh,
                meshVisible: this.mesh.visible,
                color: powerUpType.color,
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
    }

    update(deltaTime) {
        if (!this.mesh) return;

        // Update floating animation
        this.floatOffset += deltaTime * 2;
        this.mesh.position.y = this.position.y + Math.sin(this.floatOffset) * 0.2;

        // Update rotation
        this.mesh.rotation.y += deltaTime * 2;
        this.mesh.rotation.z += deltaTime;
    }

    cleanup() {
        if (!this.mesh) return;

        // Remove from scene
        if (this.game && this.game.scene) {
            this.game.scene.remove(this.mesh);
        }

        // Dispose of geometries and materials
        if (this.mesh.geometry) {
            this.mesh.geometry.dispose();
        }
        if (this.mesh.material) {
            this.mesh.material.dispose();
        }

        // Clean up glow effect
        if (this.mesh.children.length > 0) {
            const glowMesh = this.mesh.children[0];
            if (glowMesh.geometry) {
                glowMesh.geometry.dispose();
            }
            if (glowMesh.material) {
                glowMesh.material.dispose();
            }
        }

        this.mesh = null;
        this.glow = null;
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