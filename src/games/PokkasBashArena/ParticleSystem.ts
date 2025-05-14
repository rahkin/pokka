import * as THREE from 'three';

interface Particle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    color: THREE.Color;
    size: number;
    life: number; // Remaining life
    maxLife: number; // Max life to calculate alpha
    isActive: boolean;
}

export class ParticleSystem {
    private particles: Particle[] = [];
    private particlePoints: THREE.Points;
    private readonly maxParticles: number;
    private scene: THREE.Scene;
    private particleGeometry: THREE.BufferGeometry;
    private positions: Float32Array;
    private colors: Float32Array;
    private sizes: Float32Array; // For potential future use with shader for per-particle size

    constructor(scene: THREE.Scene, maxParticles: number = 500) {
        this.scene = scene;
        this.maxParticles = maxParticles;

        this.particleGeometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.maxParticles * 3);
        this.colors = new Float32Array(this.maxParticles * 3);
        this.sizes = new Float32Array(this.maxParticles); // For custom shader if needed

        this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.particleGeometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
        // this.particleGeometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));


        const particleMaterial = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false, // Important for correct rendering with other transparent objects
            // map: new THREE.TextureLoader().load('/assets/particles/spark.png') // Placeholder for particle texture
        });

        this.particlePoints = new THREE.Points(this.particleGeometry, particleMaterial);
        this.particlePoints.frustumCulled = false; // Ensure particles are always rendered
        this.scene.add(this.particlePoints);

        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                position: new THREE.Vector3(),
                velocity: new THREE.Vector3(),
                color: new THREE.Color(),
                size: 0.1,
                life: 0,
                maxLife: 0,
                isActive: false,
            });
            this.sizes[i] = 0.1; // Default size
        }
    }

    emit(
        position: THREE.Vector3,
        velocity: THREE.Vector3,
        color: THREE.Color,
        size: number,
        life: number,
        count: number = 1
    ): void {
        let emittedCount = 0;
        for (let i = 0; i < this.maxParticles && emittedCount < count; i++) {
            if (!this.particles[i].isActive) {
                const p = this.particles[i];
                p.position.copy(position);
                p.velocity.copy(velocity);
                p.color.copy(color);
                p.size = size;
                p.life = life;
                p.maxLife = life;
                p.isActive = true;
                this.sizes[i] = size; // If using custom shader for size
                emittedCount++;
            }
        }
    }

    update(deltaTime: number): void {
        let activeParticleCount = 0;
        for (let i = 0; i < this.maxParticles; i++) {
            const p = this.particles[i];
            if (p.isActive) {
                p.life -= deltaTime;
                if (p.life <= 0) {
                    p.isActive = false;
                    // Set position far away or scale to zero to hide
                    this.positions[activeParticleCount * 3] = 0;
                    this.positions[activeParticleCount * 3 + 1] = -10000; // Move off-screen
                    this.positions[activeParticleCount * 3 + 2] = 0;
                    continue; 
                }

                p.position.addScaledVector(p.velocity, deltaTime);
                // p.velocity.y -= 9.8 * deltaTime * 0.1; // Optional: simple gravity

                this.positions[activeParticleCount * 3] = p.position.x;
                this.positions[activeParticleCount * 3 + 1] = p.position.y;
                this.positions[activeParticleCount * 3 + 2] = p.position.z;

                const alpha = p.life / p.maxLife; // Fade out
                this.colors[activeParticleCount * 3] = p.color.r;
                this.colors[activeParticleCount * 3 + 1] = p.color.g;
                this.colors[activeParticleCount * 3 + 2] = p.color.b;
                
                // For PointsMaterial, opacity is global. For custom shader, can control per-particle alpha via color attribute.
                // If not using custom shader, individual particle alpha isn't directly settable here.
                // Global opacity is on particleMaterial.opacity

                this.sizes[i] = p.size * alpha; // If using custom shader for size, can scale size down too

                activeParticleCount++;
            }
        }
        this.particleGeometry.attributes.position.needsUpdate = true;
        this.particleGeometry.attributes.color.needsUpdate = true;
        // this.particleGeometry.attributes.size.needsUpdate = true; // If using custom shader for size
        this.particleGeometry.setDrawRange(0, activeParticleCount); // Only draw active particles
    }
    
    dispose(): void {
        this.scene.remove(this.particlePoints);
        this.particleGeometry.dispose();
        (this.particlePoints.material as THREE.Material).dispose();
        // Dispose texture if loaded
        // if ((this.particlePoints.material as THREE.PointsMaterial).map) {
        //     ((this.particlePoints.material as THREE.PointsMaterial).map as THREE.Texture).dispose();
        // }
    }
} 