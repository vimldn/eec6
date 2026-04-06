'use client';

import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

export default function ClientsSection({ clients }: { clients: Client[] }) {
  return (
    // Client strip — white background per spec
    <div
      className="flex items-center px-6 md:px-10 py-5 flex-wrap gap-y-3"
      style={{ background: '#ffffff', borderBottom: '3px solid #111110' }}
    >
      {/* Client names */}
      <div className="flex flex-wrap gap-x-10 gap-y-2 items-center">
        {clients.map((client, i) => (
          <motion.span
            key={client.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            // Client names — Bebas Neue, #dddddd default per spec
            className="v1-headline cursor-default transition-colors hover:text-brand"
            style={{ fontSize: 20, letterSpacing: '0.08em', color: '#dddddd' }}
          >
            {client.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
