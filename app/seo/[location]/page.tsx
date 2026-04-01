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

  const heroImage = location.image || '';

  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f7f5f0', borderBottom: '1px solid #ddd', padding: '8px 40px' }}>
        <nav style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <Link href="/seo/" style={{ color: '#888', textDecoration: 'none' }}>SEO</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <span style={{ color: '#e85d26' }}>{location.name}</span>
        </nav>
      </div>

      {/* ── V2 BANNER ── */}
      <section style={{ position: 'relative', height: 240, overflow: 'hidden', borderBottom: '3px solid #111110' }}>
        <img
          src={heroImage}
          alt={location.name}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px, 4vw, 48px)' }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#e85d26', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 7 }}>▶</span>
              SEO Agency
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
          <div style={{ textAlign: 'right' }}>
            <div className="v1-headline" style={{ fontSize: 64, color: '#e85d26', lineHeight: 1 }}>14</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Years proven</div>
          </div>
        </div>
      </section>

      {/* ── Below banner ── */}
      <section className="grid lg:grid-cols-[1fr_420px]" style={{ borderBottom: '3px solid #111110' }} id="lead-form">
        <div className="lg:border-r-[3px] lg:border-ink" style={{ background: '#f7f5f0', padding: 'clamp(32px, 5vw, 52px) clamp(24px, 5vw, 52px)' }}>
          <h1 className="v1-headline" style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: '#111110', marginBottom: 20 }}>
            SEO Agency in <span style={{ color: '#e85d26' }}>{location.name}</span>
          </h1>
          <p className="v1-body" style={{ fontSize: 15, color: '#888888', lineHeight: 1.7, maxWidth: 520, marginBottom: 14 }}>
            Competing for organic search visibility in {location.name} means going up against some of the most well-resourced companies around. Our {location.name} SEO campaigns are built for this level of competition — combining technical excellence, strategic content, and authoritative link building.
          </p>
          <p className="v1-body" style={{ fontSize: 15, color: '#888888', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
            Since 2011, we&apos;ve helped {location.name} businesses climb to the top of Google&apos;s organic results.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#lead-form" className="btn-fill">Get Your Free Audit →</a>
            <a href="/contact/" className="btn-out">Get in Touch</a>
          </div>
        </div>

        <div style={{ background: '#ffffff', padding: 'clamp(28px, 4vw, 40px) clamp(20px, 4vw, 36px)' }}>
          <div
            className="v1-headline"
            style={{ fontSize: 28, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111110', marginBottom: 20, lineHeight: 1 }}
          >
            Free audit in{' '}
            <span style={{ color: '#e85d26' }}>{location.name}</span>
          </div>
          <LeadForm
            page="SEO Location Page"
            location={location.name}
            title=""
            variant="light"
            buttonText="Request Free Audit"
          />
        </div>
      </section>

{/* (Optional) rest of page... keep your existing sections below */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl mb-4">SEO Services in {location.name}</h2>
          <p className="text-text-muted">
            Add your location-specific content here (case studies, FAQs, process, etc).
          </p>
        </div>
      </section>

      {/* Other locations (optional) */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl mb-6">More SEO Locations</h3>
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
