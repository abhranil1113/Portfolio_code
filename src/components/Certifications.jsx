import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Modal from './Modal';
import {
  IconFileText,
  IconExternalLink,
  IconAward,
  IconLinkedin,
  IconInfosys,
  IconOracle,
  IconOpenCV
} from './Icons';

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

// Maps organization to brand icon
function getOrgIcon(orgName, orgType, size = 20) {
  const type = (orgType || orgName || '').toLowerCase();
  if (type.includes('infosys')) {
    return <IconInfosys size={size} />;
  }
  if (type.includes('oracle')) {
    return <IconOracle size={size} />;
  }
  if (type.includes('linkedin')) {
    return <IconLinkedin size={size} />;
  }
  if (type.includes('opencv')) {
    return <IconOpenCV size={size} />;
  }
  return <IconAward size={size} />;
}

// Returns subtle brand accent color
function getOrgColor(orgName, orgType) {
  const type = (orgType || orgName || '').toLowerCase();
  if (type.includes('infosys')) {
    return 'var(--accent-primary)';
  }
  if (type.includes('oracle')) {
    return 'var(--accent-rose)';
  }
  if (type.includes('linkedin')) {
    return 'var(--accent-secondary)';
  }
  if (type.includes('opencv')) {
    return 'var(--accent-emerald)';
  }
  return 'var(--accent-primary)';
}

export default function Certifications({ certificationsList }) {
  const [activeCert, setActiveCert] = useState(null);

  if (!certificationsList || certificationsList.length === 0) return null;

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          tag="Verified Credentials"
          title="Certifications"
          subtitle="Accredited certifications and industry credentials from Infosys, Oracle, and LinkedIn."
        />

        <div
          className="certifications-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {certificationsList.map((cert, idx) => {
            const orgColor = getOrgColor(cert.issuingOrganization, cert.organizationType);
            const certificateUrl = cert.certificateLink || cert.googleDriveUrl || cert.pdfPath;

            return (
              <div
                key={cert.id || idx}
                className="card reveal"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                  padding: 'var(--space-xl)',
                  background: 'var(--bg-card)',
                  transition: 'all var(--transition-normal)',
                }}
              >
                <div>
                  {/* Card Header: Organization Icon & Name */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: orgColor,
                        flexShrink: 0,
                      }}
                    >
                      {getOrgIcon(cert.issuingOrganization, cert.organizationType, 20)}
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--text-muted)',
                          display: 'block',
                          marginBottom: '0.1rem',
                        }}
                      >
                        Issuing Organization
                      </span>
                      <span
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {cert.issuingOrganization}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    {cert.name}
                  </h3>
                </div>

                {/* Action Buttons: View Certificate (Opens Google Drive in new tab) & Quick Preview */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-md)',
                    marginTop: 'var(--space-md)',
                  }}
                >
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                    }}
                    aria-label={`View ${cert.name} certificate on Google Drive`}
                  >
                    <IconFileText size={15} />
                    <span>View Certificate</span>
                    <IconExternalLink size={14} />
                  </a>

                  <button
                    onClick={() => setActiveCert(cert)}
                    className="btn btn-secondary btn-sm"
                    style={{
                      padding: '0.5rem 0.75rem',
                    }}
                    title="Quick preview in dialog"
                    aria-label={`Quick preview ${cert.name}`}
                  >
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Certificate Document Viewer */}
        <Modal
          isOpen={Boolean(activeCert)}
          onClose={() => setActiveCert(null)}
          title={activeCert?.name || 'Certificate Preview'}
          subtitle={activeCert ? `${activeCert.issuingOrganization} &bull; Verified Credential` : ''}
          size="pdf"
        >
          {activeCert && (
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
                <iframe
                  src={getEmbedUrl(activeCert.certificateLink || activeCert.googleDriveUrl || activeCert.pdfPath)}
                  title={`Certificate - ${activeCert.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  allow="autoplay"
                />
              </div>

              {/* Viewer Footer Actions */}
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
                  Google Drive Certificate Document &bull; Verified Credential
                </div>

                <a
                  href={activeCert.certificateLink || activeCert.googleDriveUrl || activeCert.pdfPath}
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
