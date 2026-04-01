'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string; client: string; industry: string; location: string; initials: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    // Quote section — orange fill per spec
    <section style={{ background: '#e85d26', borderTop: '3px solid #111110', borderBottom: '3px solid #111110' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-14 py-20"
      >
        {/* Quote — Bebas Neue per spec */}
        <blockquote
          className="v1-headline text-white mb-8"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        {/* Attribution — Barlow Condensed 700 */}
        <div
          className="v1-label"
          style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.2em' }}
        >
          — {testimonial.client} · {testimonial.industry} · {testimonial.location}
        </div>
      </motion.div>
    </section>
  );
}
