'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Stat counter — initialises to final value for SSR correctness ──
function StatCounter({ end, suffix = '' }: { end: number | string; suffix?: string }) {
  const isNumeric = typeof end === 'number';
  const [value, setValue] = useState(isNumeric ? end : 0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || !isNumeric || animated.current) return;
    animated.current = true;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * (end as number) * 10) / 10);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end, isNumeric]);

  const display = isNumeric
    ? Number.isInteger(end) ? Math.floor(value) : value.toFixed(1)
    : end;

  return (
    <div ref={ref} className="leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: 80, color: 'var(--brand)' }}>
      {display}{suffix}
    </div>
  );
}

const stats = [
  { end: 14,   suffix: '',  label: 'Years in business' },
  { end: '46', suffix: '%', label: 'Searches with local intent' },
  { end: '8',  suffix: '×', label: 'Higher close rate vs cold leads' },
];

// ── Animation variants ──
const tag = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const word = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const } },
});
const fade = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function HeroSection() {
  return (
    <section
      className="grid min-h-[88vh]"
      style={{
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '3px solid var(--ink)',
      }}
    >
      {/* ── LEFT — headline ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col justify-center overflow-hidden px-14 py-20"
        style={{
          background: 'var(--dark)',
          borderRight: '3px solid var(--ink)',
        }}
      >
        {/* Ghost word — floats behind content */}
        <div
          className="float ghost-word absolute select-none pointer-events-none"
          style={{
            bottom: -20,
            left: -10,
            fontSize: 'clamp(160px, 22vw, 280px)',
            opacity: 1,
            zIndex: 0,
          }}
        >
          SEO
        </div>

        {/* Tag */}
        <motion.div
          variants={tag}
          className="relative z-10 flex items-center gap-3 mb-6"
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
          }}
        >
          <span style={{ fontSize: 8 }}>▶</span>
          UK SEO Agency · Est. 2011
        </motion.div>

        {/* H1 — staggered words */}
        <h1
          className="relative z-10 leading-[0.92] tracking-[0.02em]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(72px, 10vw, 120px)',
          }}
        >
          <motion.span
            variants={word(0.1)}
            className="block"
            style={{ WebkitTextStroke: '2px var(--ink)', color: 'transparent' }}
          >
            GET
          </motion.span>
          <motion.span
            variants={word(0.22)}
            className="block"
            style={{ color: 'var(--brand)' }}
          >
            FOUND.
          </motion.span>
          <motion.span
            variants={word(0.34)}
            className="block"
          >
            GET PAID.
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          variants={fade(0.5)}
          className="relative z-10 leading-relaxed max-w-md mt-8 mb-10"
          style={{ fontSize: 16, color: '#666', fontFamily: 'var(--font-body)' }}
        >
          We help UK businesses dominate search. Local SEO and national campaigns — backed by 14 years of real, measurable results.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fade(0.62)} className="relative z-10 flex flex-wrap gap-4">
          <Link href="/contact/" className="btn-fill">
            Free SEO Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/case-studies/" className="btn-out">
            View Case Studies
          </Link>
        </motion.div>
      </motion.div>

      {/* ── RIGHT — stats ── */}
      <div
        className="flex flex-col justify-between px-14 py-20"
        style={{ background: '#fff' }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={i < stats.length - 1 ? 'pb-10' : ''}
            style={i < stats.length - 1 ? { borderBottom: '1px solid var(--rule)' } : {}}
          >
            <StatCounter end={typeof stat.end === 'number' ? stat.end : parseInt(stat.end)} suffix={stat.suffix} />
            <div
              className="mt-2 uppercase tracking-[0.15em]"
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--mid)',
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
