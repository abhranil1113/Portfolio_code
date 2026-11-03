import React from 'react';
import { IconDownload, IconMail, IconGithub, IconLinkedin, IconTerminal } from './Icons';

export default function Hero({ personalInfo }) {
  const {
    fullName,
    title,
    shortBio,
    profileImage,
    resume,
    github,
    linkedin,
    availabilityStatus
  } = personalInfo;

  return (
    <section id="hero" className="section" style={{ minHeight: 'calc(100vh - var(--navbar-height))', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
          }}
        >
          {/* Content Column */}
          <div
            className="hero-content reveal-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Availability Status Badge */}
            {availabilityStatus && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(52, 211, 153, 0.1)',
                  border: '1px solid rgba(52, 211, 153, 0.25)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'flex',
                    width: 10,
                    height: 10,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'var(--accent-emerald)',
                      opacity: 0.75,
                      animation: 'statusPing 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
                    }}
                  />
                  <span
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      borderRadius: '50%',
                      width: 10,
                      height: 10,
                      background: 'var(--accent-emerald)',
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--accent-emerald)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {availabilityStatus}
                </span>
              </div>
            )}

            {/* Engineer Identity & Title */}
            <div style={{ marginBottom: 'var(--space-sm)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.35rem',
                }}
              >
                <IconTerminal size={16} />
                <span>echo "Hello, World! I am"</span>
              </span>
              <h1
                className="hero-title"
                style={{
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {fullName}
              </h1>
              <h2
                style={{
                  fontSize: 'clamp(1.3rem, 2.8vw, 1.85rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: 'var(--accent-primary)' }}>&gt; </span>
                {title}
              </h2>
            </div>

            {/* Introduction paragraph */}
            <p
              className="hero-tagline"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '560px',
                marginTop: 'var(--space-md)',
                marginBottom: 'var(--space-2xl)',
              }}
            >
              {shortBio}
            </p>

            {/* CTA Action Buttons */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-2xl)',
              }}
            >
              {resume && (
                <a
                  href={resume}
                  target={resume.startsWith('http') ? '_blank' : '_self'}
                  rel={resume.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={resume.startsWith('http') ? undefined : 'Abhranil_Pal_Resume.pdf'}
                  className="btn btn-primary btn-lg"
                  aria-label="View or download resume"
                >
                  <IconDownload size={20} />
                  <span>View Resume</span>
                </a>
              )}
              <a
                href="#contact"
                className="btn btn-secondary btn-lg"
                aria-label="Scroll to contact section"
              >
                <IconMail size={20} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Social Links */}
            <div
              className="hero-socials"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-faint)',
                }}
              >
                Profiles:
              </span>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="Visit GitHub Profile"
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <IconGithub size={20} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="Visit LinkedIn Profile"
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <IconLinkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Profile Photograph / Engineering Frame Column */}
          <div
            className="hero-image-col reveal-right"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient Background Glow Effect */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'var(--gradient-glow)',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Profile Frame with Multi-layer Glow & Border */}
            <div
              className="hero-avatar-frame"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '320px',
                height: '320px',
                borderRadius: 'var(--radius-xl)',
                padding: '8px',
                background: 'var(--gradient-card-border)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-xl) - 6px)',
                  overflow: 'hidden',
                  background: 'var(--bg-card-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-card)',
                }}
              >
                <img
                  src={profileImage}
                  alt={`${fullName} - ${title}`}
                  width="320"
                  height="320"
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    // Graceful fallback if custom image is replaced with non-existent path
                    e.currentTarget.src = '/assets/profile/profile-photo.svg';
                  }}
                />
              </div>

              {/* Engineering Experience Pill Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  right: '-10px',
                  background: 'var(--bg-card-elevated)',
                  border: '1px solid var(--border-card-hover)',
                  boxShadow: 'var(--shadow-md)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.5rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Backend &amp; Distributed Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes statusPing {
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

