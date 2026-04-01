'use client';

import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

interface ClientsSectionProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <div
      className="flex items-center px-10 py-6 gap-0 flex-wrap"
      style={{ background: '#fff', borderBottom: '3px solid var(--ink)' }}
    >
      <span
        className="text-xs uppercase tracking-[0.25em] pr-10 mr-10 whitespace-nowrap shrink-0"
        style={{
          fontFamily: 'var(--font-condensed)',
          fontWeight: 700,
          color: 'var(--mid)',
          borderRight: '2px solid var(--ink)',
        }}
      >
        Trusted by
      </span>
      <div className="flex flex-wrap gap-x-10 gap-y-2 items-center">
        {clients.map((client, i) => (
          <motion.span
            key={client.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="cursor-default transition-colors"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              letterSpacing: '0.08em',
              color: '#ccc',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ccc')}
          >
            {client.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
