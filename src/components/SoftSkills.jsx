import React from 'react';
import SectionTitle from './SectionTitle';
import {
  IconCpu,
  IconShield,
  IconCheckCircle,
  IconLayers,
  IconRefresh,
  IconFileText
} from './Icons';

export default function SoftSkills({ softSkillsList }) {
  if (!softSkillsList || softSkillsList.length === 0) return null;

  const iconPalette = [
    <IconCpu size={22} style={{ color: 'var(--accent-primary)' }} />,
    <IconLayers size={22} style={{ color: 'var(--accent-secondary)' }} />,
    <IconFileText size={22} style={{ color: 'var(--accent-cyan)' }} />,
    <IconShield size={22} style={{ color: 'var(--accent-emerald)' }} />,
    <IconRefresh size={22} style={{ color: 'var(--accent-amber)' }} />,
    <IconCheckCircle size={22} style={{ color: 'var(--accent-rose)' }} />,
  ];

  return (
    <section id="soft-skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Engineering Execution"
          title="Professional &amp; Soft Skills"
          subtitle="Collaborative practices, architectural judgment, and high-velocity engineering mindset."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {softSkillsList.map((skill, idx) => (
            <div
              key={skill.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-sm)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {iconPalette[idx % iconPalette.length]}
                </div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {skill.name}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginTop: '0.25rem',
                }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

