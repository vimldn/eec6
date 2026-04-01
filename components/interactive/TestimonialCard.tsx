'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  client: string;
  industry: string;
  location: string;
  initials: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <section className="px-6 py-20 bg-dark-lighter">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Client Success</p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 md:p-12"
        >
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center font-bold text-dark"
            >
              {testimonial.initials}
            </motion.div>
            <div>
              <div className="font-semibold">{testimonial.client}</div>
              <div className="text-sm text-text-secondary">
                {testimonial.industry}, {testimonial.location}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
