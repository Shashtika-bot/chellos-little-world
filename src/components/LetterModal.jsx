import React, { useEffect } from 'react';
import { X, Heart } from 'lucide-react';

export default function LetterModal({ isOpen, onClose, letterData }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !letterData) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-animated"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFDF9',
          color: 'var(--color-warm-brown-text)',
          borderRadius: '12px',
          maxWidth: '680px',
          width: '100%',
          padding: '3rem 2.5rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(180, 155, 134, 0.25)',
          border: '12px solid #F6EEE2',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close letter"
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
            transition: 'background 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(56, 34, 25, 0.16)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(56, 34, 25, 0.08)')}
        >
          <X size={18} />
        </button>

        {/* Vintage Stamp Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-taupe)',
                marginBottom: '0.25rem'
              }}
            >
              Poste d'Amour • 19th Edition
            </div>
            <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: 'var(--color-muted-rose)' }}>
              {letterData.date || 'October 9, 2026'}
            </div>
          </div>

          <div
            style={{
              width: '52px',
              height: '62px',
              border: '2px dashed var(--color-muted-rose)',
              borderRadius: '3px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-warm-ivory)',
              boxShadow: '0 2px 5px rgba(56, 34, 25, 0.1)'
            }}
          >
            <Heart size={18} fill="var(--color-muted-rose)" stroke="none" />
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-chocolate)' }}>
              19
            </span>
          </div>
        </div>

        {/* Greeting */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.2rem',
            color: 'var(--color-deep-chocolate)',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}
        >
          {letterData.greeting || letterData.title || 'My Dearest Chello,'}
        </h2>

        {/* Letter Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {letterData.paragraphs?.map((para, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'var(--color-warm-brown-text)'
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Signoff */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(180, 155, 134, 0.3)' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-cocoa)' }}>
            {letterData.closing || 'With all my love and endless gratitude,'}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '2.2rem',
              color: 'var(--color-deep-chocolate)',
              marginTop: '0.3rem'
            }}
          >
            {letterData.signature || letterData.signoff || 'always your person ♡'}
          </div>
        </div>
      </div>
    </div>
  );
}
