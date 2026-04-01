'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 46, suffix: '%', label: 'of all Google searches have local intent', desc: 'Nearly half of everyone using Google is looking for something nearby.' },
  { number: 92, suffix: '%', label: 'of searchers choose businesses on page 1',  desc: "If you're not on page one, you're invisible to most customers." },
  { number: 5.7, suffix: 'x', decimals: 1, label: 'higher close rate than outbound leads', desc: "People searching for you are ready to buy. Cold leads aren't." },
];

function StatCounter({ end, suffix, decimals = 0 }: { end: number; suffix: string; decimals?: number }) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(eased * end);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: 'var(--brand)', lineHeight: 1, display: 'inline-block', minWidth: 80 }}>
      {formatted}{suffix}
    </span>
  );
}

export default function SEOStatsCards() {
  return (
    <div className="flex flex-col gap-0">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="flex gap-6 items-start px-8 py-6"
          style={{ borderBottom: i < stats.length - 1 ? '1px solid var(--rule)' : 'none', background: '#fff' }}
        >
          <StatCounter end={stat.number} suffix={stat.suffix} decimals={stat.decimals} />
          <div className="pt-1">
            <div
              style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)', marginBottom: 4 }}
            >
              {stat.label}
            </div>
            <div style={{ fontSize: 13, color: 'var(--mid)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
              {stat.desc}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
