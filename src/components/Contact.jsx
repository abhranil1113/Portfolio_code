import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconLinkedin,
  IconSend,
  IconCheckCircle,
  IconClose,
  IconExternalLink
} from './Icons';

export default function Contact({ contactData, personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@example.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    if (status === 'submitting') return; // Prevent duplicate submissions

    setStatus('submitting');
    setFeedbackMessage('');

    // Check if an external form submission endpoint is configured in portfolioData.js
    const endpoint = contactData?.formSubmitEndpoint;

    if (endpoint && endpoint.trim().length > 0) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage(
            'Your message was delivered successfully! I will respond to your inquiry shortly.'
          );
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
          setFeedbackMessage(
            'Transmission failed. Please use direct email to ensure delivery.'
          );
        }
      } catch (err) {
        setStatus('error');
        setFeedbackMessage(
          'Network connection error. Please use direct email or LinkedIn.'
        );
      }
    } else {
      // Graceful fallback: If no third-party API is configured, construct standard mailto: URI
      const targetEmail = contactData?.email || personalInfo?.email;
      const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject.trim()}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      )}`;

      window.location.href = mailtoUrl;

      setStatus('idle');
      setFeedbackMessage(
        'Opening your default email client with your message pre-populated. (To configure direct in-browser sending, set formSubmitEndpoint in src/data/portfolioData.js).'
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          tag="Initiate Discussion"
          title="Get In Touch"
          subtitle="Interested in collaborating on distributed systems, discussing full-time opportunities, or exploring engineering ideas? Send a message."
        />

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contacts & Availability */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div className="card">
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--text-primary)',
                }}
              >
                Direct Communication
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {contactData?.availabilityNote ||
                  'Open for backend engineering positions, distributed systems roles, and technical consulting.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {/* Email */}
                {contactData?.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        flexShrink: 0,
                      }}
                    >
                      <IconMail size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        Email
                      </span>
                      <a
                        href={`mailto:${contactData.email}`}
                        style={{ fontSize: '0.95rem', fontWeight: 600 }}
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {contactData?.phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-emerald)',
                        flexShrink: 0,
                      }}
                    >
                      <IconPhone size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        Phone
                      </span>
                      <a href={`tel:${contactData.phone}`} style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                        {contactData.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                {contactData?.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)',
                        flexShrink: 0,
                      }}
                    >
                      <IconMapPin size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        Location
                      </span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {contactData.location}
                      </span>
                    </div>
                  </div>
                )}

                {/* LinkedIn */}
                {contactData?.linkedin && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-secondary)',
                        flexShrink: 0,
                      }}
                    >
                      <IconLinkedin size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        LinkedIn
                      </span>
                      <a
                        href={contactData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.95rem', fontWeight: 600 }}
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recruiter Quick Note */}
            <div
              className="card"
              style={{
                borderLeft: '4px solid var(--accent-primary)',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                Recruiter &amp; Engineering Leads Note
              </h4>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                Currently authorized to work full-time. Open to remote or hybrid engineering opportunities across India and globally.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card reveal-right">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: 'var(--space-md)',
                color: 'var(--text-primary)',
              }}
            >
              Send an Encrypted Message
            </h3>

            {/* Feedback Banner */}
            {feedbackMessage && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--space-md)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  background:
                    status === 'success'
                      ? 'rgba(52, 211, 153, 0.12)'
                      : status === 'error'
                      ? 'rgba(244, 63, 94, 0.12)'
                      : 'rgba(56, 189, 248, 0.12)',
                  border:
                    status === 'success'
                      ? '1px solid rgba(52, 211, 153, 0.3)'
                      : status === 'error'
                      ? '1px solid rgba(244, 63, 94, 0.3)'
                      : '1px solid rgba(56, 189, 248, 0.3)',
                  color:
                    status === 'success'
                      ? 'var(--accent-emerald)'
                      : status === 'error'
                      ? 'var(--accent-rose)'
                      : 'var(--accent-primary)',
                }}
              >
                <IconCheckCircle size={18} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name Field */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Mercer"
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: errors.name ? '1px solid var(--accent-rose)' : '1px solid var(--border-input)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.925rem',
                    outline: 'none',
                  }}
                />
                {errors.name && (
                  <span style={{ fontSize: '0.775rem', color: 'var(--accent-rose)', marginTop: '0.25rem', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Address Field */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Email Address <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex.mercer@company.com"
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: errors.email ? '1px solid var(--accent-rose)' : '1px solid var(--border-input)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.925rem',
                    outline: 'none',
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.775rem', color: 'var(--accent-rose)', marginTop: '0.25rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Subject <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Backend Role Inquiry / System Architecture Chat"
                  aria-required="true"
                  aria-invalid={Boolean(errors.subject)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: errors.subject ? '1px solid var(--accent-rose)' : '1px solid var(--border-input)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.925rem',
                    outline: 'none',
                  }}
                />
                {errors.subject && (
                  <span style={{ fontSize: '0.775rem', color: 'var(--accent-rose)', marginTop: '0.25rem', display: 'block' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Message <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your project details, opportunity description, or questions..."
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: errors.message ? '1px solid var(--accent-rose)' : '1px solid var(--border-input)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.925rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.775rem', color: 'var(--accent-rose)', marginTop: '0.25rem', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '1rem',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'submitting' ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <IconSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

