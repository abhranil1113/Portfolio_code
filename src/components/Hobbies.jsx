import React from 'react';
import SectionTitle from './SectionTitle';
import {
  IconFootball,
  IconCricket,
  IconTerminal,
  IconCompass,
  IconSparkles
} from './Icons';

function getHobbyIcon(iconName, size = 24) {
  switch (iconName) {
    case 'football':
      return <IconFootball size={size} />;
    case 'cricket':
      return <IconCricket size={size} />;
    case 'terminal':
    case 'coding':
      return <IconTerminal size={size} />;
    case 'compass':
    case 'travel':
      return <IconCompass size={size} />;
    default:
      return <IconSparkles size={size} />;
  }
}

export default function Hobbies({ hobbiesList }) {
  if (!hobbiesList || hobbiesList.length === 0) return null;

  return (
    <section id="hobbies" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Personal Pursuits"
          title="Hobbies &amp; Interests"
          subtitle="Athletic interests, competitive coding practice, and passion for travel and exploration."
        />

        <div
          className="hobbies-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {hobbiesList.map((hobby, idx) => (
            <div
              key={hobby.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                padding: 'var(--space-xl)',
                background: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.35rem',
                }}
              >
                {getHobbyIcon(hobby.icon, 24)}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {hobby.name}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
