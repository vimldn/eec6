'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  end: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: Stat[] = [
  { end: 14,  suffix: '',  label: 'Years in business' },
  { end: 200, suffix: '+', label: 'Clients served' },
  { end: 4.2, prefix: '£', suffix: 'M', decimals: 1, label: 'Revenue generated for clients' },
  { end: 312, suffix: '%', label: 'Average traffic increase' },
];

function Counter({ end, prefix = '', suffix, decimals = 0 }: Omit<Stat, 'label'>) {
  // Initialise to the final value — SSR HTML always contains the real number
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
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(tick);
    };

    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text mb-2">
      {prefix}{formatted}{suffix}
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter
              end={stat.end}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
