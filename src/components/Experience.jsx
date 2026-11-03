import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import {
  IconBriefcase,
  IconCheckCircle,
  IconChevronDown,
  IconChevronUp,
  IconAward
} from './Icons';

export default function Experience({ experienceList }) {
  // Track expanded state for cards
  const [expandedIds, setExpandedIds] = useState(() => {
    // Expand the first experience record by default
    return experienceList && experienceList.length > 0 ? [experienceList[0].id] : [];
  });

  if (!experienceList || experienceList.length === 0) return null;

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="section">
      <div className="container-narrow">
        <SectionTitle
          tag="Career Track"
          title="Work Experience"
          subtitle="Engineering roles, production systems built, and core responsibilities delivered."
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
              background: 'linear-gradient(to bottom, var(--accent-primary) 0%, var(--accent-secondary) 60%, var(--border-subtle) 100%)',
            }}
          />

          {experienceList.map((exp, idx) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div
                key={exp.id || idx}
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
                    border: '2px solid var(--accent-primary)',
                    boxShadow: '0 0 14px rgba(56, 189, 248, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-primary)' }} />
                </div>

                {/* Experience Card */}
                <div className="card">
                  {/* Header */}
                  <div
                    className="experience-header"
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: 'var(--accent-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                          }}
                        >
                          <IconBriefcase size={15} />
                          {exp.employmentType}
                        </span>
                        {exp.isCurrent && (
                          <span className="badge badge-success" style={{ fontSize: '0.725rem' }}>
                            Current Role
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.designation}
                      </h3>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                        {exp.company}
                      </h4>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span className="badge badge-accent">
                        {exp.startDate} &mdash; {exp.isCurrent ? 'Present' : exp.endDate}
                      </span>
                      {exp.location && (
                        <div
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            marginTop: '0.25rem',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technologies Badges */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginTop: 'var(--space-sm)',
                        marginBottom: 'var(--space-md)',
                      }}
                    >
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Responsibilities list (expandable) */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div style={{ marginTop: 'var(--space-sm)' }}>
                      <ul
                        style={{
                          listStyle: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.55rem',
                        }}
                      >
                        {(isExpanded
                          ? exp.responsibilities
                          : exp.responsibilities.slice(0, 2)
                        ).map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.55rem',
                              fontSize: '0.9rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.65,
                            }}
                          >
                            <IconCheckCircle
                              size={15}
                              style={{
                                color: 'var(--accent-primary)',
                                marginTop: '0.25rem',
                                flexShrink: 0,
                              }}
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expand / Collapse Button if > 2 responsibilities */}
                      {exp.responsibilities.length > 2 && (
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            marginTop: 'var(--space-sm)',
                            padding: '0.35rem 0.65rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--accent-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {isExpanded ? (
                            <>
                              <span>Show Less</span>
                              <IconChevronUp size={14} />
                            </>
                          ) : (
                            <>
                              <span>Show All Responsibilities ({exp.responsibilities.length})</span>
                              <IconChevronDown size={14} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Factual Achievements Section */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div
                      style={{
                        marginTop: 'var(--space-md)',
                        paddingTop: 'var(--space-sm)',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          color: 'var(--accent-amber)',
                          letterSpacing: '0.06em',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          marginBottom: '0.4rem',
                        }}
                      >
                        <IconAward size={14} />
                        Key Impact &amp; Recognition
                      </span>

                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {exp.achievements.map((ach, aIdx) => (
                          <li
                            key={aIdx}
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic',
                            }}
                          >
                            &ldquo;{ach}&rdquo;
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

