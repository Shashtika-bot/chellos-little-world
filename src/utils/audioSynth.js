// Romantic acoustic / music box Web Audio synthesizer for the scrapbook player
// Plays a soothing, dreamy birthday melody when no external audioUrl is provided,
// and gracefully supports real audio files when audioUrl is present.

class ScrapbookAudioPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.volume = 0.7;
    this.audioElement = null;
    this.timer = null;
    this.currentStep = 0;
    this.onProgress = null;
    this.onEnded = null;
    this.duration = 184; // 3:04
    this.currentTime = 0;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Pentatonic romantic music-box melody notes (frequencies in Hz)
  // C major / A minor pentatonic: C4, D4, E4, G4, A4, C5, D5, E5, G5
  getMelodyNote(step) {
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
    // Gentle melodic pattern
    const pattern = [
      0, 2, 4, 5,  4, 2, 3, 5,
      2, 4, 5, 7,  5, 4, 2, 0,
      1, 3, 4, 6,  4, 3, 2, 0,
      2, 5, 4, 2,  0, 2, 4, 5
    ];
    return scale[pattern[step % pattern.length]];
  }

  playNote(freq, time, duration = 1.2) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft music-box tone (sine + gentle triangle harmonics)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      // Volume envelope: soft pluck, long mellow ring
      const maxGain = 0.22 * this.volume;
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.exponentialRampToValueAtTime(maxGain, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // AudioContext fallback
    }
  }

  play(audioUrl, onProgressCallback, onEndedCallback) {
    this.onProgress = onProgressCallback;
    this.onEnded = onEndedCallback;
    this.isPlaying = true;

    if (audioUrl && audioUrl.trim().length > 0) {
      if (!this.audioElement) {
        this.audioElement = new Audio(audioUrl);
        this.audioElement.volume = this.volume;
        this.audioElement.addEventListener('timeupdate', () => {
          this.currentTime = this.audioElement.currentTime;
          this.duration = this.audioElement.duration || 184;
          if (this.onProgress) {
            this.onProgress(this.currentTime, this.duration);
          }
        });
        this.audioElement.addEventListener('ended', () => {
          this.isPlaying = false;
          if (this.onEnded) this.onEnded();
        });
      }
      this.audioElement.currentTime = this.currentTime;
      this.audioElement.play().catch(() => {
        // Fallback to synth if external audio fails or blocked
        this.playSynth();
      });
      return;
    }

    // Synthesized soothing playback
    this.playSynth();
  }

  playSynth() {
    this.initContext();
    this.stepInterval = 450; // ms per note

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.isPlaying) return;
      const now = this.ctx ? this.ctx.currentTime : 0;
      const noteFreq = this.getMelodyNote(this.currentStep);
      this.playNote(noteFreq, now);

      // Add gentle harmonic bass note on every 4th step
      if (this.currentStep % 4 === 0) {
        const bassFreq = noteFreq / 2;
        this.playNote(bassFreq, now, 1.8);
      }

      this.currentStep++;
      this.currentTime += (this.stepInterval / 1000);
      if (this.currentTime >= this.duration) {
        this.currentTime = 0;
        this.currentStep = 0;
      }

      if (this.onProgress) {
        this.onProgress(this.currentTime, this.duration);
      }
    }, this.stepInterval);
  }

  pause() {
    this.isPlaying = false;
    clearInterval(this.timer);
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  seek(seconds) {
    this.currentTime = Math.max(0, Math.min(seconds, this.duration));
    if (this.audioElement) {
      this.audioElement.currentTime = this.currentTime;
    } else {
      this.currentStep = Math.floor(this.currentTime / (this.stepInterval ? this.stepInterval / 1000 : 0.45));
    }
    if (this.onProgress) {
      this.onProgress(this.currentTime, this.duration);
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }
}

export const soundManager = new ScrapbookAudioPlayer();
