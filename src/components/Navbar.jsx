import React, { useState, useEffect, useRef } from 'react';
import { IconSun, IconMoon, IconMenu, IconClose, IconChevronDown } from './Icons';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Teaching', href: '#teaching', id: 'teaching' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const secondaryNavItems = [
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Profiles', href: '#social-profiles', id: 'social-profiles' },
    { label: 'Interests', href: '#hobbies', id: 'hobbies' },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  const isSecondaryActive = secondaryNavItems.some((item) => item.id === activeSection);

  return (
    <header
      className={`site-header ${scrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-navbar)',
        height: 'var(--navbar-height)',
        background: scrolled ? 'var(--bg-glass-navbar)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="brand-logo"
          aria-label="Abhranil Pal Portfolio - Go to top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '-0.03em',
            textDecoration: 'none'
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 38,
              height: 38,
              borderRadius: 'var(--radius-md)',
              background: 'var(--gradient-accent)',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              fontWeight: 800,
              boxShadow: '0 2px 10px rgba(56, 189, 248, 0.35)'
            }}
          >
            AP
          </span>
          <span className="brand-text">
            Abhranil<span style={{ color: 'var(--accent-primary)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="nav-desktop-links"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          {primaryNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                style={{
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                  position: 'relative'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: 'var(--accent-primary)',
                      borderRadius: 'var(--radius-full)'
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* More Dropdown for Desktop */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
              className={`nav-link ${isSecondaryActive ? 'nav-link-active' : ''}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.45rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: isSecondaryActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                background: isSecondaryActive || moreDropdownOpen ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              More
              <IconChevronDown
                size={14}
                style={{
                  transform: moreDropdownOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }}
              />
            </button>

            {moreDropdownOpen && (
              <div
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  width: '210px',
                  background: 'var(--bg-card-elevated)',
                  border: '1px solid var(--border-card-hover)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  animation: 'dropdownFadeIn 180ms ease'
                }}
              >
                {secondaryNavItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    role="menuitem"
                    onClick={handleLinkClick}
                    style={{
                      padding: '0.55rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      background: activeSection === item.id ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Group: Theme Toggle & Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-icon theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              width: 40,
              height: 40,
              transition: 'all var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="btn-icon nav-mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              width: 40,
              height: 40
            }}
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-primary)',
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            borderTop: '1px solid var(--border-subtle)',
            animation: 'fadeIn 200ms ease'
          }}
        >
          <div style={{ marginBottom: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em'
              }}
            >
              Navigation Menu
            </span>
          </div>
          {allNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'var(--bg-secondary)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--border-card-hover)' : 'var(--border-subtle)',
                  textDecoration: 'none'
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--accent-primary)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
