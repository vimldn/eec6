'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
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
          background: hovered ? '#e85d26' : '#ffffff',
          border: '2px solid #111110',
          padding: '48px 40px',
          transition: 'background 0.25s',
        }}
      >
        {/* Ghost number — Bebas Neue, #dddddd per spec */}
        <div
          className="v1-headline absolute top-4 right-4 select-none pointer-events-none"
          style={{
            fontSize: 100,
            color: hovered ? 'rgba(255,255,255,0.15)' : '#dddddd',
            transition: 'color 0.25s',
            lineHeight: 1,
          }}
        >
          0{index + 1}
        </div>

        <div className="relative z-10">
          {/* Service title — Bebas Neue */}
          <div
            className="v1-headline mb-4"
            style={{
              fontSize: 40,
              color: hovered ? '#ffffff' : '#111110',
              transition: 'color 0.25s',
            }}
          >
            {service.name.toUpperCase()}
          </div>

          {/* Description — Barlow 400 */}
          <p
            className="v1-body mb-8 leading-relaxed"
            style={{
              fontSize: 15,
              color: hovered ? 'rgba(255,255,255,0.85)' : '#888888',
              transition: 'color 0.25s',
            }}
          >
            {service.shortDesc}
          </p>

          {/* CTA — Barlow Condensed 700 */}
          <motion.div
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            className="v1-label flex items-center gap-2"
            style={{
              fontSize: 13,
              color: hovered ? '#ffffff' : '#e85d26',
              transition: 'color 0.25s',
              letterSpacing: '0.12em',
            }}
          >
            View locations →
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
