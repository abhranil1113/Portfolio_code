import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Modal from './Modal';
import {
  IconBriefcase,
  IconDownload,
  IconExternalLink,
  IconFileText,
  IconCheckCircle
} from './Icons';

export default function Internships({ internshipsList }) {
  const [activeCertificate, setActiveCertificate] = useState(null);

  if (!internshipsList || internshipsList.length === 0) return null;

  return (
    <section id="internships" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Industry Programs"
          title="Virtual Internships &amp; Simulations"
          subtitle="Real-world industry engineering simulations and hands-on corporate case studies."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {internshipsList.map((item, idx) => (
            <div key={item.id || idx} className="card reveal">
              {/* Header */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span className="badge badge-accent">
                    {item.duration}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.completionDate}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.domain}
                </h3>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  {item.organization}
                </h4>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {item.description}
              </p>

              {/* Skills Learned Badges */}
              {item.skillsLearned && item.skillsLearned.length > 0 && (
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Skills Demonstrated:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {item.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons: View Certificate, Download Certificate */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 'var(--space-md)',
                  marginTop: 'auto',
                }}
              >
                {item.certificatePdf && (
                  <button
                    onClick={() => setActiveCertificate(item)}
                    className="btn btn-outline btn-sm"
                    aria-label={`View certificate for ${item.domain}`}
                  >
                    <IconFileText size={16} />
                    <span>View Certificate</span>
                  </button>
                )}

                {item.certificatePdf && (
                  <a
                    href={item.certificatePdf}
                    download={`${item.organization.replace(/\s+/g, '_')}_Certificate.pdf`}
                    className="btn btn-secondary btn-sm"
                    aria-label={`Download certificate for ${item.domain}`}
                  >
                    <IconDownload size={16} />
                    <span>Download</span>
                  </a>
                )}

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{
                      marginLeft: 'auto',
                      padding: '0.45rem',
                      color: 'var(--text-muted)',
                    }}
                    title="Verify program details"
                    aria-label="Verify program details"
                  >
                    <IconExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate PDF Modal Viewer */}
        <Modal
          isOpen={Boolean(activeCertificate)}
          onClose={() => setActiveCertificate(null)}
          title={activeCertificate?.domain || 'Certificate Preview'}
          subtitle={activeCertificate ? `${activeCertificate.organization} &bull; Completed ${activeCertificate.completionDate}` : ''}
          size="pdf"
        >
          {activeCertificate && (
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
                  position: 'relative',
                }}
              >
                {/* Native browser iframe PDF viewer */}
                <iframe
                  src={activeCertificate.certificatePdf}
                  title={`Certificate - ${activeCertificate.domain}`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Action Toolbar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 'var(--space-md)',
                }}
              >
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Rendering via native PDF engine. If preview is not displayed by your browser, download the document directly.
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={activeCertificate.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <IconExternalLink size={15} />
                    <span>Open in New Tab</span>
                  </a>

                  <a
                    href={activeCertificate.certificatePdf}
                    download={`${activeCertificate.organization}_Certificate.pdf`}
                    className="btn btn-primary btn-sm"
                  >
                    <IconDownload size={15} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}

