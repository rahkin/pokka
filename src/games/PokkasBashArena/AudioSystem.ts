import { EventEmitter } from 'events';

export class AudioSystem extends EventEmitter {
    private context: AudioContext;
    private sounds: Map<string, AudioBuffer>;
    private music: Map<string, AudioBuffer>;
    private gainNodes: Map<string, GainNode>;
    private musicNode: GainNode;
    private effectsNode: GainNode;
    private engineNode: GainNode | null;
    private engineSource: OscillatorNode | null;
    
    constructor() {
        super();
        console.log('[AudioSystem] Initializing audio system...');
        this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.sounds = new Map();
        this.music = new Map();
        this.gainNodes = new Map();
        
        // Create main audio nodes
        this.musicNode = this.context.createGain();
        this.effectsNode = this.context.createGain();
        this.musicNode.connect(this.context.destination);
        this.effectsNode.connect(this.context.destination);
        
        // Set initial volumes
        this.musicNode.gain.value = 0.3;
        this.effectsNode.gain.value = 0.5;
        
        // Engine sound setup
        this.engineNode = null;
        this.engineSource = null;
        console.log('[AudioSystem] Audio system initialized');
    }

    async init() {
        console.log('[AudioSystem] Starting to load audio files...');
        try {
            // Resume audio context if suspended (needed for Chrome's autoplay policy)
            if (this.context.state === 'suspended') {
                console.log('[AudioSystem] Resuming audio context...');
                await this.context.resume();
            }

            await Promise.all([
                // Load sound effects
                this.loadSound('orb_collect', '/games/PokkasBashArena/assets/sounds/orb_collect.mp3'),
                this.loadSound('collision', '/games/PokkasBashArena/assets/sounds/collision.mp3'),
                this.loadSound('powerup', '/games/PokkasBashArena/assets/sounds/powerup.mp3'),
                this.loadSound('shoot', '/games/PokkasBashArena/assets/sounds/shoot.mp3'),
                this.loadSound('impact', '/games/PokkasBashArena/assets/sounds/impact.mp3'),
                this.loadSound('game_start', '/games/PokkasBashArena/assets/sounds/game_start.mp3'),
                this.loadSound('game_over', '/games/PokkasBashArena/assets/sounds/game_over.mp3'),
                
                // Load background music
                this.loadMusic('game', '/games/PokkasBashArena/assets/music/game.mp3'),
                this.loadMusic('menu', '/games/PokkasBashArena/assets/music/menu.mp3')
            ]);
            console.log('[AudioSystem] All audio files loaded successfully');
            console.log('[AudioSystem] Loaded sounds:', Array.from(this.sounds.keys()));
            console.log('[AudioSystem] Loaded music:', Array.from(this.music.keys()));
        } catch (error) {
            console.error('[AudioSystem] Failed to load audio assets:', error);
        }
    }

    private async loadSound(name: string, url: string) {
        console.log(`[AudioSystem] Loading sound: ${name} from ${url}`);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
            this.sounds.set(name, audioBuffer);
            console.log(`[AudioSystem] Successfully loaded sound: ${name}`);
        } catch (error) {
            console.error(`[AudioSystem] Error loading sound ${name}:`, error);
        }
    }

    private async loadMusic(name: string, url: string) {
        console.log(`[AudioSystem] Loading music: ${name} from ${url}`);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
            this.music.set(name, audioBuffer);
            console.log(`[AudioSystem] Successfully loaded music: ${name}`);
        } catch (error) {
            console.error(`[AudioSystem] Error loading music ${name}:`, error);
        }
    }

    playSound(name: string, options: { volume?: number; pitch?: number } = {}) {
        console.log(`[AudioSystem] Attempting to play sound: ${name}`, options);
        const buffer = this.sounds.get(name);
        if (!buffer) {
            console.warn(`[AudioSystem] Sound not found: ${name}`);
            return;
        }

        try {
            const source = this.context.createBufferSource();
            source.buffer = buffer;

            const gainNode = this.context.createGain();
            gainNode.gain.value = options.volume || 1;

            if (options.pitch) {
                source.playbackRate.value = options.pitch;
            }

            source.connect(gainNode);
            gainNode.connect(this.effectsNode);
            source.start(0);
            console.log(`[AudioSystem] Successfully started playing sound: ${name}`);
        } catch (error) {
            console.error(`[AudioSystem] Error playing sound ${name}:`, error);
        }
    }

    playMusic(name: string, fadeInDuration = 2) {
        console.log(`[AudioSystem] Attempting to play music: ${name}`);
        const buffer = this.music.get(name);
        if (!buffer) {
            console.warn(`[AudioSystem] Music not found: ${name}`);
            return;
        }

        try {
            const source = this.context.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const gainNode = this.context.createGain();
            gainNode.gain.value = 0;

            source.connect(gainNode);
            gainNode.connect(this.musicNode);

            // Fade in
            gainNode.gain.setValueAtTime(0, this.context.currentTime);
            gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + fadeInDuration);

            source.start(0);
            this.gainNodes.set(name, gainNode);
            console.log(`[AudioSystem] Successfully started playing music: ${name}`);
        } catch (error) {
            console.error(`[AudioSystem] Error playing music ${name}:`, error);
        }
    }

    stopMusic(name: string, fadeOutDuration = 2) {
        const gainNode = this.gainNodes.get(name);
        if (!gainNode) return;

        gainNode.gain.setValueAtTime(gainNode.gain.value, this.context.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + fadeOutDuration);

        setTimeout(() => {
            gainNode.disconnect();
            this.gainNodes.delete(name);
        }, fadeOutDuration * 1000);
    }

    startEngine(baseFrequency = 200) {
        if (this.engineSource) return;

        this.engineNode = this.context.createGain();
        this.engineNode.gain.value = 0.1;

        this.engineSource = this.context.createOscillator();
        this.engineSource.type = 'sawtooth';
        this.engineSource.frequency.value = baseFrequency;

        // Add some modulation for more interesting engine sound
        const modulator = this.context.createOscillator();
        const modulatorGain = this.context.createGain();
        modulator.frequency.value = 50;
        modulatorGain.gain.value = 20;

        modulator.connect(modulatorGain);
        modulatorGain.connect(this.engineSource.frequency);

        this.engineSource.connect(this.engineNode);
        this.engineNode.connect(this.effectsNode);

        this.engineSource.start();
        modulator.start();
    }

    updateEngineSound(velocity: number) {
        if (!this.engineNode || !this.engineSource) return;

        // Map velocity to frequency and volume
        const maxVelocity = 20;
        const normalizedVelocity = Math.min(Math.abs(velocity) / maxVelocity, 1);
        
        const minFreq = 200;
        const maxFreq = 400;
        const frequency = minFreq + (maxFreq - minFreq) * normalizedVelocity;

        const minVolume = 0.05;
        const maxVolume = 0.2;
        const volume = minVolume + (maxVolume - minVolume) * normalizedVelocity;

        this.engineSource.frequency.setTargetAtTime(frequency, this.context.currentTime, 0.1);
        this.engineNode.gain.setTargetAtTime(volume, this.context.currentTime, 0.1);
    }

    stopEngine() {
        if (this.engineSource) {
            this.engineSource.stop();
            this.engineSource.disconnect();
            this.engineSource = null;
        }
        if (this.engineNode) {
            this.engineNode.disconnect();
            this.engineNode = null;
        }
    }

    setMusicVolume(volume: number) {
        this.musicNode.gain.setTargetAtTime(volume, this.context.currentTime, 0.1);
    }

    setEffectsVolume(volume: number) {
        this.effectsNode.gain.setTargetAtTime(volume, this.context.currentTime, 0.1);
    }

    dispose() {
        this.stopEngine();
        this.gainNodes.forEach(node => node.disconnect());
        this.gainNodes.clear();
        this.musicNode.disconnect();
        this.effectsNode.disconnect();
    }
} 