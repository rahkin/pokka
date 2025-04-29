class SoundManager {
  private audioContext: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    this.initializeAudioContext();
  }

  private initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.error('Web Audio API is not supported in this browser:', error);
    }
  }

  private generateBeep(frequency: number, duration: number, volume: number = 0.1) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  play(soundName: string) {
    if (this.isMuted || !this.audioContext) return;

    switch (soundName) {
      case 'start':
        // Ascending startup sound
        [220, 440, 880, 1760].forEach((freq, i) => {
          setTimeout(() => this.generateBeep(freq, 0.1, 0.2), i * 100);
        });
        break;

      case 'eat':
        // Short chomp sound
        this.generateBeep(440, 0.1, 0.2);
        break;

      case 'powerPellet':
        // Power pellet collection sound
        [440, 880, 1320, 1760].forEach((freq, i) => {
          setTimeout(() => this.generateBeep(freq, 0.1, 0.2), i * 50);
        });
        break;

      case 'eatGhost':
        // Ghost eaten sound
        [880, 440, 220, 110].forEach((freq, i) => {
          setTimeout(() => this.generateBeep(freq, 0.1, 0.2), i * 50);
        });
        break;

      case 'death':
        // Death sound
        [440, 220, 110, 55].forEach((freq, i) => {
          setTimeout(() => this.generateBeep(freq, 0.2, 0.3), i * 150);
        });
        break;

      case 'gameOver':
        // Game over sound
        [880, 440, 220, 110, 55].forEach((freq, i) => {
          setTimeout(() => this.generateBeep(freq, 0.3, 0.4), i * 200);
        });
        break;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
  }
}

export const soundManager = new SoundManager(); 