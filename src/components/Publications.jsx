import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Modal from './Modal';
import {
  IconBookOpen,
  IconExternalLink,
  IconGithub,
  IconChevronDown,
  IconChevronUp
} from './Icons';

export default function Publications({ publicationsList }) {
  const [activePublication, setActivePublication] = useState(null);
  const [expandedAbstractIds, setExpandedAbstractIds] = useState([]);

  if (!publicationsList || publicationsList.length === 0) return null;

  const toggleAbstract = (id) => {
    setExpandedAbstractIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="publications" className="section">
      <div className="container">
        <SectionTitle
          tag="Applied Research"
          title="Research &amp; Publications"
          subtitle="Peer-reviewed scholarly publications, conference proceedings, and distributed systems research."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {publicationsList.map((pub, idx) => {
            const isAbstractExpanded = expandedAbstractIds.includes(pub.id);

            return (
              <div key={pub.id || idx} className="card reveal">
                {/* Header row */}
                <div
                  className="publication-header"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  <div style={{ maxWidth: '850px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-purple">
                        {pub.researchArea}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {pub.publicationDate}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.35,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {pub.title}
                    </h3>

                    <div style={{ fontSize: '0.925rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      {pub.publicationName}
                    </div>
                  </div>

                  {/* DOI badge */}
                  {pub.doi && (
                    <div>
                      <a
                        href={pub.officialLink || `https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge badge-accent"
                        style={{ fontFamily: 'var(--font-mono)', textDecoration: 'none' }}
                        title="Open DOI resolver"
                      >
                        DOI: {pub.doi}
                        <IconExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Authors */}
                {pub.authors && pub.authors.length > 0 && (
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      marginBottom: 'var(--space-sm)',
                      fontStyle: 'italic',
                    }}
                  >
                    Authors: {pub.authors.join(', ')}
                  </div>
                )}

                {/* Abstract Text */}
                {pub.abstract && (
                  <div style={{ margin: 'var(--space-sm) 0' }}>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {isAbstractExpanded
                        ? pub.abstract
                        : `${pub.abstract.slice(0, 220)}...`}
                    </p>

                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        marginTop: '0.4rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      {isAbstractExpanded ? (
                        <>
                          <span>Collapse Abstract</span>
                          <IconChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          <span>Read Full Abstract</span>
                          <IconChevronDown size={14} />
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Methodologies Badges */}
                {pub.methodologies && pub.methodologies.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      margin: 'var(--space-md) 0',
                    }}
                  >
                    {pub.methodologies.map((method, mIdx) => (
                      <span key={mIdx} className="badge">
                        {method}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-md)',
                    marginTop: 'var(--space-sm)',
                  }}
                >
                  <button
                    onClick={() => setActivePublication(pub)}
                    className="btn btn-outline btn-sm"
                  >
                    <IconBookOpen size={16} />
                    <span>View Full Details</span>
                  </button>

                  {pub.officialLink && (
                    <a
                      href={pub.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Official Publication</span>
                      <IconExternalLink size={14} />
                    </a>
                  )}

                  {pub.githubRepo && (
                    <a
                      href={pub.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <IconGithub size={16} />
                      <span>Benchmark Code</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Full Publication Details */}
        <Modal
          isOpen={Boolean(activePublication)}
          onClose={() => setActivePublication(null)}
          title={activePublication?.title || 'Publication Details'}
          subtitle={activePublication ? `${activePublication.publicationName} &bull; ${activePublication.publicationDate}` : ''}
          size="large"
        >
          {activePublication && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Research Area</span>
                <span className="badge badge-purple">{activePublication.researchArea}</span>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Contributing Authors</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {activePublication.authors.join(', ')}
                </span>
              </div>

              {activePublication.doi && (
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Digital Object Identifier (DOI)</span>
                  <a
                    href={activePublication.officialLink || `https://doi.org/${activePublication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-primary)' }}
                  >
                    {activePublication.doi}
                  </a>
                </div>
              )}

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Complete Abstract
                </span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {activePublication.abstract}
                </p>
              </div>

              {activePublication.methodologies && (
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    Methodologies &amp; Technologies
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {activePublication.methodologies.map((m, idx) => (
                      <span key={idx} className="badge">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 'var(--space-md)',
                  marginTop: 'var(--space-sm)',
                }}
              >
                {activePublication.officialLink && (
                  <a
                    href={activePublication.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Read on Publisher Portal</span>
                    <IconExternalLink size={15} />
                  </a>
                )}
                {activePublication.githubRepo && (
                  <a
                    href={activePublication.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <IconGithub size={16} />
                    <span>View Repository</span>
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

