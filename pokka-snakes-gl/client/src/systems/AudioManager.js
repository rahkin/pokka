export class AudioManager {
    constructor() {
        this.sounds = new Map();
        this.weatherSounds = new Map();
        this.currentWeather = 'sunny';
        this.isMuted = false;
        this.volume = 0.5;
        this.hasUserInteracted = false;
        this.soundBuffers = new Map();
        this.loadedSounds = new Set();
        this.totalSounds = 0;
        this.loadedCount = 0;
        this.loadingPromise = null;
        
        console.log('AudioManager: Initializing');
        
        try {
            // Initialize audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('AudioManager: Audio context created, state:', this.audioContext.state);
            
            // Create master gain node
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.value = this.volume;
        } catch (error) {
            console.error('AudioManager: Failed to create audio context:', error);
        }
        
        // Create audio status indicator
        this.createAudioStatusIndicator();
        
        // Add click event listener to enable audio
        const enableAudioHandler = async () => {
            console.log('AudioManager: Click/touch detected');
            await this.enableAudio();
        };

        // Add event listeners to multiple elements to ensure we catch the interaction
        const elements = [
            document.body,
            window,
            document.documentElement,
            document.getElementById('game-container') || document.body
        ];

        elements.forEach(element => {
            element.addEventListener('click', enableAudioHandler, { once: true });
            element.addEventListener('touchstart', enableAudioHandler, { once: true });
        });
        
        console.log('AudioManager: Event listeners added');
    }

    createAudioStatusIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'audio-status';
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-family: 'Press Start 2P', monospace;
            font-size: 12px;
            z-index: 1000;
            cursor: pointer;
            transition: opacity 0.3s;
        `;
        indicator.textContent = '🔇 Click to enable audio';
        indicator.onclick = () => this.enableAudio();
        document.body.appendChild(indicator);
        this.audioStatusIndicator = indicator;
    }

    async initializeSounds() {
        if (this.loadingPromise) {
            return this.loadingPromise;
        }

        this.loadingPromise = new Promise(async (resolve, reject) => {
            try {
                console.log('AudioManager: Initializing sounds');
                
                // Game sounds with MP3 format
                const gameSounds = {
                    eat: ['/pokka-snakes-gl/assets/audio/eat.mp3'],
                    gameOver: ['/pokka-snakes-gl/assets/audio/gameOver.mp3'],
                    powerUp: ['/pokka-snakes-gl/assets/audio/powerUp.mp3'],
                    turn: ['/pokka-snakes-gl/assets/audio/turn.mp3'],
                    background: ['/pokka-snakes-gl/assets/audio/background.mp3'],
                    click: ['/pokka-snakes-gl/assets/audio/click.mp3']
                };

                // Weather sounds (MP3 only)
                const weatherSounds = {
                    rain: ['/pokka-snakes-gl/assets/audio/rain.mp3'],
                    snow: ['/pokka-snakes-gl/assets/audio/snow.mp3'],
                    wind: ['/pokka-snakes-gl/assets/audio/wind.mp3']
                };

                // Count total sounds
                this.totalSounds = Object.keys(gameSounds).length + Object.keys(weatherSounds).length;
                let loadedCount = 0;

                // Load all game sounds
                for (const [name, paths] of Object.entries(gameSounds)) {
                    try {
                        console.log('AudioManager: Loading game sound:', name);
                        let buffer = null;
                        let lastError = null;
                        
                        // Try each format until one works
                        for (const path of paths) {
                            try {
                                console.log('AudioManager: Attempting to load:', path);
                                buffer = await this.loadSoundFile(path);
                                if (buffer) {
                                    console.log('AudioManager: Successfully loaded game sound format:', path);
                                    break;
                                }
                            } catch (error) {
                                console.warn('AudioManager: Failed to load game sound format:', path, error);
                                lastError = error;
                            }
                        }
                        
                        if (buffer) {
                            this.soundBuffers.set(name, buffer);
                            this.loadedSounds.add(name);
                            loadedCount++;
                            this.loadedCount = loadedCount;
                            this.updateLoadingProgress();
                            console.log('AudioManager: Successfully loaded game sound:', name);
                        } else {
                            console.error('AudioManager: Failed to load any format for game sound:', name, lastError);
                        }
                    } catch (error) {
                        console.error('AudioManager: Failed to load game sound:', name, error);
                    }
                }

                // Load all weather sounds
                for (const [name, paths] of Object.entries(weatherSounds)) {
                    try {
                        console.log('AudioManager: Loading weather sound:', name);
                        let buffer = null;
                        let lastError = null;
                        
                        // Try each format until one works
                        for (const path of paths) {
                            try {
                                console.log('AudioManager: Attempting to load:', path);
                                buffer = await this.loadSoundFile(path);
                                if (buffer) {
                                    console.log('AudioManager: Successfully loaded weather sound format:', path);
                                    break;
                                }
                            } catch (error) {
                                console.warn('AudioManager: Failed to load weather sound format:', path, error);
                                lastError = error;
                            }
                        }
                        
                        if (buffer) {
                            this.soundBuffers.set(name, buffer);
                            this.loadedSounds.add(name);
                            loadedCount++;
                            this.loadedCount = loadedCount;
                            this.updateLoadingProgress();
                            console.log('AudioManager: Successfully loaded weather sound:', name);
                        } else {
                            console.error('AudioManager: Failed to load any format for weather sound:', name, lastError);
                        }
                    } catch (error) {
                        console.error('AudioManager: Failed to load weather sound:', name, error);
                    }
                }

                console.log('AudioManager: All sounds initialized. Loaded sounds:', Array.from(this.loadedSounds));
                
                if (loadedCount === 0) {
                    throw new Error('No sounds were loaded successfully');
                }
                
                resolve();
            } catch (error) {
                console.error('AudioManager: Failed to initialize sounds:', error);
                reject(error);
            }
        });

        return this.loadingPromise;
    }

    updateLoadingProgress() {
        const progress = (this.loadedCount / this.totalSounds) * 100;
        const loadingBar = document.getElementById('loading-bar');
        const loadingText = document.getElementById('loading-text');
        
        if (loadingBar) {
            loadingBar.style.width = `${progress}%`;
        }
        
        if (loadingText) {
            loadingText.textContent = `Loading resources... ${Math.round(progress)}%`;
        }
    }

    async loadSoundFile(url) {
        console.log('AudioManager: Loading sound file:', url);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            console.log('AudioManager: Successfully loaded sound file:', url, 'Duration:', audioBuffer.duration);
            return audioBuffer;
        } catch (error) {
            console.error('AudioManager: Error loading sound file:', url, error);
            return null;
        }
    }

    play(soundName, loop = false) {
        if (!this.hasUserInteracted) {
            console.warn('AudioManager: Cannot play sound before user interaction:', soundName);
            return;
        }

        if (this.isMuted) {
            console.log('AudioManager: Sound not played - muted:', soundName);
            return;
        }

        if (!this.loadedSounds.has(soundName)) {
            console.warn('AudioManager: Sound not loaded yet:', soundName);
            return;
        }

        const buffer = this.soundBuffers.get(soundName);
        if (!buffer) {
            console.warn('AudioManager: Sound buffer not found:', soundName);
            return;
        }

        try {
            // Create source node
            const source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = loop;

            // Create gain node for this sound
            const gainNode = this.audioContext.createGain();
            // Increase volume by 50% for eat sound
            gainNode.gain.value = soundName === 'eat' ? this.volume * 1.5 : this.volume;

            // Connect nodes
            source.connect(gainNode);
            gainNode.connect(this.masterGain);

            // Start playing
            source.start(0);
            console.log('AudioManager: Started playing sound:', soundName, {
                volume: gainNode.gain.value,
                isEatSound: soundName === 'eat'
            });

            // Store reference if looping
            if (loop) {
                this.sounds.set(soundName, { source, gainNode });
            }

            // Clean up when done
            source.onended = () => {
                source.disconnect();
                gainNode.disconnect();
                if (loop) {
                    this.sounds.delete(soundName);
                }
                console.log('AudioManager: Sound ended:', soundName);
            };
        } catch (error) {
            console.error('AudioManager: Failed to play sound:', soundName, error);
        }
    }

    stop(soundName) {
        const sound = this.sounds.get(soundName);
        if (sound) {
            try {
                sound.source.stop();
                sound.source.disconnect();
                sound.gainNode.disconnect();
                this.sounds.delete(soundName);
            } catch (error) {
                console.error('AudioManager: Error stopping sound:', soundName, error);
            }
        }
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        this.masterGain.gain.value = this.volume;
    }

    async enableAudio() {
        console.log('AudioManager: enableAudio called, hasUserInteracted:', this.hasUserInteracted);
        if (!this.hasUserInteracted) {
            this.hasUserInteracted = true;
            
            // Update visual indicator
            if (this.audioStatusIndicator) {
                this.audioStatusIndicator.textContent = '🔊 Audio enabled';
                setTimeout(() => {
                    this.audioStatusIndicator.style.opacity = '0';
                    setTimeout(() => {
                        this.audioStatusIndicator.remove();
                    }, 300);
                }, 2000);
            }
            
            if (this.audioContext) {
                console.log('AudioManager: Current audio context state:', this.audioContext.state);
                if (this.audioContext.state === 'suspended') {
                    console.log('AudioManager: Resuming audio context');
                    try {
                        await this.audioContext.resume();
                        console.log('AudioManager: Audio context resumed successfully, new state:', this.audioContext.state);
                        
                        // Wait for sounds to load if they haven't already
                        await this.initializeSounds();
                        
                        // Start background music after context is resumed and sounds are loaded
                        this.play('background', true);
                    } catch (error) {
                        console.error('AudioManager: Failed to resume audio context:', error);
                    }
                } else {
                    console.log('AudioManager: Audio context already running, starting background music');
                    // Wait for sounds to load if they haven't already
                    await this.initializeSounds();
                    this.play('background', true);
                }
            } else {
                console.error('AudioManager: No audio context available');
            }
        }
    }

    cleanup() {
        // Stop all sounds
        for (const [name, sound] of this.sounds) {
            this.stop(name);
        }
        this.sounds.clear();

        // Remove audio status indicator
        if (this.audioStatusIndicator) {
            this.audioStatusIndicator.remove();
        }

        // Close audio context
        if (this.audioContext) {
            this.audioContext.close();
        }
    }

    async setWeather(weatherType) {
        console.log('AudioManager: Setting weather to:', weatherType, {
            hasUserInteracted: this.hasUserInteracted,
            isMuted: this.isMuted,
            loadedSounds: Array.from(this.loadedSounds),
            availableBuffers: Array.from(this.soundBuffers.keys())
        });
        
        // Ensure audio context is running
        if (this.audioContext && this.audioContext.state === 'suspended') {
            console.log('AudioManager: Resuming audio context for weather change');
            await this.audioContext.resume();
        }
        
        // Stop any currently playing weather sounds
        for (const [name, sound] of this.weatherSounds.entries()) {
            if (sound.source) {
                console.log('AudioManager: Stopping previous weather sound:', name);
                sound.source.stop();
                sound.source.disconnect();
                this.weatherSounds.delete(name);
            }
        }

        // Play new weather sound if it exists
        if (weatherType !== 'sunny' && this.soundBuffers.has(weatherType)) {
            console.log('AudioManager: Playing weather sound:', weatherType, {
                buffer: this.soundBuffers.get(weatherType),
                audioContextState: this.audioContext.state
            });
            
            const buffer = this.soundBuffers.get(weatherType);
            
            // Create source node
            const source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = true; // Weather sounds should loop

            // Create gain node for this sound
            const gainNode = this.audioContext.createGain();
            gainNode.gain.value = this.volume * 0.8; // Increased volume for weather sounds

            // Connect nodes
            source.connect(gainNode);
            gainNode.connect(this.masterGain);

            // Start playing
            source.start(0);
            console.log('AudioManager: Started playing weather sound:', weatherType, {
                volume: gainNode.gain.value,
                masterVolume: this.masterGain.gain.value,
                audioContextState: this.audioContext.state
            });

            // Store reference
            this.weatherSounds.set(weatherType, { source, gainNode });
        } else {
            console.log('AudioManager: Weather sound not available:', weatherType, {
                isSunny: weatherType === 'sunny',
                hasBuffer: this.soundBuffers.has(weatherType),
                loadedSounds: Array.from(this.loadedSounds),
                audioContextState: this.audioContext.state
            });
        }
    }

    stopAllSounds() {
        // Stop all regular sounds
        for (const [name, sound] of this.sounds.entries()) {
            if (sound.source) {
                sound.source.stop();
                sound.source.disconnect();
                this.sounds.delete(name);
            }
        }

        // Stop all weather sounds
        for (const [name, sound] of this.weatherSounds.entries()) {
            if (sound.source) {
                sound.source.stop();
                sound.source.disconnect();
                this.weatherSounds.delete(name);
            }
        }
    }
} 