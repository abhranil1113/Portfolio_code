import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import Modal from './Modal';
import {
  IconSearch,
  IconClose,
  IconGithub,
  IconExternalLink,
  IconCheckCircle,
  IconLayers,
  IconCpu
} from './Icons';

export default function Projects({ projectsList }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract all unique categories dynamically
  const categories = useMemo(() => {
    if (!projectsList) return ['All'];
    const cats = new Set(projectsList.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [projectsList]);

  // Extract all unique technologies dynamically
  const allTechnologies = useMemo(() => {
    if (!projectsList) return ['All'];
    const techs = new Set();
    projectsList.forEach((p) => {
      if (Array.isArray(p.technologies)) {
        p.technologies.forEach((t) => techs.add(t));
      }
    });
    return ['All', ...Array.from(techs).sort()];
  }, [projectsList]);

  // Filter projects based on search query, category, and tech
  const filteredProjects = useMemo(() => {
    if (!projectsList) return [];

    return projectsList.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Tech match
      const matchesTech =
        selectedTech === 'All' ||
        (Array.isArray(project.technologies) &&
          project.technologies.includes(selectedTech));

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.problemStatement.toLowerCase().includes(query) ||
        (project.technologies &&
          project.technologies.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [projectsList, searchQuery, selectedCategory, selectedTech]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedTech !== 'All';

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('All');
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Engineering Works"
          title="Featured Projects"
          subtitle="Production-grade distributed systems, storage engines, vector search APIs, and developer tools."
        />

        {/* Filter and Search Controls Bar */}
        <div
          className="filter-bar reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-md) var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Search Input */}
          <div
            className="search-input-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '320px',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '12px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
              }}
            >
              <IconSearch size={18} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search systems, keywords, tech..."
              aria-label="Search projects by name or technology"
              style={{
                width: '100%',
                padding: '0.6rem 0.8rem 0.6rem 2.4rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-input)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color var(--transition-fast)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                style={{
                  position: 'absolute',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: 2,
                }}
              >
                <IconClose size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            className="filter-buttons-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Technology Dropdown Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label
              htmlFor="tech-filter"
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
              }}
            >
              Tech:
            </label>
            <select
              id="tech-filter"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              style={{
                padding: '0.45rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-input)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                cursor: 'pointer',
              }}
            >
              {allTechnologies.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {/* Clear All Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="btn btn-outline btn-sm"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.7rem',
                  color: 'var(--accent-rose)',
                  borderColor: 'rgba(244, 63, 94, 0.3)',
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Empty State when no results match */}
        {filteredProjects.length === 0 && (
          <div
            className="card"
            style={{
              textAlign: 'center',
              padding: 'var(--space-3xl) var(--space-lg)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--accent-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-md)',
              }}
            >
              <IconSearch size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              No engineering projects found
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 'var(--space-lg)' }}>
              No repositories or systems matched your current filter combinations.
            </p>
            <button onClick={clearAllFilters} className="btn btn-primary btn-sm">
              Clear All Filters
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 0,
                overflow: 'hidden',
              }}
            >
              {/* Project Image Header */}
              {project.image && (
                <div
                  style={{
                    width: '100%',
                    height: '190px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--bg-card-elevated)',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} Architecture Diagram`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Category Pill Tag */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span className="badge badge-accent" style={{ backdropFilter: 'blur(8px)' }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Status Pill Tag */}
                  {project.status && (
                    <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                      <span className="badge badge-success" style={{ backdropFilter: 'blur(8px)' }}>
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Card Body */}
              <div
                style={{
                  padding: 'var(--space-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <div style={{ marginBottom: 'var(--space-sm)' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {project.name}
                  </h3>
                  {project.duration && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-faint)',
                      }}
                    >
                      Duration: {project.duration}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Technical Highlights bullets */}
                {project.majorFeatures && project.majorFeatures.length > 0 && (
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    {project.majorFeatures.slice(0, 2).map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.45rem',
                          fontSize: '0.825rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <IconCheckCircle
                          size={14}
                          style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technology Badges */}
                {project.technologies && project.technologies.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginBottom: 'var(--space-lg)',
                      marginTop: 'auto',
                    }}
                  >
                    {project.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-md)',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-outline btn-sm"
                    aria-label={`View architecture details for ${project.name}`}
                  >
                    <IconLayers size={15} />
                    <span>Deep Dive</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      <IconGithub size={15} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      aria-label={`View live demonstration of ${project.name}`}
                    >
                      <span>Live Demo</span>
                      <IconExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Project Deep-Dive Modal */}
        <Modal
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject?.name || 'Project Deep Dive'}
          subtitle={activeModalProject ? `${activeModalProject.category} &bull; ${activeModalProject.status}` : ''}
          size="large"
        >
          {activeModalProject && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {/* Architecture banner */}
              {activeModalProject.image && (
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-card)',
                    maxHeight: '260px',
                  }}
                >
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Problem Statement */}
              <div>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--accent-rose)',
                    marginBottom: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Problem Statement &amp; Engineering Challenge</span>
                </h4>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {activeModalProject.problemStatement}
                </p>
              </div>

              {/* Solution Overview */}
              <div>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--accent-emerald)',
                    marginBottom: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Solution Overview &amp; Implementation</span>
                </h4>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {activeModalProject.solutionOverview}
                </p>
              </div>

              {/* Architecture Highlights */}
              {activeModalProject.architectureHighlights && (
                <div
                  style={{
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      marginBottom: '0.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <IconCpu size={16} />
                    <span>Architecture Highlights</span>
                  </h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {activeModalProject.architectureHighlights}
                  </p>
                </div>
              )}

              {/* Major Features list */}
              {activeModalProject.majorFeatures && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Key System Capabilities
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeModalProject.majorFeatures.map((f, idx) => (
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
                          size={15}
                          style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Technologies &amp; Libraries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {activeModalProject.technologies.map((t, idx) => (
                    <span key={idx} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 'var(--space-md)',
                }}
              >
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <IconGithub size={16} />
                    <span>View Repository on GitHub</span>
                  </a>
                )}
                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Open Live Demo</span>
                    <IconExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}

