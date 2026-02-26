import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

// IMPORTANT:
// This page assumes you already have these exports in your project.
// If your data file name/path differs, change the import below to match your repo.
//
// It must provide:
// - locations: array of { slug, name, image?, population?, businesses?, searchVolume?, avgRent?, description?, businessLandscape?, whyLocalSeo?, keyIndustries?, landmarks? }
// - getAllLocationSlugs(): string[]
// - getLocationBySlug(slug): location | undefined
import { locations, getAllLocationSlugs, getLocationBySlug } from '@/data/locations';

type PageProps = {
  params: { location: string };
};

// Required for output: "export"
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Not Found' };

  return {
    title: `SEO Agency in ${location.name} | Extra Edge Club`,
    description: `Expert SEO services in ${location.name}. Increase organic traffic, outrank competitors, and drive growth with a proven SEO strategy.`,
  };
}

export default function SeoLocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.location);
  if (!location) notFound();

  const heroImage = location.image || '/images/locations/seo-hero.jpg';

  return (
    <main>
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <div className="mx-auto max-w-6xl">
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`SEO in ${location.name}`}
            className="h-full w-full object-cover object-center"
          />
          {/* Keep hero visible but readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/90 to-black/90" />
        </div>

        <div className="relative z-10 px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-start">
            {/* LEFT */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                SEO Agency in{' '}
                <span className="text-brand underline decoration-brand/30">
                  {location.name}
                </span>
              </h1>

              {/* ✅ THIS IS THE IMPORTANT PART: force white text */}
              <div className="space-y-5">
                <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  Competing for organic search visibility in {location.name} means going up
                  against some of the most well-resourced companies in the world. Our{' '}
                  {location.name} SEO campaigns are built for this level of competition—combining
                  technical excellence, strategic content, and authoritative link building that
                  delivers measurable results.
                </p>

                <p className="text-white text-base md:text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  Since 2011, we&apos;ve helped {location.name} businesses climb to the top of
                  Google&apos;s organic results. Whether you&apos;re an e-commerce brand seeking
                  national visibility, a professional service firm targeting {location.name}{' '}
                  clients, or a growing startup ready to scale, our proven SEO methodology drives
                  the traffic, leads, and revenue that fuel growth.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
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
                  className="inline-flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
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

            {/* RIGHT */}
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

      {/* (Optional) rest of page... keep your existing sections below */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">SEO Services in {location.name}</h2>
          <p className="text-text-muted">
            Add your location-specific content here (case studies, FAQs, process, etc).
          </p>
        </div>
      </section>

      {/* Other locations (optional) */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold mb-6">More SEO Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locations
              .filter((l) => l.slug !== location.slug)
              .slice(0, 6)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/seo/${l.slug}/`}
                  className="bg-dark-card border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
                >
                  <div className="font-semibold text-lg mb-1">{l.name}</div>
                  <div className="text-sm text-text-secondary">SEO services in {l.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
