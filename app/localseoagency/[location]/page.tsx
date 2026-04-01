import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';

interface PageProps {
  params: { location: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Not Found' };

  return {
    title: `Local SEO Services in ${location.name} | Extra Edge Club`,
    description: `Expert Local SEO services in ${location.name}. We help ${location.name} businesses dominate Google Maps, generate more reviews, and attract local customers ready to buy.`,
  };
}

export default function LocalSEOLocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.location);

  if (!location) {
    notFound();
  }

  const otherLocations = locations.filter(l => l.slug !== location.slug).slice(0, 6);

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-text-secondary">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">→</span>
            <Link href="/localseoagency/" className="hover:text-white transition-colors">
              Local SEO
            </Link>
            <span className="mx-2">→</span>
            <span className="text-brand">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero with Location Image */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={location.image}
            alt={`Local SEO Agency ${location.name}`}
            className="w-full h-full object-cover object-center"
          />
          {/* Darkness control: edit these values */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/90 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-16 w-full">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white">
                Local SEO Agency in{' '}
                <span className="text-brand underline decoration-brand/30">
                  {location.name}
                </span>
              </h1>

              <p className="text-xl text-white max-w-3xl mb-4 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                Competing for local search visibility in {location.name} means standing out among {location.businesses} businesses all vying for the same customers. Our {location.name} local SEO campaigns are built for this level of competition—combining Google Business Profile mastery, strategic citation building, and review generation systems that deliver measurable results.
              </p>

              <p className="text-lg text-white max-w-3xl mb-8 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                Since 2011, we've helped {location.name} businesses climb to the top of Google Maps and the local pack. Whether you're a restaurant looking to fill tables, a tradesperson seeking local jobs, or a professional service firm targeting {location.name} clients, our proven local SEO methodology drives the calls, bookings, and foot traffic that fuel growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
                >
                  Get Your Free Audit
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div id="lead-form" className="w-full max-w-xl lg:justify-self-end">
              <LeadForm
                page="Local SEO Location Page"
                location={location.name}
                title={`Get Your Free Local SEO Audit in ${location.name}`}
                buttonText="Request Free Audit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 py-8 bg-dark-lighter border-y border-white/[0.08]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="text-xl text-brand">{location.population}</div>
            <div className="text-xs text-text-secondary">Population</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-brand">{location.businesses}</div>
            <div className="text-xs text-text-secondary">Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-brand">{location.searchVolume}</div>
            <div className="text-xs text-text-secondary">Monthly Searches</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-brand">{location.avgRent}</div>
            <div className="text-xs text-text-secondary">Avg. Commercial Rent</div>
          </div>
          <div className="text-center md:col-span-1 col-span-2">
            <div className="text-xl text-brand">Since 2011</div>
            <div className="text-xs text-text-secondary">Serving {location.name}</div>
          </div>
        </div>
      </section>

      {/* About the Area */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-wider text-brand mb-3">
              About {location.name}
            </p>
            <h2 className="text-3xl mb-6 tracking-tight">
              The {location.name} Business Landscape
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{location.description}</p>
              <p>{location.businessLandscape}</p>
              <p>
                For businesses operating in {location.name}, local search visibility isn't
                just important—it's a critical competitive advantage.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Key Industries in {location.name}</h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {location.keyIndustries.map((industry, i) => (
                  <span
                    key={i}
                    className="bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Notable Landmarks</h3>
              <ul className="space-y-2">
                {location.landmarks.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <svg
                      className="w-5 h-5 text-brand flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Why Local SEO Matters</p>
          <h2 className="text-3xl mb-6 tracking-tight">
            Why Your {location.name} Business Needs Local SEO
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed text-lg">
            <p>{location.whyLocalSeo}</p>
            <p>
              Beyond “near me” searches, {location.name} customers compare businesses by reviews,
              photos, and trust signals. Local SEO ensures you show up — and look like the best option.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '70%+', label: 'of clicks go to the top 3 map results', desc: 'If you’re not in the map pack, you’re missing most local demand.' },
              { number: '2-5x', label: 'more calls with review growth', desc: 'A strong review strategy improves rank and conversion.' },
              { number: '24/7', label: 'lead flow from search', desc: 'Local SEO works even when you’re not running ads.' },
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <div className="text-3xl text-brand mb-2">{stat.number}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-sm text-text-secondary">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Our Approach</p>
          <h2 className="text-3xl mb-10 tracking-tight">
            How We Grow Local Rankings in {location.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Google Business Profile Optimization',
                desc: 'We fix categories, services, descriptions, photos, and posting cadence to improve relevance and engagement signals.',
              },
              {
                title: 'Citations & NAP Consistency',
                desc: 'We build and clean citations across key directories to strengthen trust and reduce ranking suppression.',
              },
              {
                title: 'Review Generation System',
                desc: 'We implement a repeatable review strategy to increase volume and velocity — improving rank and conversion.',
              },
              {
                title: 'Local Content & Location Signals',
                desc: 'We strengthen your location pages and topical coverage to win organic results alongside the map pack.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">More Areas</p>
          <h2 className="text-3xl mb-10 tracking-tight">Explore Other Local SEO Locations</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/localseoagency/${l.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="font-semibold text-lg mb-2">{l.name}</div>
                <div className="text-sm text-text-secondary">Local SEO services in {l.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
