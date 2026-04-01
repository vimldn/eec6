'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/${service.slug}/`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative overflow-hidden cursor-pointer h-full"
        style={{
          background: hovered ? 'var(--brand)' : '#fff',
          border: '2px solid var(--ink)',
          padding: '48px 40px',
          transition: 'background 0.25s',
        }}
      >
        {/* Ghost number */}
        <div
          className="ghost-word absolute top-4 right-4 select-none pointer-events-none"
          style={{
            fontSize: 100,
            color: hovered ? 'rgba(255,255,255,0.15)' : 'var(--rule)',
            transition: 'color 0.25s',
            lineHeight: 1,
          }}
        >
          0{index + 1}
        </div>

        <div className="relative z-10">
          <div
            className="text-4xl mb-4 block"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
              color: hovered ? '#fff' : 'var(--ink)',
              transition: 'color 0.25s',
              fontSize: 40,
            }}
          >
            {service.name.toUpperCase()}
          </div>

          <p
            className="text-sm leading-relaxed mb-8"
            style={{
              color: hovered ? 'rgba(255,255,255,0.85)' : '#666',
              transition: 'color 0.25s',
              fontFamily: 'var(--font-body)',
            }}
          >
            {service.shortDesc}
          </p>

          {/* Arrow CTA */}
          <motion.div
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: hovered ? '#fff' : 'var(--brand)',
              transition: 'color 0.25s',
            }}
          >
            View locations →
          </motion.div>
        </div>

        {/* Corner accent */}
        {hovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full"
            style={{ background: '#fff' }}
          />
        )}
      </motion.div>
    </Link>
  );
}
