import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { clients, featuredTestimonial } from '@/data/clients';
import { locations } from '@/data/locations';

// Client islands — interactivity isolated, everything else is SSR
import HeroSection from '@/components/interactive/HeroSection';
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
      {/* Hero — client island (3D canvas + Framer Motion entrance animations) */}
      <HeroSection />

      {/* Clients — client island (stagger animation) */}
      <ClientsSection clients={clients} />

      {/* Why SEO Matters
          Text content is server-rendered so Google reads it on first byte.
          Stat cards are a client island for the counter animation. */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Why SEO Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              The most cost-effective way to grow your business
            </h2>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                Every day, millions of people search Google for products and services. Unlike paid
                ads, where you pay for every click, SEO delivers compounding returns. The traffic you
                earn today keeps coming tomorrow, next month, and next year — without ongoing ad
                spend.
              </p>
              <p>
                For local businesses, the stakes are even higher. When someone searches &ldquo;solicitor
                near me&rdquo; or &ldquo;plumber in Manchester&rdquo;, they&apos;re not browsing —
                they&apos;re ready to buy.{' '}
                <span className="text-brand font-medium">
                  46% of all Google searches have local intent
                </span>
                , and the businesses that show up in those top 3 map results capture the vast majority
                of calls and enquiries.
              </p>
              <p>
                SEO isn&apos;t just about rankings. It&apos;s about being visible at the exact moment
                your ideal customer is looking for what you offer. It&apos;s the difference between
                chasing customers and having them come to you.
              </p>
            </div>
          </div>

          {/* Animated stat cards — client island */}
          <SEOStatsCards />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Two ways we help you grow
            </h2>
          </div>
          <ServicesGrid services={services} />
        </div>
      </section>

      {/* Location links — fully server-rendered static HTML.
          Google reads every single location link on first crawl. */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">London Coverage</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
            SEO services across London
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.slug}>
                <h3 className="text-lg font-semibold text-brand mb-4">{service.name}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/${service.slug}/${location.slug}/`}
                        className="text-text-secondary hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${service.slug}/`}
                  className="inline-block mt-4 text-brand text-sm font-medium hover:underline"
                >
                  View all areas →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big stats — client island.
          Counters initialise to their final value so SSR HTML always
          contains "14", "200", "4.2", "312" — never "0". */}
      <StatsGrid />

      {/* Testimonial — client island (hover animation only) */}
      <TestimonialCard testimonial={featuredTestimonial} />

      {/* CTA — pure server component, no JS needed */}
      <CTASection />
    </>
  );
}
