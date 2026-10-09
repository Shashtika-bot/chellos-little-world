import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Polaroid from './Polaroid';

export default function MemoryModal({ isOpen, memory, onClose, onPrev, onNext, currentIndex, totalCount }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !memory) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-animated"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--color-deep-chocolate)',
          color: 'var(--color-cream)',
          borderRadius: '16px',
          maxWidth: '780px',
          width: '100%',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          border: '1.5px solid rgba(201, 149, 141, 0.35)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 249, 239, 0.12)',
            border: 'none',
            color: 'var(--color-cream)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 249, 239, 0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 249, 239, 0.12)')}
        >
          <X size={20} />
        </button>

        {/* Counter Badge */}
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-dusty-blush)',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(235, 209, 193, 0.3)',
            paddingBottom: '0.25rem'
          }}
        >
          Snapshot {currentIndex + 1} of {totalCount}
        </div>

        {/* Modal Layout: 2 Columns on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Polaroid Column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Polaroid
              imageUrl={memory.imageUrl}
              caption={memory.caption}
              rotation={0}
              tapeColor={memory.tapeColor || 'blush'}
              showTape={true}
              maxWidth="320px"
            />
          </div>

          {/* Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--color-cream)',
                lineHeight: 1.2
              }}
            >
              {memory.title}
            </h3>

            {memory.date && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-muted-rose)',
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.25rem'
                }}
              >
                <Calendar size={18} />
                <span>{memory.date}</span>
              </div>
            )}

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#EDE2D7',
                marginTop: '0.5rem'
              }}
            >
              {memory.description}
            </p>

            <div
              style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 249, 239, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <button
                onClick={onPrev}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 249, 239, 0.25)',
                  color: 'var(--color-cream)',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 249, 239, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <button
                onClick={onNext}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'var(--color-muted-rose)',
                  border: 'none',
                  color: '#FFFFFF',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#BA7F76')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-muted-rose)')}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
