import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'SEO Agency London | SEO Services Across London',
  description: 'Expert SEO services across London. Full-scale organic search strategy to increase visibility, traffic, and conversions for London businesses.',
};

export default function SEOAgencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl relative z-10">
          <p className="section-label">SEO Agency</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            SEO Services Across <span className="text-brand">London</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">
            Full-scale organic search strategy to increase visibility, traffic, and conversions. We help London businesses outrank competitors and dominate search results.
          </p>
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
          >
            Get Your Free SEO Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* What is SEO */}
      <section className="px-6 py-16 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is SEO?</h2>
            <div className="space-y-4 text-text-muted">
              <p>
                Search Engine Optimisation (SEO) is the practice of improving your website to increase its visibility in search engines like Google. When potential customers search for products or services you offer, SEO determines whether they find you or your competitors.
              </p>
              <p>
                Unlike paid advertising where you pay for every click, SEO delivers compounding returns. The traffic you earn today keeps coming tomorrow, next month, and next year—without ongoing ad spend. For London businesses, SEO represents the most cost-effective long-term marketing investment.
              </p>
              <p>
                Our comprehensive SEO service covers technical optimisation, on-page improvements, content strategy, and link building. We've been helping London businesses grow through organic search since 2011, delivering measurable results and real ROI.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '5.7x', label: 'higher close rate than outbound leads' },
              { number: '70%', label: 'of marketers say SEO is better than PPC' },
              { number: '53%', label: 'of website traffic comes from organic search' },
              { number: '14.6%', label: 'close rate for SEO leads (vs 1.7% outbound)' }
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-brand mb-1">{stat.number}</div>
                <div className="text-xs text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Our Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              SEO Services by Area
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              We provide tailored SEO services for businesses across London's most competitive areas. Select your location to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/seo/${location.slug}/`}
                className="group relative overflow-hidden rounded-2xl bg-dark-card border border-white/[0.08] hover:border-brand transition-all duration-300"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={location.image}
                    alt={`SEO Agency ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand transition-colors">
                    SEO Agency {location.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                    {location.description.slice(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">{location.businesses} businesses</span>
                    <span className="text-brand text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">What's Included</p>
            <h2 className="text-3xl font-bold">Our SEO Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical SEO Audit & Fixes',
                desc: 'Comprehensive audit of site speed, crawlability, indexation, and technical issues that could be holding back your rankings.'
              },
              {
                title: 'On-Page Optimisation',
                desc: 'Optimise titles, meta descriptions, headings, and content for target keywords that your customers actually search.'
              },
              {
                title: 'Content Strategy',
                desc: 'Data-driven content plan targeting keywords with real search volume and commercial intent.'
              },
              {
                title: 'Link Building',
                desc: 'Earn high-quality backlinks through outreach, digital PR, and content marketing to build domain authority.'
              },
              {
                title: 'Competitor Analysis',
                desc: 'Deep analysis of what\'s working for your competitors so we can develop strategies to outperform them.'
              },
              {
                title: 'Monthly Reporting & ROI Tracking',
                desc: 'Transparent reporting on rankings, traffic, conversions, and return on investment.'
              }
            ].map((service, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to grow your organic traffic?"
        description="Get a free SEO audit and discover untapped opportunities to outrank your competitors."
        buttonText="Get Your Free Audit"
      />
    </>
  );
}
