'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 46,  suffix: '%', label: 'of all Google searches have local intent', desc: 'Nearly half of everyone using Google is looking for something nearby.' },
  { number: 92,  suffix: '%', label: 'of searchers choose businesses on page 1',  desc: "If you're not on page one, you're invisible to most customers." },
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
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setValue((1 - Math.pow(1 - p, 3)) * end);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  // Bebas Neue via v1-headline
  return (
    <span ref={ref} className="v1-headline leading-none inline-block" style={{ fontSize: 56, color: '#e85d26', minWidth: 80 }}>
      {formatted}{suffix}
    </span>
  );
}

export default function SEOStatsCards() {
  return (
    <div className="flex flex-col">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="flex gap-6 items-start px-8 py-6"
          style={{ borderBottom: i < stats.length - 1 ? '1px solid #dddddd' : 'none', background: '#ffffff' }}
        >
          <StatCounter end={stat.number} suffix={stat.suffix} decimals={stat.decimals} />
          <div className="pt-1">
            {/* Stat label — Barlow Condensed 700 */}
            <div className="v1-label mb-1" style={{ fontSize: 12, color: '#111110', letterSpacing: '0.1em' }}>
              {stat.label}
            </div>
            {/* Body — Barlow 400 */}
            <div className="v1-body" style={{ fontSize: 13, color: '#888888', lineHeight: 1.5 }}>
              {stat.desc}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
