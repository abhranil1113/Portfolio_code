import React from 'react';
import SectionTitle from './SectionTitle';
import {
  IconServer,
  IconDatabase,
  IconTerminal,
  IconCode,
  IconLayers,
  IconCpu,
  IconShield,
  IconGit,
  IconFileText,
  IconRefresh
} from './Icons';

// Helper to map icon string to icon component
function getSkillIcon(iconName, size = 18) {
  switch (iconName) {
    case 'server':
      return <IconServer size={size} />;
    case 'database':
      return <IconDatabase size={size} />;
    case 'terminal':
      return <IconTerminal size={size} />;
    case 'cpu':
      return <IconCpu size={size} />;
    case 'layers':
      return <IconLayers size={size} />;
    case 'shield':
      return <IconShield size={size} />;
    case 'git':
      return <IconGit size={size} />;
    case 'file-text':
      return <IconFileText size={size} />;
    case 'refresh':
      return <IconRefresh size={size} />;
    default:
      return <IconCode size={size} />;
  }
}

// Helper to style proficiency labels cleanly
function getProficiencyBadge(proficiency) {
  switch (proficiency) {
    case 'Advanced':
      return <span className="badge badge-accent">Advanced</span>;
    case 'Proficient':
      return <span className="badge badge-success">Proficient</span>;
    case 'Working Knowledge':
      return <span className="badge badge-purple">Working Knowledge</span>;
    case 'Familiar':
    default:
      return <span className="badge">Familiar</span>;
  }
}

export default function Skills({ technicalSkills }) {
  if (!technicalSkills) return null;

  // Category visual mapping for all actual skill categories
  const categoryMetadata = {
    languages: {
      title: 'Programming Languages',
      description: 'Core languages for high-performance backend, concurrent services, and algorithms.',
      icon: <IconCode size={22} style={{ color: 'var(--accent-primary)' }} />,
    },
    backend: {
      title: 'Backend Development & APIs',
      description: 'High-throughput web frameworks, REST APIs, and real-time Socket.IO systems.',
      icon: <IconServer size={22} style={{ color: 'var(--accent-cyan)' }} />,
    },
    databases: {
      title: 'Databases & Storage',
      description: 'Relational, document, and transactional database management systems.',
      icon: <IconDatabase size={22} style={{ color: 'var(--accent-emerald)' }} />,
    },
    orm: {
      title: 'ORM & Database Migration',
      description: 'Object-relational mappers and schema versioning engines for Go, Python, and Node.',
      icon: <IconRefresh size={22} style={{ color: 'var(--accent-secondary)' }} />,
    },
    apiDev: {
      title: 'API Design & Documentation',
      description: 'OpenAPI/Swagger documentation, endpoint validation, and automated testing.',
      icon: <IconFileText size={22} style={{ color: 'var(--accent-amber)' }} />,
    },
    messaging: {
      title: 'Messaging & Caching',
      description: 'In-memory caching layers, key-value stores, and distributed event messaging.',
      icon: <IconCpu size={22} style={{ color: 'var(--accent-rose)' }} />,
    },
    aiMl: {
      title: 'AI, Machine Learning & Data Science',
      description: 'Ensemble clustering algorithms, scikit-learn models, data preprocessing, and visualization.',
      icon: <IconLayers size={22} style={{ color: 'var(--accent-primary)' }} />,
    },
    tools: {
      title: 'Developer Tools & Platforms',
      description: 'Version control, API clients, testing environments, and interactive notebooks.',
      icon: <IconTerminal size={22} style={{ color: 'var(--accent-cyan)' }} />,
    },
  };

  const categories = Object.keys(technicalSkills);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          tag="Technical Competence"
          title="Technical Skills"
          subtitle="Categorized engineering skills, programming languages, backend frameworks, and data platforms."
        />

        <div
          className="skills-category-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {categories.map((catKey) => {
            const skillsList = technicalSkills[catKey];
            if (!skillsList || skillsList.length === 0) return null;

            const meta = categoryMetadata[catKey] || {
              title: catKey.charAt(0).toUpperCase() + catKey.slice(1),
              description: 'Technical competencies and tools.',
              icon: <IconCode size={22} style={{ color: 'var(--accent-primary)' }} />,
            };

            return (
              <div key={catKey} className="card reveal">
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {meta.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {meta.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {meta.description}
                    </p>
                  </div>
                </div>

                {/* Skills List Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                    gap: '0.65rem',
                    marginTop: 'var(--space-md)',
                  }}
                >
                  {skillsList.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '0.7rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        transition: 'all var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-card-hover)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                        <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                          {getSkillIcon(skill.icon, 16)}
                        </span>
                        <span
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>

                      {/* Proficiency pill */}
                      {skill.proficiency && (
                        <div title={`Proficiency level: ${skill.proficiency}`}>
                          {getProficiencyBadge(skill.proficiency)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
