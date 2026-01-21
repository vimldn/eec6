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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${service.slug}/`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 cursor-pointer group h-full relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-px bg-gradient-to-r from-brand/50 via-brand-light/30 to-brand/50 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />
        
        <div className="relative z-10">
          {/* Icon with bounce animation */}
          <motion.div 
            className="w-14 h-14 bg-brand/15 rounded-xl flex items-center justify-center mb-6 text-2xl"
            animate={{ 
              rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {service.icon}
          </motion.div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">
            {service.name}
          </h3>
          
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {service.shortDesc}
          </p>
          
          {/* Animated CTA */}
          <motion.div 
            className="flex items-center gap-2 text-brand text-sm font-medium"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            View locations
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>
        
        {/* Corner decoration */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand/20 to-transparent rounded-bl-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}

