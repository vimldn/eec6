'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { end: 14,  prefix: '',  suffix: '',  label: 'Years in business' },
  { end: 200, prefix: '',  suffix: '+', label: 'Clients served' },
  { end: 4.2, prefix: '£', suffix: 'M', decimals: 1, label: 'Revenue generated for clients' },
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
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 2000, 1);
      setValue((1 - Math.pow(1 - p, 3)) * end);
      if (p < 1) requestAnimationFrame(tick);
    };
    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  // Bebas Neue via v1-headline class
  return (
    <div ref={ref} className="v1-headline leading-none" style={{ fontSize: 72, color: '#e85d26' }}>
      {prefix}{formatted}{suffix}
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section style={{ borderBottom: '3px solid #111110' }}>
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
              borderRight: i % 2 === 0 && i < stats.length - 1 ? '1px solid #dddddd' : 'none',
              background: i % 2 === 0 ? '#ffffff' : '#f7f5f0',
            }}
          >
            <Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
            {/* Stat label — Barlow Condensed 700 */}
            <div className="v1-label mt-3" style={{ fontSize: 12, color: '#888888', letterSpacing: '0.18em' }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
