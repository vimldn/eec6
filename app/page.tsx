import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { clients, featuredTestimonial } from '@/data/clients';
import { locations } from '@/data/locations';

import HeroSection from '@/components/interactive/HeroSection';
import Ticker from '@/components/interactive/Ticker';
import ClientsSection from '@/components/interactive/ClientsSection';
import SEOStatsCards from '@/components/interactive/SEOStatsCards';
import ServicesGrid from '@/components/interactive/ServicesGrid';
import StatsGrid from '@/components/interactive/StatsGrid';
import TestimonialCard from '@/components/interactive/TestimonialCard';

export const metadata: Metadata = {
  title: 'Extra Edge Club | SEO Agency UK | Since 2011',
  description:
    "UK SEO specialists since 2011. We help businesses grow through Local SEO and comprehensive SEO services. Trusted by Sixes Cricket, The Gentleman's Journal, and more.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <ClientsSection clients={clients} />

      {/* Why SEO Matters */}
      <section style={{ borderBottom: '3px solid #111110' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0">
          {/* Text — server-rendered, Google reads on first byte */}
          <div
            className="px-14 py-20"
            style={{ borderRight: '1px solid #dddddd' }}
          >
            <p className="section-label">Why SEO Matters</p>
            <h2
              className="leading-[0.95] tracking-[0.02em] mb-8"
              className="v1-headline" style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: '#111110' }}
            >
              The most cost-effective way to grow your business
            </h2>
            <div className="space-y-5 leading-relaxed" className="v1-body" style={{ fontSize: 15, color: '#888888' }}>
              <p>
                Every day, millions of people search Google for products and services. Unlike paid
                ads, where you pay for every click, SEO delivers compounding returns. The traffic you
                earn today keeps coming tomorrow, next month, and next year — without ongoing ad spend.
              </p>
              <p>
                For local businesses, the stakes are even higher. When someone searches &ldquo;solicitor
                near me&rdquo; or &ldquo;plumber in Manchester&rdquo;, they&apos;re not browsing —
                they&apos;re ready to buy.{' '}
                <strong style={{ color: 'var(--brand)', fontWeight: 600 }}>
                  46% of all Google searches have local intent
                </strong>
                , and the businesses in those top 3 map results capture the vast majority of calls.
              </p>
              <p>
                SEO isn&apos;t just about rankings. It&apos;s about being visible at the exact moment your
                ideal customer is looking for what you offer — the difference between chasing customers
                and having them come to you.
              </p>
            </div>
          </div>

          {/* Animated stat cards */}
          <div className="flex flex-col justify-center">
            <SEOStatsCards />
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ borderBottom: '3px solid var(--ink)', background: '#f7f5f0' }}>
        <div className="max-w-6xl mx-auto px-14 py-20">
          <div className="mb-12">
            <p className="section-label">Our Services</p>
            <h2
              className="leading-[0.95]"
              className="v1-headline" style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: '#111110' }}
            >
              Two ways we help you grow
            </h2>
          </div>
          <ServicesGrid services={services} />
        </div>
      </section>

      {/* Stats — 4-column grid */}
      <StatsGrid />

      {/* Location links — 100% server-rendered, zero JS */}
      <section style={{ borderBottom: '3px solid var(--ink)', background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-14 py-20">
          <p className="section-label">London Coverage</p>
          <h2
            className="mb-12 leading-[0.95]"
            className="v1-headline" style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: '#111110' }}
          >
            SEO services across London
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service) => (
              <div key={service.slug}>
                <h3
                  className="mb-5 uppercase tracking-[0.1em]"
                  className="v1-label" style={{ fontSize: 14, color: '#e85d26', letterSpacing: '0.12em' }}
                >
                  {service.name}
                </h3>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/${service.slug}/${location.slug}/`}
                        className="text-sm transition-colors block py-0.5 hover:text-brand"
                        className="v1-body" style={{ color: '#888888' }}
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${service.slug}/`}
                  className="inline-block mt-5 uppercase tracking-wider transition-colors"
                  className="v1-label" style={{ fontSize: 12, color: '#e85d26', letterSpacing: '0.12em' }}
                >
                  View all areas →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <TestimonialCard testimonial={featuredTestimonial} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
