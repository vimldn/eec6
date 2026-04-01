'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { end: 14,  prefix: '',  suffix: '',  label: 'Years in business' },
  { end: 200, prefix: '',  suffix: '+', label: 'Clients served' },
  { end: 4.2, prefix: '£', suffix: 'M', label: 'Revenue generated for clients', decimals: 1 },
  { end: 312, prefix: '',  suffix: '%', label: 'Average traffic increase' },
];

function Counter({ end, prefix = '', suffix = '', decimals = 0 }: {
  end: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const duration = 2000;
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
    <div ref={ref} style={{ fontFamily: 'var(--font-display)', fontSize: 72, color: 'var(--brand)', lineHeight: 1 }}>
      {prefix}{formatted}{suffix}
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section style={{ borderBottom: '3px solid var(--ink)' }}>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="px-10 py-16 text-center"
            style={{
              borderRight: i < stats.length - 1 ? '2px solid var(--rule)' : 'none',
              background: i % 2 === 0 ? '#fff' : 'var(--dark)',
            }}
          >
            <Counter
              end={stat.end}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
            />
            <div
              className="mt-3 uppercase tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-condensed)', fontSize: 12, fontWeight: 700, color: 'var(--mid)' }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
