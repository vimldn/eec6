'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const C = {
  bg: '#f7f5f0', white: '#ffffff', ink: '#111110',
  orange: '#e85d26', mid: '#888888', rule: '#dddddd', ghost: '#ece8e0',
};

function StatCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setValue((1 - Math.pow(1 - p, 3)) * end);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  return (
    <div ref={ref} className="v1-headline leading-none" style={{ fontSize: 'clamp(56px, 12vw, 88px)', color: C.orange }}>
      {Number.isInteger(end) ? Math.floor(value) : value.toFixed(1)}{suffix}
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
    <>
      {/* ── Mobile & desktop styles injected once ── */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 88vh;
          border-bottom: 3px solid #111110;
        }
        .hero-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 48px;
          background: #ffffff;
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-right {
            display: none; /* stats hidden on mobile — shown in stat strip below */
          }
          .hero-left-inner {
            padding: 40px 24px !important;
          }
        }
      `}</style>

      <section className="hero-grid">
        {/* ── LEFT — headline ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative flex flex-col justify-center overflow-hidden"
          style={{ background: C.bg, borderRight: `3px solid ${C.ink}` }}
        >
          {/* Ghost word */}
          <div
            className="v1-headline float absolute select-none pointer-events-none"
            style={{ bottom: -20, left: -10, fontSize: 'clamp(120px, 22vw, 280px)', color: C.ghost, zIndex: 0 }}
          >
            SEO
          </div>

          <div className="hero-left-inner relative z-10" style={{ padding: '52px 48px' }}>
            {/* Eyebrow */}
            <motion.div
              variants={tagV}
              className="v1-label flex items-center gap-3 mb-6"
              style={{ fontSize: 11, color: C.orange, letterSpacing: '0.3em' }}
            >
              <span style={{ fontSize: 7 }}>▶</span>
              UK SEO Agency · Est. 2011
            </motion.div>

            {/* H1 */}
            <h1 className="v1-headline" style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}>
              <motion.span variants={wordV(0.1)} className="block text-outline">GET</motion.span>
              <motion.span variants={wordV(0.22)} className="block" style={{ color: C.orange }}>FOUND.</motion.span>
              <motion.span variants={wordV(0.34)} className="block" style={{ color: C.ink }}>GET PAID.</motion.span>
            </h1>

            {/* Body */}
            <motion.p
              variants={fadeV(0.5)}
              className="v1-body leading-relaxed max-w-md mt-8 mb-10"
              style={{ fontSize: 15, color: C.mid }}
            >
              We help UK businesses dominate search. Local SEO and national campaigns — backed by 14 years of real, measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeV(0.62)} className="flex flex-wrap gap-4">
              <Link href="/contact/" className="btn-fill">
                Free SEO Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/case-studies/" className="btn-out">View Case Studies</Link>
            </motion.div>

            {/* Mobile-only stats strip — shown below CTAs on small screens */}
            <div className="mt-10 md:hidden" style={{ borderTop: `2px solid ${C.ink}`, paddingTop: 28 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ paddingRight: 16, borderRight: i < 2 ? `1px solid ${C.rule}` : 'none', paddingLeft: i > 0 ? 16 : 0 }}>
                    <StatCounter end={stat.end} suffix={stat.suffix} />
                    <div className="v1-label mt-1" style={{ fontSize: 9, color: C.mid, letterSpacing: '0.12em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT — stats (desktop only, hidden on mobile via CSS) ── */}
        <div className="hero-right">
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
              <div className="v1-label mt-2" style={{ fontSize: 12, color: C.mid, letterSpacing: '0.18em' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
