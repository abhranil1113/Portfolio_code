import React from 'react';
import { IconGithub, IconLinkedin, IconMail, IconArrowUp } from './Icons';

export default function Footer({ personalInfo }) {
  const currentYear = new Date().getFullYear();
  const { fullName, title, github, linkedin, email } = personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'var(--space-2xl) 0 var(--space-xl) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {/* Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gradient-accent)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                }}
              >
                AP
              </span>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {fullName}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {title}
            </p>
          </div>

          {/* Social / Direct Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                  width: 38,
                  height: 38,
                }}
              >
                <IconGithub size={18} />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                  width: 38,
                  height: 38,
                }}
              >
                <IconLinkedin size={18} />
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="btn-icon"
                aria-label="Direct Email"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                  width: 38,
                  height: 38,
                }}
              >
                <IconMail size={18} />
              </a>
            )}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              aria-label="Back to top of the page"
              style={{
                marginLeft: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>Back to Top</span>
              <IconArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Line: Copyright & Engineering Note */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            fontSize: '0.825rem',
            color: 'var(--text-faint)',
          }}
        >
          <div>
            &copy; {currentYear} {fullName}. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            Engineered with React.js &amp; Pure Custom CSS &bull; Zero Framework Bloat
          </div>
        </div>
      </div>
    </footer>
  );
}

