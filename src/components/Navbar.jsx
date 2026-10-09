import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar({ onOpenLetter }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Snapshots', href: '#snapshots', id: 'snapshots' },
    { label: 'Little Things', href: '#little-things', id: 'little-things' },
    { label: 'Flip Cards', href: '#flip-cards', id: 'flip-cards' },
    { label: 'Our Universe', href: '#universe', id: 'universe' },
    { label: 'Birthday', href: '#finale', id: 'finale' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPosition) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 249, 239, 0.94)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(180, 155, 134, 0.25)',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(56, 34, 25, 0.08)' : 'none'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.85rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Handwritten Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.9rem',
            fontWeight: 700,
            color: 'var(--color-warm-brown-text)',
            letterSpacing: '0.02em',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-deep-chocolate)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-warm-brown-text)')}
        >
          <span>Chello’s little world</span>
          <Heart size={18} fill="var(--color-muted-rose)" stroke="none" style={{ marginTop: '2px' }} />
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'var(--font-sans)',
                  color: isActive ? 'var(--color-deep-chocolate)' : 'var(--color-warm-brown-text)',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '15%',
                      width: '70%',
                      height: '2px',
                      backgroundColor: 'var(--color-muted-rose)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}

          {onOpenLetter && (
            <button
              onClick={onOpenLetter}
              className="btn-primary"
              style={{
                fontSize: '0.82rem',
                padding: '0.5rem 1.1rem',
                marginLeft: '0.5rem'
              }}
            >
              Letter ♡
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="mobile-nav-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-deep-chocolate)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            borderTop: '1px solid rgba(180, 155, 134, 0.2)',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 8px 20px rgba(56, 34, 25, 0.1)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.1rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? 'var(--color-deep-chocolate)' : 'var(--color-warm-brown-text)',
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(180, 155, 134, 0.1)'
              }}
            >
              {link.label}
            </a>
          ))}

          {onOpenLetter && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLetter();
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Open Letter ♡
            </button>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
