import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Local SEO Agency London | Local SEO Services Across London',
  description: 'Expert Local SEO services across London. We help businesses in Camden, Westminster, Hackney, Shoreditch, and more dominate Google Maps and local search results.',
};

export default function LocalSEOAgencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl relative z-10">
          <p className="section-label">Local SEO Agency</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Local SEO Services Across <span className="text-brand">London</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">
            Dominate Google Maps and local search results in your area. We help London businesses get found by customers who are ready to buy — from Camden to Canary Wharf.
          </p>
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
          >
            Get Your Free Local SEO Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* What is Local SEO */}
      <section className="px-6 py-16 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is Local SEO?</h2>
            <div className="space-y-4 text-text-muted">
              <p>
                Local SEO is the process of optimising your online presence to attract more business from relevant local searches. When someone searches for "plumber near me" or "best restaurant in Shoreditch," local SEO determines which businesses appear.
              </p>
              <p>
                For London businesses, this means appearing in the Google Map Pack (the top 3 map results), Google Business Profile listings, and location-specific search results. With 46% of all Google searches having local intent, visibility in local search is no longer optional—it's essential.
              </p>
              <p>
                We've been helping London businesses dominate local search since 2011. Our proven methodology combines Google Business Profile optimisation, local citation building, review generation, and location-specific content to drive real results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '46%', label: 'of Google searches have local intent' },
              { number: '78%', label: 'of local mobile searches lead to purchase' },
              { number: '88%', label: 'of consumers trust online reviews' },
              { number: '3x', label: 'more leads from Map Pack vs organic' }
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
              Local SEO Services by Area
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              We provide tailored local SEO services across London's most competitive areas. Select your location to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/localseoagency/${location.slug}/`}
                className="group relative overflow-hidden rounded-2xl bg-dark-card border border-white/[0.08] hover:border-brand transition-all duration-300"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={location.image}
                    alt={`Local SEO ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand transition-colors">
                    Local SEO {location.name}
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
            <h2 className="text-3xl font-bold">Our Local SEO Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Google Business Profile Optimisation',
                desc: 'Complete setup and optimisation of your GBP listing to maximise visibility in Maps and local pack results.'
              },
              {
                title: 'Local Citation Building',
                desc: 'Build consistent NAP (Name, Address, Phone) listings across 100+ UK directories to boost local authority.'
              },
              {
                title: 'Review Generation & Management',
                desc: 'Automated systems to generate more 5-star reviews and professionally manage your online reputation.'
              },
              {
                title: 'Local Content Strategy',
                desc: 'Location-specific pages and content targeting "[service] + [location]" keywords your customers search.'
              },
              {
                title: 'Local Link Building',
                desc: 'Earn backlinks from local businesses, community sites, and relevant directories to build authority.'
              },
              {
                title: 'Monthly Reporting & Analysis',
                desc: 'Clear monthly reports showing your rankings, traffic, calls, and leads with actionable insights.'
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
        title="Ready to dominate local search?"
        description="Get a free local SEO audit and discover how we can help your business get found by more local customers."
        buttonText="Get Your Free Audit"
      />
    </>
  );
}
