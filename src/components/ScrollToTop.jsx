import React, { useState, useEffect } from 'react';
import { IconArrowUp } from './Icons';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn-icon scroll-to-top-btn"
      aria-label="Scroll back to top"
      title="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '46px',
        height: '46px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--gradient-accent)',
        color: '#ffffff',
        border: 'none',
        boxShadow: '0 6px 20px rgba(56, 189, 248, 0.4)',
        cursor: 'pointer',
        zIndex: 'var(--z-sticky)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--transition-bounce)',
        animation: 'bounceIn 300ms var(--ease-spring)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
      }}
    >
      <IconArrowUp size={20} />
      <style>{`
        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.6) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </button>
  );
}

