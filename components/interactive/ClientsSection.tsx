'use client';

import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

interface ClientsSectionProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
      <p className="text-xs uppercase tracking-wider text-text-secondary mb-6">
        Trusted by national brands and local businesses
      </p>
      <motion.div
        className="flex flex-wrap gap-x-12 gap-y-4 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col"
          >
            <span className="text-white font-semibold opacity-80">{client.name}</span>
            <span
              className={`text-[0.65rem] uppercase tracking-wider ${
                client.type === 'national' ? 'text-brand' : 'text-text-secondary'
              }`}
            >
              {client.type}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
