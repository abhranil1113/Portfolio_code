import React from 'react';
import SectionTitle from './SectionTitle';
import { IconGraduationCap, IconCheckCircle, IconAward } from './Icons';

export default function Education({ educationList }) {
  if (!educationList || educationList.length === 0) return null;

  return (
    <section id="education" className="section section-alt">
      <div className="container-narrow">
        <SectionTitle
          tag="Academic Foundation"
          title="Education"
          subtitle="Formal academic degrees, technical qualifications, and secondary education milestones."
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
          {/* Timeline continuous vertical track line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--border-subtle) 100%)',
            }}
          />

          {educationList.map((item, idx) => (
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
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-card-elevated)',
                  border: item.isPrimary ? '2px solid var(--accent-primary)' : '2px solid var(--border-card-hover)',
                  boxShadow: item.isPrimary ? '0 0 14px rgba(56, 189, 248, 0.45)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: item.isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                  }}
                />
              </div>

              {/* Education Card */}
              <div
                className="card"
                style={{
                  border: item.isPrimary
                    ? '1px solid var(--border-card-hover)'
                    : '1px solid var(--border-card)',
                  background: item.isPrimary ? 'var(--bg-card-elevated)' : 'var(--bg-card)',
                }}
              >
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <IconGraduationCap size={16} />
                        {item.degree}
                      </span>
                      {item.isPrimary && (
                        <span className="badge badge-accent" style={{ fontSize: '0.725rem' }}>
                          Undergraduate Degree
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.institution || item.board}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.duration && (
                      <span className="badge badge-accent">
                        Course Duration: {item.duration}
                      </span>
                    )}
                    <span className="badge badge-accent">
                      Passing Year: {item.passingYear}
                    </span>
                    <span className="badge badge-success">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Specialization & Board Details */}
                <div
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {item.branch && <span>{item.branch}</span>}
                  {item.institution && item.board && (
                    <span> &bull; Affiliated: {item.board}</span>
                  )}
                  {!item.institution && item.board && (
                    <span>Board: {item.board}</span>
                  )}
                  {item.location && <span> &bull; {item.location}</span>}
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: 'var(--space-sm)',
                    }}
                  >
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        <IconCheckCircle
                          size={14}
                          style={{
                            color: 'var(--accent-emerald)',
                            marginTop: '0.25rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
