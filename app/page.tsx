'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { SimpleCounter } from '@/components/AnimatedCounter';
import { services } from '@/data/services';
import { clients, featuredTestimonial } from '@/data/clients';
import { locations } from '@/data/locations';

// Dynamically import 3D component to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
    </div>
  ),
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section with 3D Element */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
        {/* Gradient background overlay for left side - pointer-events none so clicks pass through */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/2 z-[3] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, #0a0a0f 0%, #0a0a0fee 40%, transparent 100%)`
          }}
        />
        
        {/* Animated background gradient */}
        <motion.div
          className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* 3D Element - positioned to not overlap nav */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[80%] z-[1] hidden md:block">
          <Hero3D className="w-full h-full" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-[5]">
          {/* Left: Content - constrain width so it doesn't overlap 3D */}
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

      {/* Clients Section */}
      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <ScrollReveal animation="fadeUp">
          <p className="text-xs uppercase tracking-wider text-text-secondary mb-6">
            Trusted by national brands and local businesses
          </p>
        </ScrollReveal>
        <motion.div
          className="flex flex-wrap gap-x-12 gap-y-4 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
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
              <span className={`text-[0.65rem] uppercase tracking-wider ${client.type === 'national' ? 'text-brand' : 'text-text-secondary'}`}>
                {client.type}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why SEO Matters Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fadeRight">
            <div>
              <p className="section-label">Why SEO Matters</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                The most cost-effective way to grow your business
              </h2>
              <div className="space-y-5 text-text-muted leading-relaxed">
                <p>
                  Every day, millions of people search Google for products and services. Unlike paid ads, where you pay for every click, SEO delivers compounding returns. The traffic you earn today keeps coming tomorrow, next month, and next year — without ongoing ad spend.
                </p>
                <p>
                  For local businesses, the stakes are even higher. When someone searches "solicitor near me" or "plumber in Manchester", they&apos;re not browsing — they&apos;re ready to buy.{' '}
                  <span className="text-brand font-medium">46% of all Google searches have local intent</span>, and the businesses that show up in those top 3 map results capture the vast majority of calls and enquiries.
                </p>
                <p>
                  SEO isn&apos;t just about rankings. It&apos;s about being visible at the exact moment your ideal customer is looking for what you offer. It&apos;s the difference between chasing customers and having them come to you.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="space-y-4">
            {[
              { number: 46, suffix: '%', label: 'of all Google searches have local intent', desc: 'Nearly half of everyone using Google is looking for something nearby.' },
              { number: 92, suffix: '%', label: 'of searchers choose businesses on page 1', desc: "If you're not on page one, you're invisible to most customers." },
              { number: 5.7, suffix: 'x', label: 'higher close rate than outbound leads', desc: "People searching for you are ready to buy. Cold leads aren't." }
            ].map((stat, i) => (
              <ScrollReveal key={i} animation="fadeLeft" delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-dark-card border border-white/[0.08] rounded-xl p-6 flex gap-5"
                >
                  <div className="text-3xl font-bold text-brand min-w-[80px]">
                    <SimpleCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      decimals={stat.number === 5.7 ? 1 : 0}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-sm text-text-secondary">{stat.desc}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="section-label">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Two ways we help you grow
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <p className="section-label">London Coverage</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
              SEO services across London
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, serviceIndex) => (
              <ScrollReveal key={service.slug} animation="fadeUp" delay={serviceIndex * 0.2}>
                <div>
                  <h3 className="text-lg font-semibold text-brand mb-4">{service.name}</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {locations.map((location, locationIndex) => (
                      <motion.li
                        key={location.slug}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: locationIndex * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <Link 
                          href={`/${service.slug}/${location.slug}/`}
                          className="text-text-secondary hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                        >
                          {location.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <Link 
                    href={`/${service.slug}/`}
                    className="inline-block mt-4 text-brand text-sm font-medium hover:underline"
                  >
                    View all areas →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: 14, suffix: '', label: 'Years in business' },
            { number: 200, suffix: '+', label: 'Clients served' },
            { number: 4.2, prefix: '£', suffix: 'M', label: 'Revenue generated for clients' },
            { number: 312, suffix: '%', label: 'Average traffic increase' }
          ].map((stat, i) => (
            <ScrollReveal key={i} animation="scale" delay={i * 0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <SimpleCounter
                    end={stat.number}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix}
                    decimals={stat.number === 4.2 ? 1 : 0}
                  />
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="scale">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 md:p-12"
            >
              <p className="section-label">Client Success</p>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center font-bold text-dark"
                >
                  {featuredTestimonial.initials}
                </motion.div>
                <div>
                  <div className="font-semibold">{featuredTestimonial.client}</div>
                  <div className="text-sm text-text-secondary">{featuredTestimonial.industry}, {featuredTestimonial.location}</div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
