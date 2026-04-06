'use client';

const items = [
  'Local SEO', 'National SEO', 'Google Maps', 'Technical SEO',
  'Lead Generation', '14 Years', 'Real Results', 'Programmatic SEO',
  'E-E-A-T', 'Link Building', 'Google Business Profile', 'SEO Audits',
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: '#111110', borderBottom: '3px solid #111110' }}
      aria-hidden="true"
    >
      <div className="ticker-track flex whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="v1-headline px-8"
              style={{ fontSize: 18, letterSpacing: '0.2em', color: '#e85d26' }}
            >
              {item}
            </span>
            <span style={{ color: '#888888', fontSize: 9 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
