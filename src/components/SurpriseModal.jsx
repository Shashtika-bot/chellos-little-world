import React, { useState, useEffect } from 'react';
import { X, Sparkles, Heart, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SurpriseModal({ isOpen, onClose, surpriseData }) {
  const [candlesBlown, setCandlesBlown] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Fire celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#EBD1C1', '#C9958D', '#B49B86', '#FFF9EF', '#DFB15B']
        });
      } catch {
        // fallback
      }
    } else {
      setCandlesBlown(false);
    }
  }, [isOpen]);

  const handleMakeWish = () => {
    setCandlesBlown(true);
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#FF69B4', '#EBD1C1', '#C9958D', '#FFF9EF']
      });
    } catch {
      // fallback
    }
  };

  if (!isOpen || !surpriseData) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-animated"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFF9EF',
          color: 'var(--color-warm-brown-text)',
          borderRadius: '16px',
          maxWidth: '560px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--color-dusty-blush)',
          textAlign: 'center',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close surprise"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(56, 34, 25, 0.08)',
            border: 'none',
            color: 'var(--color-deep-chocolate)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        {/* Gift Icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 1.25rem auto',
            borderRadius: '50%',
            backgroundColor: 'var(--color-dusty-blush)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-deep-chocolate)'
          }}
        >
          <Gift size={32} strokeWidth={1.8} />
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.1rem',
            color: 'var(--color-deep-chocolate)',
            marginBottom: '0.4rem',
            lineHeight: 1.2
          }}
        >
          {surpriseData.title || "A Little Surprise for Chello! 🎉🤎"}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.45rem',
            color: 'var(--color-muted-rose)',
            marginBottom: '1.5rem'
          }}
        >
          {surpriseData.subtitle || "Make a wish, birthday girl!"}
        </p>

        {/* Wishes list */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            border: '1px solid rgba(180, 155, 134, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            textAlign: 'left',
            marginBottom: '1.75rem'
          }}
        >
          {surpriseData.wishes?.map((wish, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <Sparkles size={16} color="var(--color-muted-rose)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-deep-chocolate)' }}>
                {wish}
              </span>
            </div>
          ))}
        </div>

        {/* Birthday Cake / Make a Wish Interaction */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem', transition: 'transform 0.3s ease' }}>
            {candlesBlown ? '✨🎂✨' : '🕯️🎂🕯️'}
          </div>

          <button
            onClick={handleMakeWish}
            className="btn-primary"
            style={{ fontSize: '0.9rem', padding: '0.75rem 1.75rem' }}
          >
            {candlesBlown ? 'Wish Made! (Make Another ♡)' : 'Blow Candles & Make a Wish ✧'}
          </button>
        </div>

        {/* Secret Toast */}
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: '8px',
            border: '1px dashed var(--color-taupe)',
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.35rem',
            color: 'var(--color-cocoa)',
            lineHeight: 1.4
          }}
        >
          "{surpriseData.secretToast || "Cheers to 19 years of Bhavasri — the prettiest, funniest, and most irreplaceable soul!"}"
        </div>
      </div>
    </div>
  );
}
