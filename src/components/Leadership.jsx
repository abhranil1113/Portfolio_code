import React from 'react';
import SectionTitle from './SectionTitle';
import { IconCheckCircle, IconCompass, IconAward } from './Icons';

export default function Leadership({ leadershipList }) {
  if (!leadershipList || leadershipList.length === 0) return null;

  return (
    <section id="leadership" className="section">
      <div className="container">
        <SectionTitle
          tag="Community &amp; Teamwork"
          title="Leadership &amp; Volunteering"
          subtitle="Community involvement, educational tutoring, social drives, and athletic team representation."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {leadershipList.map((item, idx) => (
            <div
              key={item.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <IconCompass size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {item.organization}
                  </span>
                </div>
                <span className="badge badge-accent">{item.period}</span>
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-md)',
                }}
              >
                {item.description}
              </p>

              {item.activities && item.activities.length > 0 && (
                <div
                  style={{
                    marginTop: 'auto',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-md)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-faint)',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Key Initiatives &amp; Involvement:
                  </span>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {item.activities.map((act, aIdx) => (
                      <li
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                        }}
                      >
                        <IconCheckCircle
                          size={15}
                          style={{
                            color: 'var(--accent-emerald)',
                            marginTop: '0.2rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

