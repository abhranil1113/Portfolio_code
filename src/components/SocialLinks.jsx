import React from 'react';
import SectionTitle from './SectionTitle';
import {
  IconGithub,
  IconLinkedin,
  IconLeetCode,
  IconHackerRank,
  IconGeeksforGeeks,
  IconCode360,
  IconExternalLink
} from './Icons';

function getPlatformIcon(platform, size = 26) {
  switch (platform.toLowerCase()) {
    case 'github':
      return <IconGithub size={size} />;
    case 'linkedin':
      return <IconLinkedin size={size} />;
    case 'leetcode':
      return <IconLeetCode size={size} />;
    case 'hackerrank':
      return <IconHackerRank size={size} />;
    case 'geeksforgeeks':
      return <IconGeeksforGeeks size={size} />;
    case 'code360':
      return <IconCode360 size={size} />;
    default:
      return <IconExternalLink size={size} />;
  }
}

export default function SocialLinks({ profilesList }) {
  if (!profilesList || profilesList.length === 0) return null;

  // Filter out profiles without username or url
  const validProfiles = profilesList.filter((p) => p.username && p.profileUrl);

  if (validProfiles.length === 0) return null;

  return (
    <section id="social-profiles" className="section">
      <div className="container">
        <SectionTitle
          tag="Engineering Networks"
          title="Professional &amp; Coding Profiles"
          subtitle="Explore verified algorithmic submissions, open-source repositories, and professional networks."
        />

        <div
          className="social-profiles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {validProfiles.map((item, idx) => (
            <div
              key={item.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {getPlatformIcon(item.platform, 24)}
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.platform}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.825rem',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      @{item.username}
                    </span>
                  </div>
                </div>

                {item.description && (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 'var(--space-sm)',
                }}
              >
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  aria-label={`Visit ${item.platform} profile of ${item.username}`}
                >
                  <span>Visit Profile</span>
                  <IconExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

