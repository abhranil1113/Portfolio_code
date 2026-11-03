import React from 'react';
import SectionTitle from './SectionTitle';
import { IconCheckCircle, IconLayers, IconCpu, IconDatabase, IconServer } from './Icons';

export default function About({ aboutData }) {
  const {
    summary,
    careerObjective,
    currentRole,
    experience,
    primaryFocus,
    areasOfInterest,
    metrics
  } = aboutData;

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Engineering Profile"
          title="About Me"
          subtitle="Architectural principles, engineering focus, and core technical philosophy."
        />

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Narrative & Focus Cards */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div className="card">
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconServer size={20} style={{ color: 'var(--accent-primary)' }} />
                <span>Professional Summary</span>
              </h3>
              <p style={{ fontSize: '1.025rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                {summary}
              </p>
            </div>

            <div className="card">
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconCpu size={20} style={{ color: 'var(--accent-secondary)' }} />
                <span>Career Objective &amp; Philosophy</span>
              </h3>
              <p style={{ fontSize: '1.025rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                {careerObjective}
              </p>
            </div>
          </div>

          {/* Core Roles & Areas of Interest */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Quick Metadata Card */}
            <div className="card">
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-md)',
                  color: 'var(--text-primary)',
                }}
              >
                Current Focus &amp; Experience
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.775rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Current Role
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {currentRole}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.775rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Experience Scope
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {experience}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.775rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Primary Technical Domain
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                    {primaryFocus}
                  </span>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            {areasOfInterest && areasOfInterest.length > 0 && (
              <div className="card">
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: 'var(--space-md)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <IconLayers size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Key Architectural Interests</span>
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {areasOfInterest.map((interest, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <IconCheckCircle
                        size={16}
                        style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }}
                      />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Quantifiable Engineering Metrics */}
        {metrics && metrics.length > 0 && (
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-lg) var(--space-md)',
                  background: 'var(--bg-card)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

