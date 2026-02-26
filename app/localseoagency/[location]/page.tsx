import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';

type LocationData = {
  slug: string;
  name: string;
  image: string;
  population: string;
  businesses: string;
  searchVolume: string;
  description: string;
  keyIndustries: string[];
  landmarks: string[];
};

const LOCATIONS: LocationData[] = [
  {
    slug: 'golders-green',
    name: 'Golders Green',
    image: '/images/locations/golders-green.webp',
    population: '23K+',
    businesses: '1,200+',
    searchVolume: '18K+',
    description:
      'Golders Green is a high-intent local market with strong demand for professional services, clinics, trades, and retail. Local search visibility is critical for capturing calls, map pack clicks, and in-store visits.',
    keyIndustries: ['Clinics', 'Trades', 'Restaurants', 'Retail', 'Professional Services'],
    landmarks: ['Golders Green Station', 'Hampstead Heath (nearby)', 'Golders Hill Park'],
  },
  {
    slug: 'camden',
    name: 'Camden',
    image: '/images/locations/camden.webp',
    population: '41K+',
    businesses: '2,500+',
    searchVolume: '32K+',
    description:
      'Camden is one of London’s most competitive local markets. Ranking in the map pack and improving local organic visibility can make the difference between steady walk-ins and being invisible to customers searching nearby.',
    keyIndustries: ['Hospitality', 'Retail', 'Entertainment', 'Professional Services', 'Trades'],
    landmarks: ['Camden Market', 'Regent’s Canal', 'Roundhouse'],
  },
  {
    slug: 'kensington',
    name: 'Kensington',
    image: '/images/locations/kensington.webp',
    population: '28K+',
    businesses: '1,900+',
    searchVolume: '26K+',
    description:
      'Kensington is a premium local area where consumers search with high intent. Local SEO helps you win map pack placements, increase calls, and convert searchers into booked appointments and visits.',
    keyIndustries: ['Medical', 'Legal', 'Real Estate', 'Luxury Retail', 'Hospitality'],
    landmarks: ['Kensington High Street', 'Kensington Gardens', 'Royal Albert Hall (nearby)'],
  },
  {
    slug: 'islington',
    name: 'Islington',
    image: '/images/locations/islington.webp',
    population: '39K+',
    businesses: '2,200+',
    searchVolume: '29K+',
    description:
      'Islington has a dense concentration of businesses competing for the same “near me” searches. A strong Google Business Profile and review strategy can push you into the map pack and improve lead volume quickly.',
    keyIndustries: ['Restaurants', 'Trades', 'Fitness', 'Clinics', 'Professional Services'],
    landmarks: ['Angel', 'Upper Street', 'Emirates Stadium (nearby)'],
  },
];

function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const dynamicParams = false;

// Required for output: "export"
export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Not Found' };

  return {
    title: `Local SEO Agency in ${location.name} | Extra Edge Club`,
    description: `Local SEO services in ${location.name}. Rank in Google Maps, get more calls, and generate more local leads with proven Local SEO.`,
  };
}

export default function LocalSeoLocationPage({
  params,
}: {
  params: { location: string };
}) {
  const location = getLocationBySlug(params.location);
  if (!location) notFound();

  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

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
            <Link
              href="/localseoagency/"
              className="hover:text-white transition-colors"
            >
              Local SEO
            </Link>
            <span className="mx-2">→</span>
            <span className="text-brand">{location.name}</span>
          </nav>
        </div>
      </div>

     
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image that ALWAYS exists (you control HERO_IMAGE) */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Local SEO hero background"
            className="h-full w-full object-cover object-center"
          />

          {/* Darkness control: edit these values */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/90 to-black/90" />
        </div>

        <div className="relative z-10 px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-start">
            {/* LEFT */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Local SEO Agency in{' '}
                <span className="text-brand underline decoration-brand/30">
                  {location.name}
                </span>
              </h1>

              <div className="space-y-5">
                <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  If customers in {location.name} are searching for your service, you want to show up
                  in the Google Map Pack and the top organic results. We help businesses in{' '}
                  {location.name} increase visibility, calls, and bookings with a proven Local SEO
                  system.
                </p>

                <p className="text-white text-base md:text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  From Google Business Profile optimization to citations, reviews, and location pages,
                  we focus on what actually moves rankings and drives real leads — not vanity metrics.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
                >
                  Get Your Free Local Audit
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  'Google Business Profile optimization',
                  'Map pack ranking improvements',
                  'Local citations & NAP consistency',
                  'Review strategy & conversion boosts',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
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

      {/* Stats strip */}
      <section className="px-6 py-10 bg-dark-lighter border-y border-white/[0.08]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
            <div className="text-3xl font-bold text-brand">{location.population}</div>
            <div className="text-sm text-text-secondary mt-1">Population</div>
          </div>
          <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
            <div className="text-3xl font-bold text-brand">{location.businesses}</div>
            <div className="text-sm text-text-secondary mt-1">Businesses</div>
          </div>
          <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
            <div className="text-3xl font-bold text-brand">{location.searchVolume}</div>
            <div className="text-sm text-text-secondary mt-1">Monthly Local Searches</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-18 md:py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-wider text-brand mb-3">
              About {location.name}
            </p>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Local search competition in {location.name}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {location.description}
            </p>

            <p className="text-text-muted leading-relaxed mt-4">
              Local SEO isn’t just rankings — it’s calls, direction requests, and booked jobs. We
              improve the signals Google uses to rank local businesses: proximity relevance signals,
              authority, content, reviews, and consistent listings.
            </p>
          </div>

          <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Key industries in {location.name}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {location.keyIndustries.map((industry) => (
                <span
                  key={industry}
                  className="bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Notable landmarks</h3>
            <ul className="space-y-2">
              {location.landmarks.map((landmark) => (
                <li key={landmark} className="flex items-center gap-3 text-text-muted">
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
      </section>

      {/* More locations */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold mb-6">More Local SEO Locations</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/localseoagency/${l.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="font-semibold text-lg mb-1">{l.name}</div>
                <div className="text-sm text-text-secondary">Local SEO services in {l.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
