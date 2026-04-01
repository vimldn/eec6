'use client';

const items = [
  'Local SEO', 'National SEO', 'Google Maps', 'Sixes Cricket',
  "Gentleman's Journal", '14 Years', 'Real Results', 'Makwana Solicitors',
  'FireStar Toys', 'Tidy Money', 'Total Shred', 'E-E-A-T',
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
            {/* Bebas Neue via v1-headline */}
            <span
              className="v1-headline px-8 text-white"
              style={{ fontSize: 18, letterSpacing: '0.2em' }}
            >
              {item}
            </span>
            {/* Ticker dot — orange per spec */}
            <span style={{ color: '#e85d26', fontSize: 9 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
