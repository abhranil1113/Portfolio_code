import React from 'react';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={`section-header ${align === 'left' ? 'text-left' : ''} ${className} reveal`}
    >
      {tag && (
        <div>
          <span className="section-tag">
            <span className="tag-dot" aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
            {tag}
          </span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

