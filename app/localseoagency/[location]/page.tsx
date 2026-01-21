import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';

interface PageProps {
  params: { location: string };
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Not Found' };

  return {
    title: `Local SEO Agency ${location.name} | Local SEO Services ${location.name}`,
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/localseoagency/" className="hover:text-white transition-colors">Local SEO</Link>
            <span className="mx-2">→</span>
            <span className="text-brand">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero with Location Image */}
      <section className="relative min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={location.image}
            alt={`Local SEO Agency ${location.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-16 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Local SEO Agency in <span className="text-brand underline decoration-brand/30">{location.name}</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mb-4 leading-relaxed">
              Competing for local search visibility in {location.name} means standing out among {location.businesses} businesses all vying for the same customers. Our {location.name} local SEO campaigns are built for this level of competition—combining Google Business Profile mastery, strategic citation building, and review generation systems that deliver measurable results.
            </p>
            <p className="text-lg text-text-muted max-w-3xl mb-8 leading-relaxed">
              Since 2011, we've helped {location.name} businesses climb to the top of Google Maps and the local pack. Whether you're a restaurant looking to fill tables, a tradesperson seeking local jobs, or a professional service firm targeting {location.name} clients, our proven local SEO methodology drives the calls, leads, and footfall that grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
              >
                Get Your Free Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="tel:+442012345678"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 px-6 py-3.5 rounded-lg font-semibold transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
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
            <p className="text-xs uppercase tracking-wider text-brand mb-3">About {location.name}</p>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              The {location.name} Business Landscape
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{location.description}</p>
              <p>{location.businessLandscape}</p>
              <p>
                For businesses operating in {location.name}, local visibility isn't just important—it's essential for survival and growth. The combination of high foot traffic, discerning consumers, and intense competition creates an environment where being found in local search can make or break a business.
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
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO in this Area */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Why Local SEO Matters</p>
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Why Your {location.name} Business Needs Local SEO
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed text-lg">
            <p>{location.whyLocalSeo}</p>
            <p>
              The reality is simple: when potential customers in {location.name} search for products or services you offer, you're either visible or you're not. There's no middle ground in local search. Our job is to ensure that when someone searches for what you offer, your business appears prominently—in the Map Pack, in local organic results, and with the kind of reviews and ratings that convert browsers into buyers.
            </p>
            <p>
              We've seen {location.name} businesses transform their customer acquisition through local SEO. Restaurants that went from empty tables to waitlists. Tradespeople who stopped chasing leads and started choosing jobs. Professional service firms that became the go-to choice in their area. This isn't magic—it's methodology, and it works.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '46%', label: 'of all Google searches have local intent', desc: 'Nearly half of search users are looking for local businesses like yours.' },
              { number: '78%', label: 'of local searches result in purchase', desc: 'Local searchers are ready to buy—they just need to find you.' },
              { number: '92%', label: 'choose businesses on page 1', desc: 'If you\'re not visible, you\'re losing to competitors who are.' }
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

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">What's Included</p>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Our Local SEO Services in {location.name}
          </h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            Every {location.name} local SEO campaign includes these core services, tailored to your specific industry and competitive landscape.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Google Business Profile Optimisation',
                desc: `Complete setup and optimisation of your GBP listing to rank in the ${location.name} local pack. We optimise every field, add compelling photos, craft keyword-rich descriptions, and ensure your profile converts viewers into customers. This is the foundation of local visibility.`
              },
              {
                title: 'Local Citation Building',
                desc: `Build consistent NAP listings across 100+ UK directories relevant to ${location.name} businesses. Consistent citations signal trust to Google and improve your local rankings. We audit existing citations, fix inconsistencies, and build new ones strategically.`
              },
              {
                title: 'Review Generation System',
                desc: `Automated system to generate more 5-star reviews from your ${location.name} customers. We implement review request sequences, respond to reviews professionally, and help you build the social proof that converts searchers into buyers. Reviews are local ranking factors—and they drive conversions.`
              },
              {
                title: 'Local Content Strategy',
                desc: `Location-specific pages and content targeting "${location.name}" keywords. We create content that ranks for the searches your local customers actually make—from service pages to blog posts that establish your expertise in the ${location.name} market.`
              },
              {
                title: 'Local Link Building',
                desc: `Earn links from ${location.name} businesses, community sites, and local directories. Local backlinks are a powerful ranking factor for area-specific searches. We identify opportunities and build relationships that generate authoritative local links.`
              },
              {
                title: 'Monthly Reporting',
                desc: `Clear monthly reports showing your ${location.name} rankings, traffic, calls, and leads. We track what matters: customers and revenue, not just rankings. You'll see exactly how your local SEO investment is paying off—and where we're focusing next.`
              }
            ].map((service, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6 flex gap-4">
                <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3 text-center">FAQs</p>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Local SEO Questions for {location.name} Businesses
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: `How much does local SEO cost in ${location.name}?`,
                a: `Our ${location.name} local SEO packages start from £500/month. The exact cost depends on your competition level, number of locations, and goals. ${location.name} can be competitive depending on your industry, so we'll give you a clear quote after analysing your specific situation in your free audit. We believe in transparent pricing with no hidden fees.`
              },
              {
                q: `How long does it take to rank locally in ${location.name}?`,
                a: `Most ${location.name} businesses see significant improvements within 3-6 months. Factors like your current online presence, competition level in your industry, and the quality of your existing Google Business Profile all affect timeline. We'll give you realistic expectations based on your specific market—not empty promises.`
              },
              {
                q: `What types of businesses do you work with in ${location.name}?`,
                a: `We work with all types of local businesses in ${location.name}, including restaurants and cafes, professional services (lawyers, accountants, consultants), healthcare providers, retail shops, tradespeople (plumbers, electricians, builders), beauty and wellness, and more. If you serve customers in ${location.name} and want more of them finding you online, we can help.`
              },
              {
                q: `Do I need a physical location in ${location.name}?`,
                a: `You either need a physical location where customers can visit you in ${location.name}, or you need to serve ${location.name} as part of your service area. Google Business Profile supports both models—storefronts and service-area businesses. We'll advise on the best approach for your specific business and help you set up correctly.`
              },
              {
                q: `What makes Extra Edge Club different from other ${location.name} SEO agencies?`,
                a: `We've been doing this since 2011—longer than most agencies have existed. We focus on results that matter: calls, leads, and revenue. Not vanity metrics. We're transparent about what works, what doesn't, and what you can realistically expect in the ${location.name} market. And we don't lock you into long contracts—our results speak for themselves.`
              }
            ].map((faq, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-semibold mb-3">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Other Areas We Serve</p>
          <h2 className="text-2xl font-bold mb-8">Local SEO Services Across London</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/localseoagency/${loc.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-lg p-4 hover:border-brand transition-colors text-center"
              >
                <span className="text-sm font-medium">{loc.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/localseoagency/" className="text-brand hover:underline text-sm font-medium">
              View all London areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={`Ready to dominate local search in ${location.name}?`}
        description={`Get a free local SEO audit and discover how we can help your ${location.name} business attract more local customers.`}
        buttonText="Get Your Free Audit"
      />
    </>
  );
}
