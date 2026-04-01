'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Spec colours
const C = {
  bg:     '#f7f5f0',  // page background
  white:  '#ffffff',  // right panel
  ink:    '#111110',  // borders, headings
  orange: '#e85d26',  // stats, tag, CTA hover
  mid:    '#888888',  // stat labels
  rule:   '#dddddd',  // dividers between stats
  ghost:  '#ece8e0',  // hero ghost word ONLY
};

function StatCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue((1 - Math.pow(1 - p, 3)) * end);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const display = Number.isInteger(end) ? Math.floor(value) : value.toFixed(1);

  return (
    // v1-headline applies Bebas Neue 400 via stylesheet class — no inline fontFamily
    <div ref={ref} className="v1-headline leading-none" style={{ fontSize: 88, color: C.orange }}>
      {display}{suffix}
    </div>
  );
}

const stats = [
  { end: 14,  suffix: '',  label: 'Years in business' },
  { end: 46,  suffix: '%', label: 'Searches with local intent' },
  { end: 8,   suffix: '×', label: 'Higher close rate vs cold leads' },
];

const tagV  = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } };
const wordV = (d: number) => ({ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] as const } } });
const fadeV = (d: number) => ({ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } } });

export default function HeroSection() {
  return (
    <section
      className="grid min-h-[88vh]"
      style={{ gridTemplateColumns: '1fr 1fr', borderBottom: `3px solid ${C.ink}` }}
    >
      {/* ── LEFT ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col justify-center overflow-hidden px-14 py-20"
        style={{ background: C.bg, borderRight: `3px solid ${C.ink}` }}
      >
        {/* Ghost word — Bebas Neue, spec colour #ece8e0 */}
        <div
          className="v1-headline float absolute select-none pointer-events-none"
          style={{
            bottom: -20, left: -10,
            fontSize: 'clamp(160px, 22vw, 280px)',
            color: C.ghost,
            zIndex: 0,
          }}
        >
          SEO
        </div>

        {/* Eyebrow tag — Barlow Condensed 700 */}
        <motion.div
          variants={tagV}
          className="v1-label relative z-10 flex items-center gap-3 mb-6"
          style={{ fontSize: 11, color: C.orange, letterSpacing: '0.3em' }}
        >
          <span style={{ fontSize: 7 }}>▶</span>
          UK SEO Agency · Est. 2011
        </motion.div>

        {/* H1 — Bebas Neue via v1-headline class (NOT inline fontFamily) */}
        <h1
          className="v1-headline relative z-10"
          style={{ fontSize: 'clamp(72px, 10vw, 120px)' }}
        >
          <motion.span variants={wordV(0.1)} className="block text-outline">
            GET
          </motion.span>
          <motion.span variants={wordV(0.22)} className="block" style={{ color: C.orange }}>
            FOUND.
          </motion.span>
          <motion.span variants={wordV(0.34)} className="block" style={{ color: C.ink }}>
            GET PAID.
          </motion.span>
        </h1>

        {/* Body copy — Barlow 400 */}
        <motion.p
          variants={fadeV(0.5)}
          className="v1-body relative z-10 max-w-md mt-8 mb-10 leading-relaxed"
          style={{ fontSize: 16, color: C.mid }}
        >
          We help UK businesses dominate search. Local SEO and national campaigns — backed by 14 years of real, measurable results.
        </motion.p>

        {/* CTAs — Barlow Condensed 700 via .btn-fill / .btn-out */}
        <motion.div variants={fadeV(0.62)} className="relative z-10 flex flex-wrap gap-4">
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
        style={{ background: C.white }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={i < stats.length - 1 ? 'pb-10' : ''}
            style={i < stats.length - 1 ? { borderBottom: `1px solid ${C.rule}` } : {}}
          >
            <StatCounter end={stat.end} suffix={stat.suffix} />
            {/* Stat label — Barlow Condensed 700 */}
            <div
              className="v1-label mt-2"
              style={{ fontSize: 12, color: C.mid, letterSpacing: '0.18em' }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
