import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function MusicPlayer({ musicData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(musicData?.duration || 184);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    return () => {
      soundManager.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      soundManager.pause();
      setIsPlaying(false);
    } else {
      soundManager.play(
        musicData?.audioUrl || '',
        (curr, dur) => {
          setCurrentTime(curr);
          if (dur) setDuration(dur);
        },
        () => {
          setIsPlaying(false);
          setCurrentTime(0);
        }
      );
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    soundManager.seek(seekTime);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
    soundManager.setVolume(val);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      soundManager.setVolume(volume);
    } else {
      setIsMuted(true);
      soundManager.setVolume(0);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      style={{
        background: '#FFF9EF',
        borderRadius: '16px',
        border: '1.5px solid rgba(180, 155, 134, 0.4)',
        padding: '1.25rem 1.75rem',
        maxWidth: '520px',
        width: '100%',
        margin: '1.5rem auto 0 auto',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-dusty-blush)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-deep-chocolate)',
              animation: isPlaying ? 'spin 8s linear infinite' : 'none'
            }}
          >
            <Disc size={26} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-deep-chocolate)' }}>
              {musicData?.title || "Golden Hour (Chello's Version) ♡"}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-cocoa)', fontFamily: 'var(--font-sans)' }}>
              {musicData?.artist || "Scrapbook Soundtrack"} • {isPlaying ? "Playing melody..." : "Paused"}
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-deep-chocolate)',
            color: 'var(--color-cream)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-cocoa)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-deep-chocolate)')}
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />}
        </button>
      </div>

      {/* Progress Bar & Time */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <input
          type="range"
          min="0"
          max={duration || 184}
          value={currentTime}
          onChange={handleSeek}
          style={{
            width: '100%',
            accentColor: 'var(--color-muted-rose)',
            cursor: 'pointer',
            height: '5px'
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--color-taupe)',
            fontFamily: 'monospace'
          }}
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume & Details */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '130px' }}>
          <button
            onClick={toggleMute}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-cocoa)',
              display: 'flex',
              alignItems: 'center',
              padding: '2px'
            }}
            aria-label="Toggle mute"
          >
            {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            style={{
              width: '80px',
              accentColor: 'var(--color-muted-rose)',
              cursor: 'pointer',
              height: '4px'
            }}
          />
        </div>

        <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)', fontStyle: 'italic' }}>
          ♫ Romantic ambient tune
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
