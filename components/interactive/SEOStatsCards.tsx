'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCard {
  number: number;
  suffix: string;
  decimals?: number;
  label: string;
  desc: string;
}

const stats: StatCard[] = [
  {
    number: 46,
    suffix: '%',
    label: 'of all Google searches have local intent',
    desc: 'Nearly half of everyone using Google is looking for something nearby.',
  },
  {
    number: 92,
    suffix: '%',
    label: 'of searchers choose businesses on page 1',
    desc: "If you're not on page one, you're invisible to most customers.",
  },
  {
    number: 5.7,
    suffix: 'x',
    decimals: 1,
    label: 'higher close rate than outbound leads',
    desc: "People searching for you are ready to buy. Cold leads aren't.",
  },
];

function StatCounter({ end, suffix, decimals = 0 }: { end: number; suffix: string; decimals?: number }) {
  // Initialise to final value so SSR / no-JS users always see the correct number
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(tick);
    };

    setValue(0);
    requestAnimationFrame(tick);
  }, [isInView, end]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <span ref={ref} className="text-3xl font-bold text-brand min-w-[80px] inline-block">
      {formatted}
      {suffix}
    </span>
  );
}

export default function SEOStatsCards() {
  return (
    <div className="space-y-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          whileHover={{ scale: 1.02, x: 5 }}
          className="bg-dark-card border border-white/[0.08] rounded-xl p-6 flex gap-5"
        >
          <StatCounter end={stat.number} suffix={stat.suffix} decimals={stat.decimals} />
          <div>
            <div className="font-semibold text-sm mb-1">{stat.label}</div>
            <div className="text-sm text-text-secondary">{stat.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
