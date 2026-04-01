'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string; client: string; industry: string; location: string; initials: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section style={{ background: 'var(--brand)', borderTop: '3px solid var(--ink)', borderBottom: '3px solid var(--ink)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-14 py-20"
      >
        <blockquote
          className="leading-[1.05] mb-8 text-white"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div
          className="uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}
        >
          — {testimonial.client} · {testimonial.industry} · {testimonial.location}
        </div>
      </motion.div>
    </section>
  );
}
