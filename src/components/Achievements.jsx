import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Modal from './Modal';
import { IconAward, IconExternalLink, IconFileText } from './Icons';

// Converts Google Drive view link to direct embeddable preview link
function getEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
}

export default function Achievements({ achievementsList }) {
  const [activeDoc, setActiveDoc] = useState(null);

  if (!achievementsList || achievementsList.length === 0) return null;

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Research Achievement':
        return 'badge-purple';
      case 'Technical / Hackathon Participation':
        return 'badge-accent';
      case 'Sports / Extracurricular Activities':
        return 'badge-success';
      default:
        return '';
    }
  };

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Milestones &amp; Honors"
          title="Honors &amp; Achievements"
          subtitle="Peer-reviewed conference awards, technical hackathon participation, and collegiate sports representation."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {achievementsList.map((ach, idx) => (
            <div
              key={ach.id || idx}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Top row: Category and Date */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                <span className={`badge ${getCategoryBadgeClass(ach.category)}`}>
                  {ach.category}
                </span>
                {ach.date && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.775rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {ach.date}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.35,
                }}
              >
                {ach.title}
              </h3>

              {/* Organization */}
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {ach.organization}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-md)',
                  marginTop: '0.25rem',
                }}
              >
                {ach.description}
              </p>

              {/* Supporting document or external link if available */}
              {(ach.documentUrl || ach.link) && (
                <div
                  style={{
                    marginTop: 'auto',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {ach.documentUrl && (
                    <button
                      onClick={() => setActiveDoc(ach)}
                      className="btn btn-outline btn-sm"
                      aria-label={`View certificate document for ${ach.title}`}
                    >
                      <IconFileText size={15} />
                      <span>View Document</span>
                    </button>
                  )}

                  {(ach.link || ach.documentUrl) && (
                    <a
                      href={ach.link || ach.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.8rem' }}
                      aria-label="Open document in Google Drive"
                    >
                      <span>Google Drive</span>
                      <IconExternalLink size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal for Supporting Document Preview */}
        <Modal
          isOpen={Boolean(activeDoc)}
          onClose={() => setActiveDoc(null)}
          title={activeDoc?.title || 'Supporting Document'}
          subtitle={activeDoc ? `${activeDoc.organization} &bull; ${activeDoc.category}` : ''}
          size="pdf"
        >
          {activeDoc && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div
                style={{
                  height: '520px',
                  width: '100%',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-card)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <iframe
                  src={getEmbedUrl(activeDoc.documentUrl || activeDoc.link)}
                  title={`Document - ${activeDoc.title}`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  allow="autoplay"
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 'var(--space-md)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Rendered via verified Google Drive document preview.
                </div>
                <a
                  href={activeDoc.documentUrl || activeDoc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>Open in Google Drive</span>
                  <IconExternalLink size={15} />
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
