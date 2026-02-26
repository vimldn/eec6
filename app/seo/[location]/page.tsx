import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';

// ✅ Replace this with however you already source locations.
// Option A: import your existing list:
// import { seoLocations } from '@/data/seoLocations';
//
// Option B: keep a small fallback list (example only)
const seoLocations = [
  { slug: 'golders-green', name: 'Golders Green' },
  { slug: 'camden', name: 'Camden' },
];

const HERO_IMAGE = '/images/locations/seo-hero.jpg'; // <- change to your actual image

function getLocation(slug: string) {
  return seoLocations.find((l) => l.slug === slug);
}

export default function SeoLocationPage({
  params,
}: {
  params: { location: string };
}) {
  const location = getLocation(params.location);
  if (!location) return notFound();

  const pageTitle = `SEO Agency in ${location.name}`;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />

        {/* Strong overlay + gradient (THIS is what fixes readability) */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* LEFT: readable panel */}
            <div className="rounded-2xl bg-black/55 backdrop-blur-md p-8 border border-white/10">
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                SEO Agency in{' '}
                <span className="text-brand">{location.name}</span>
              </h1>

              <p className="mt-4 text-white/80">
                Competing for organic search visibility in {location.name} means
                going up against well-resourced competitors. Our SEO campaigns
                combine technical excellence, strategic content, and authoritative
                link building to drive measurable results.
              </p>

              <p className="mt-4 text-white/80">
                Since 2011, we’ve helped businesses climb to the top of Google’s
                results. Whether you’re local, national, or scaling fast — we’ll
                build a plan that generates traffic, leads, and revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
                >
                  Get Your Free Audit →
                </a>

                <a
                  href="tel:+442080000000"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>

            {/* RIGHT: Form (solid card already) */}
            <div id="lead-form" className="lg:justify-self-end w-full max-w-xl">
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

      {/* REST OF PAGE (optional placeholder) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">SEO Services in {location.name}</h2>
        <p className="mt-3 text-text-secondary">
          Add your location-specific sections here (case studies, FAQs, process,
          etc).
        </p>

        <div className="mt-8">
          <Link href="/contact" className="text-brand font-semibold hover:underline">
            Or contact us directly →
          </Link>
        </div>
      </section>
    </main>
  );
}
