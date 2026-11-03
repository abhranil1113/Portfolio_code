import React from 'react';
import SectionTitle from './SectionTitle';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconGithub,
  IconLinkedin,
  IconExternalLink,
  IconCheckCircle
} from './Icons';

export default function PersonalInfo({ personalInfo }) {
  const {
    fullName,
    email,
    phone,
    location,
    linkedin,
    github,
    portfolioUrl,
    nationality,
    languages
  } = personalInfo;

  return (
    <section id="personal-info" className="section">
      <div className="container">
        <SectionTitle
          tag="Verified Metadata"
          title="Personal Information"
          subtitle="Direct contact details, primary locations, and verified communication channels."
        />

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {/* Contact & Location Card */}
          <div className="card">
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: 'var(--space-md)',
                color: 'var(--text-primary)',
              }}
            >
              Direct Communication
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* Full Name */}
              {fullName && (
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Full Name</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{fullName}</span>
                </div>
              )}

              {/* Email */}
              {email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      flexShrink: 0,
                    }}
                  >
                    <IconMail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Email Address</span>
                    <a
                      href={`mailto:${email}`}
                      style={{ fontSize: '0.925rem', fontWeight: 600, wordBreak: 'break-all' }}
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {/* Phone */}
              {phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                      flexShrink: 0,
                    }}
                  >
                    <IconPhone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Phone</span>
                    <a href={`tel:${phone}`} style={{ fontSize: '0.925rem', fontWeight: 600 }}>
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {location && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      flexShrink: 0,
                    }}
                  >
                    <IconMapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                    <span style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {location}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Online Presence & Links Card */}
          <div className="card">
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: 'var(--space-md)',
                color: 'var(--text-primary)',
              }}
            >
              Online Identifiers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* GitHub */}
              {github && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <IconGithub size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>GitHub</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>abhranilpal</span>
                    </div>
                  </div>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label="Open GitHub profile"
                  >
                    <span>View</span>
                    <IconExternalLink size={14} />
                  </a>
                </div>
              )}

              {/* LinkedIn */}
              {linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      <IconLinkedin size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>LinkedIn</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>in/abhranilpal</span>
                    </div>
                  </div>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label="Open LinkedIn profile"
                  >
                    <span>Connect</span>
                    <IconExternalLink size={14} />
                  </a>
                </div>
              )}

              {/* Portfolio URL */}
              {portfolioUrl && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Canonical Portfolio</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                      {portfolioUrl}
                    </span>
                  </div>
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label="Visit canonical portfolio domain"
                  >
                    <span>Visit</span>
                    <IconExternalLink size={14} />
                  </a>
                </div>
              )}

              {/* Nationality */}
              {nationality && (
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Nationality</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{nationality}</span>
                </div>
              )}
            </div>
          </div>

          {/* Languages & Working Communication */}
          {languages && languages.length > 0 && (
            <div className="card">
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-md)',
                  color: 'var(--text-primary)',
                }}
              >
                Languages &amp; Proficiency
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <IconCheckCircle size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {lang.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.775rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-primary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(56, 189, 248, 0.08)',
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

