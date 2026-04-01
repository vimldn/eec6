'use client';

// Pure CSS ticker — no JS state, no hydration mismatch risk.
// Items duplicated so the loop is seamless.
const items = [
  'Local SEO', 'National SEO', 'Google Maps', 'Sixes Cricket',
  "Gentleman's Journal", '14 Years', 'Real Results', 'Makwana Solicitors',
  'FireStar Toys', 'Tidy Money', 'Total Shred', 'E-E-A-T',
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: 'var(--ink)', borderBottom: '3px solid var(--ink)' }}
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-0 whitespace-nowrap w-max">
        {/* Duplicate to create seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="px-8 text-white text-lg tracking-[0.18em] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--brand)', fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
