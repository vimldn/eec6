import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import LocationIndustryLinks from '@/components/LocationIndustryLinks';
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
  if (!location) notFound();

  const otherLocations = locations.filter(l => l.slug !== location.slug).slice(0, 6);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f7f5f0', borderBottom: '1px solid #ddd', padding: '8px 40px' }}>
        <nav style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <Link href="/localseoagency/" style={{ color: '#888', textDecoration: 'none' }}>Local SEO</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <span style={{ color: '#e85d26' }}>{location.name}</span>
        </nav>
      </div>

      {/* ── V2 BANNER: panoramic image strip with location name stamped over ── */}
      <section style={{ position: 'relative', height: 240, overflow: 'hidden', borderBottom: '3px solid #111110' }}>
        <img
          src={location.image}
          alt={location.name}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px, 4vw, 48px)' }}>
          {/* Location name in huge Bebas Neue */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#e85d26', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 7 }}>▶</span>
              Local SEO Agency
            </div>
            <div
              className="v1-headline"
              style={{
                fontSize: 'clamp(64px, 9vw, 112px)',
                lineHeight: 0.9,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.6)',
              }}
            >
              {location.name}
            </div>
          </div>
          {/* Right stat */}
          <div style={{ textAlign: 'right' }}>
            <div className="v1-headline" style={{ fontSize: 64, color: '#e85d26', lineHeight: 1 }}>{location.businesses}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Local businesses</div>
          </div>
        </div>
      </section>

      {/* ── Below banner: content left + compact form right ── */}
      <section className="grid lg:grid-cols-[1fr_420px]" style={{ borderBottom: '3px solid #111110' }} id="lead-form">
        {/* Left — headline, body, CTAs */}
        <div className="lg:border-r-[3px] lg:border-ink" style={{ background: '#f7f5f0', padding: 'clamp(32px, 5vw, 52px) clamp(24px, 5vw, 52px)' }}>
          <h1 className="v1-headline" style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: '#111110', marginBottom: 20 }}>
            Local SEO Agency in{' '}
            <span style={{ color: '#e85d26' }}>{location.name}</span>
          </h1>
          <p className="v1-body" style={{ fontSize: 15, color: '#888888', lineHeight: 1.7, maxWidth: 520, marginBottom: 14 }}>
            Competing for local search visibility in {location.name} means standing out among {location.businesses} businesses all vying for the same customers. Our {location.name} local SEO campaigns combine Google Business Profile mastery, strategic citation building, and review generation.
          </p>
          <p className="v1-body" style={{ fontSize: 15, color: '#888888', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
            Since 2011, we&apos;ve helped {location.name} businesses climb to the top of Google Maps and the local pack.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#lead-form" className="btn-fill">Get Your Free Audit →</a>
            <a href="/contact/" className="btn-out">Get in Touch</a>
          </div>
        </div>

        {/* Right — compact form on white */}
        <div style={{ background: '#ffffff', padding: '40px 36px', borderLeft: 'none' }}>
          <div
            className="v1-headline"
            style={{ fontSize: 28, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111110', marginBottom: 20, lineHeight: 1 }}
          >
            Free audit in{' '}
            <span style={{ color: '#e85d26' }}>{location.name}</span>
          </div>
          <LeadForm
            page="Local SEO Location Page"
            location={location.name}
            title=""
            variant="light"
            buttonText="Request Free Audit"
          />
        </div>
      </section>

{/* Quick Stats */}
      <section style={{ background: "#f7f5f0", borderBottom: "3px solid #111110", padding: "32px clamp(24px,5vw,56px)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="v1-headline" style={{ fontSize: 28, color: "#e85d26", lineHeight: 1 }}>{location.population}</div>
            <div className="v1-label" style={{ fontSize: 10, color: "#888888", letterSpacing: "0.15em", marginTop: 4 }}>Population</div>
          </div>
          <div className="text-center">
            <div className="v1-headline" style={{ fontSize: 28, color: "#e85d26", lineHeight: 1 }}>{location.businesses}</div>
            <div className="v1-label" style={{ fontSize: 10, color: "#888888", letterSpacing: "0.15em", marginTop: 4 }}>Businesses</div>
          </div>
          <div className="text-center">
            <div className="v1-headline" style={{ fontSize: 28, color: "#e85d26", lineHeight: 1 }}>{location.searchVolume}</div>
            <div className="v1-label" style={{ fontSize: 10, color: "#888888", letterSpacing: "0.15em", marginTop: 4 }}>Monthly Searches</div>
          </div>
          <div className="text-center">
            <div className="v1-headline" style={{ fontSize: 28, color: "#e85d26", lineHeight: 1 }}>{location.avgRent}</div>
            <div className="v1-label" style={{ fontSize: 10, color: "#888888", letterSpacing: "0.15em", marginTop: 4 }}>Avg. Commercial Rent</div>
          </div>
          <div className="text-center md:col-span-1 col-span-2">
            <div className="v1-headline" style={{ fontSize: 28, color: "#e85d26", lineHeight: 1 }}>Since 2011</div>
            <div className="v1-label" style={{ fontSize: 10, color: "#888888", letterSpacing: "0.15em", marginTop: 4 }}>Serving {location.name}</div>
          </div>
        </div>
      </section>

      {/* About the Area */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label">
              About {location.name}
            </p>
            <h2 className="text-3xl mb-6 tracking-tight">
              The {location.name} Business Landscape
            </h2>
            <div className="v1-body space-y-4 leading-relaxed" style={{ color: "#888888" }}>
              <p>{location.description}</p>
              <p>{location.businessLandscape}</p>
              <p>
                For businesses operating in {location.name}, local search visibility isn't
                just important—it's a critical competitive advantage.
              </p>
            </div>
          </div>

          <div>
            <div style={{ background: "#ffffff", border: "2px solid #111110", padding: "36px 32px" }}>
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
                  <li key={i} className="v1-body flex items-center gap-3" style={{ color: "#888888" }}>
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
      <section style={{ background: "#f7f5f0", borderBottom: "3px solid #111110", padding: "clamp(40px,5vw,72px) clamp(24px,5vw,56px)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Why Local SEO Matters</p>
          <h2 className="text-3xl mb-6 tracking-tight">
            Why Your {location.name} Business Needs Local SEO
          </h2>
          <div className="v1-body space-y-4 leading-relaxed" style={{ color: "#888888", fontSize: 16 }}>
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
              <div key={i} style={{ background: "#ffffff", border: "1px solid #ddd", padding: "24px" }}>
                <div className="text-3xl text-brand mb-2">{stat.number}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="v1-body" style={{ fontSize: 13, color: "#888888" }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f7f5f0", borderBottom: "3px solid #111110", padding: "clamp(40px,5vw,72px) clamp(24px,5vw,56px)" }}>
          <p className="section-label">Our Approach</p>
          <h2 className="v1-headline" style={{ fontSize: "clamp(32px,4vw,48px)", color: "#111110", marginBottom: 32 }}>
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
              <div key={i} style={{ background: "#ffffff", border: "2px solid #111110", padding: "36px 32px" }}>
                <h3 className="v1-headline" style={{ fontSize: 28, color: "#111110", marginBottom: 10 }}>{item.title}</h3>
                <p className="v1-body" style={{ fontSize: 14, color: "#888888", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
      </section> locationName={location.name} />

      {/* Other Locations */}
      <section style={{ background: "#f7f5f0", borderBottom: "3px solid #111110", padding: "clamp(40px,5vw,72px) clamp(24px,5vw,56px)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label">More Areas</p>
          <h2 className="v1-headline" style={{ fontSize: "clamp(32px,4vw,48px)", color: "#111110", marginBottom: 32 }}>Explore Other Local SEO Locations</h2>

          <div className="grid md:grid-cols-3" style={{ border: "1px solid #ddd" }}>
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/localseoagency/${l.slug}/`}
                style={{ padding: "24px 28px", borderRight: "1px solid #ddd", background: "#ffffff", transition: "background .15s" }}
              >
                <div className="v1-headline" style={{ fontSize: 22, color: "#111110", marginBottom: 6 }}>{l.name}</div>
                <div className="v1-body" style={{ fontSize: 13, color: "#888888" }}>Local SEO services in {l.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
