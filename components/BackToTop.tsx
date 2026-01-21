'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Back to top"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-brand rounded-full blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.4 : 0.2 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Main button */}
          <div className="relative w-12 h-12 bg-dark-card border border-white/10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm overflow-hidden">
            {/* Background fill on hover */}
            <motion.div
              className="absolute inset-0 bg-brand"
              initial={{ y: '100%' }}
              animate={{ y: isHovered ? '0%' : '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            
            {/* Arrow icon */}
            <motion.svg
              className="w-5 h-5 relative z-10 text-brand group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </div>
          
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-brand/30"
              strokeDasharray="138.2"
              strokeDashoffset="0"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
