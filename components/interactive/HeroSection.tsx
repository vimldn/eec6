'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient overlay — left half, lets 3D element show through on right */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0a0a0f 0%, #0a0a0fee 40%, transparent 100%)' }}
      />

      {/* Animated background blob */}
      <motion.div
        className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 3D Element */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[80%] z-[1] hidden md:block">
        <Hero3D className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-[5]">
        <div className="max-w-xl pointer-events-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-dark-card border border-white/[0.08] px-4 py-2 rounded-full text-sm text-text-secondary mb-6"
          >
            <motion.span
              className="w-2 h-2 bg-brand rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Trusted by UK businesses since 2011
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            SEO that delivers{' '}
            <motion.span
              className="text-brand inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              real results.
            </motion.span>
            <br />
            Not just rankings.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-8"
          >
            We help UK businesses grow through search. Local SEO and national campaigns — all backed by 14 years of proven results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Get Your Free SEO Audit
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3.5 rounded-lg font-semibold transition-all"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-brand rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
