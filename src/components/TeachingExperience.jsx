import React from 'react';
import SectionTitle from './SectionTitle';
import { IconCheckCircle, IconBookOpen, IconAward } from './Icons';

export default function TeachingExperience({ teachingList }) {
  if (!teachingList || teachingList.length === 0) return null;

  return (
    <section id="teaching" className="section section-alt">
      <div className="container-narrow">
        <SectionTitle
          tag="Academic Mentorship"
          title="Teaching Experience"
          subtitle="Part-time academic tutoring, conceptual guidance, and structured problem-solving in Computer Science and Mathematics."
        />

        <div
          className="timeline"
          style={{
            position: 'relative',
            paddingLeft: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2xl)',
          }}
        >
          {/* Vertical Timeline Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-secondary) 0%, var(--accent-primary) 80%, var(--border-subtle) 100%)',
            }}
          />

          {teachingList.map((item, idx) => (
            <div
              key={item.id || idx}
              className="timeline-item reveal"
              style={{ position: 'relative' }}
            >
              {/* Timeline Node Bullet */}
              <div
                className="timeline-marker"
                style={{
                  position: 'absolute',
                  left: '-36px',
                  top: '8px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-card-elevated)',
                  border: '2px solid var(--accent-secondary)',
                  boxShadow: '0 0 14px rgba(129, 140, 248, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--accent-secondary)',
                  }}
                />
              </div>

              {/* Teaching Experience Card */}
              <div className="card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--accent-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <IconBookOpen size={15} />
                        {item.employmentType || 'Part-time Tutoring'}
                      </span>
                      {item.isCurrent && (
                        <span className="badge badge-success" style={{ fontSize: '0.725rem' }}>
                          Active
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.role}
                    </h3>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-purple">
                      {item.duration}
                    </span>
                    {item.location && (
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.25rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Focus Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: 'var(--space-xs)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <span className="badge badge-accent">Computer Science</span>
                  <span className="badge badge-accent">Mathematics</span>
                  <span className="badge">Problem-Solving Methodology</span>
                </div>

                {/* Key Responsibilities */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div style={{ marginTop: 'var(--space-sm)' }}>
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.55rem',
                      }}
                    >
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.925rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                          }}
                        >
                          <IconCheckCircle
                            size={15}
                            style={{
                              color: 'var(--accent-secondary)',
                              marginTop: '0.25rem',
                              flexShrink: 0,
                            }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

