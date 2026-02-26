import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import CTASection from '@/components/CTASection';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';

interface PageProps {
  params: { location: string };
}

// Required for output: "export" with a dynamic route
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Not Found' };

  return {
    title: `SEO Agency ${location.name} | SEO Services ${location.name}`,
    description: `Expert SEO services in ${location.name}. We help ${location.name} businesses increase organic traffic, outrank competitors, and drive sustainable growth through search.`,
  };
}

export default function SEOLocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.location);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

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
            <Link href="/seo/" className="hover:text-white transition-colors">
              SEO
            </Link>
            <span className="mx-2">→</span>
            <span className="text-brand">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={location.image}
            alt={`SEO Agency ${location.name}`}
            className="w-full h-full object-cover"
          />
          {/* IMPORTANT: not too dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-dark" />
        </div>

        <div className="relative z-10 px-6 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            {/* Left content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                SEO Agency in{' '}
                <span className="text-brand underline decoration-brand/30">
                  {location.name}
                </span>
              </h1>

              <p className="text-xl text-white/85 max-w-3xl mb-4 leading-relaxed">
                Competing for organic search visibility in {location.name} means going up against
                some of the most well-resourced companies in the world. Our {location.name} SEO
                campaigns are built for this level of competition—combining technical excellence,
                strategic content, and authoritative link building that delivers measurable results.
              </p>

              <p className="text-lg text-white/70 max-w-3xl mb-8 leading-relaxed">
                Since 2011, we&apos;ve helped {location.name} businesses climb to the top of
                Google&apos;s organic results. Whether you&apos;re an e-commerce brand seeking
                national visibility, a professional service firm targeting {location.name} clients,
                or a growing startup ready to scale, our proven SEO methodology drives the traffic,
                leads, and revenue that fuel growth.
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
                  href="tel:+442012345678"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 px-6 py-3.5 rounded-lg font-semibold transition-all text-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right form */}
            <div id="lead-form" className="w-full max-w-xl lg:justify-self-end">
              <LeadForm
                page="SEO Location Page"
                location={location.name}
                title={`Get Your Free SEO Audit in ${location.name}`}
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
            <div className="text-xl font-bold text-brand">{location.population}</div>
            <div className="text-xs text-text-secondary">Population</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-brand">{location.businesses}</div>
            <div className="text-xs text-text-secondary">Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-brand">{location.searchVolume}</div>
            <div className="text-xs text-text-secondary">Monthly Searches</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-brand">{location.avgRent}</div>
            <div className="text-xs text-text-secondary">Avg. Commercial Rent</div>
          </div>
          <div className="text-center md:col-span-1 col-span-2">
            <div className="text-xl font-bold text-brand">Since 2011</div>
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
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              The {location.name} Business Landscape
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{location.description}</p>
              <p>{location.businessLandscape}</p>
              <p>
                For businesses operating in {location.name}, organic search visibility isn&apos;t
                just important—it&apos;s a critical competitive advantage.
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

      {/* Why SEO in this Area */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Why SEO Matters</p>
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Why Your {location.name} Business Needs SEO
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed text-lg">
            <p>{location.whyLocalSeo}</p>
            <p>
              Beyond local searches, {location.name} businesses compete for broader commercial
              keywords. SEO ensures you&apos;re visible at every stage of the customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '5.7x', label: 'higher close rate vs outbound', desc: 'SEO leads are actively looking for what you offer.' },
              { number: '53%', label: 'of traffic comes from organic search', desc: 'More than half of all website traffic starts with search.' },
              { number: '14.6%', label: 'close rate for SEO leads', desc: 'Compared to just 1.7% for outbound leads.' },
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <div className="text-3xl font-bold text-brand mb-2">{stat.number}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-sm text-text-secondary">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">More Areas</p>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Explore Other SEO Locations</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/seo/${l.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="font-semibold text-lg mb-2">{l.name}</div>
                <div className="text-sm text-text-secondary">SEO services in {l.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
