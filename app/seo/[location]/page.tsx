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
    title: `SEO Agency ${location.name} | SEO Services ${location.name}`,
    description: `Expert SEO services in ${location.name}. We help ${location.name} businesses increase organic traffic, outrank competitors, and drive sustainable growth through search.`,
  };
}

export default function SEOLocationPage({ params }: PageProps) {
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
            <Link href="/seo/" className="hover:text-white transition-colors">SEO</Link>
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
            alt={`SEO Agency ${location.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-16 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              SEO Agency in <span className="text-brand underline decoration-brand/30">{location.name}</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mb-4 leading-relaxed">
              Competing for organic search visibility in {location.name} means going up against some of the most well-resourced companies in the world. Our {location.name} SEO campaigns are built for this level of competition—combining technical excellence, strategic content, and authoritative link building that delivers measurable results.
            </p>
            <p className="text-lg text-text-muted max-w-3xl mb-8 leading-relaxed">
              Since 2011, we've helped {location.name} businesses climb to the top of Google's organic results. Whether you're an e-commerce brand seeking national visibility, a professional service firm targeting {location.name} clients, or a growing startup ready to scale, our proven SEO methodology drives the traffic, leads, and revenue that fuel growth.
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
                For businesses operating in {location.name}, organic search visibility isn't just important—it's a critical competitive advantage. The combination of sophisticated consumers, high transaction values, and intense competition creates an environment where ranking well on Google directly impacts the bottom line.
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
              Beyond local searches, {location.name} businesses compete for broader commercial keywords. Whether your customers search for specific services, compare options, or research before buying, SEO ensures you're visible at every stage of their journey. The compounding nature of SEO means that investment today continues paying dividends for years, delivering lower cost-per-acquisition than any other marketing channel.
            </p>
            <p>
              We've helped {location.name} businesses achieve transformative growth through organic search. E-commerce brands that scaled from £500k to £5m. Professional service firms that became the dominant voice in their niche. B2B companies that built sustainable lead pipelines. This isn't theory—it's what we do, every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '5.7x', label: 'higher close rate vs outbound', desc: 'SEO leads are actively looking for what you offer.' },
              { number: '53%', label: 'of traffic comes from organic search', desc: 'More than half of all website traffic starts with search.' },
              { number: '14.6%', label: 'close rate for SEO leads', desc: 'Compared to just 1.7% for outbound leads.' }
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
            Our SEO Services in {location.name}
          </h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            Every {location.name} SEO campaign includes these core services, tailored to your specific industry and competitive landscape.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Technical SEO Audit & Fixes',
                desc: `Comprehensive audit of your website's technical health including site speed, mobile responsiveness, crawlability, and indexation. We identify and fix issues holding back your ${location.name} business from ranking—from Core Web Vitals to structured data implementation.`
              },
              {
                title: 'On-Page Optimisation',
                desc: `Optimise titles, meta descriptions, headings, and content for keywords that ${location.name} customers actually search. We ensure every page has the best possible chance of ranking, with compelling copy that converts visitors into customers.`
              },
              {
                title: 'Content Strategy & Creation',
                desc: `Data-driven content plan targeting keywords with real search volume and commercial intent. We create content that ranks, engages, and converts ${location.name} visitors into customers—from cornerstone guides to targeted landing pages.`
              },
              {
                title: 'Link Building & Digital PR',
                desc: `Earn high-quality backlinks through strategic outreach, digital PR, and content marketing. We build the authority your ${location.name} business needs to outrank competitors—through relationships, not shortcuts.`
              },
              {
                title: 'Competitor Analysis',
                desc: `Deep analysis of what's working for your ${location.name} competitors. We identify gaps and opportunities to develop strategies that help you win market share—understanding their strengths, exploiting their weaknesses.`
              },
              {
                title: 'Monthly Reporting & ROI Tracking',
                desc: `Transparent reporting on rankings, traffic, conversions, and return on investment. We track what matters: revenue growth, not just vanity metrics. You'll see exactly how your SEO investment translates to business growth.`
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
            SEO Questions for {location.name} Businesses
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: `How much does SEO cost in ${location.name}?`,
                a: `Our SEO packages for ${location.name} businesses typically range from £800-£3,000/month depending on competition, site size, and goals. The investment level depends on how competitive your industry is in ${location.name}. We'll recommend the right approach after auditing your site and market—no cookie-cutter packages, just what makes sense for your situation.`
              },
              {
                q: `How long until I see SEO results?`,
                a: `SEO is a medium to long-term strategy. Most ${location.name} businesses see meaningful improvements within 4-6 months, with results compounding over time. Quick wins are possible through technical fixes, but sustainable ranking improvements take consistent effort. We set realistic expectations from day one—no empty promises.`
              },
              {
                q: `Can you guarantee first page rankings?`,
                a: `No legitimate SEO agency can guarantee specific rankings—Google's algorithm constantly evolves and no one outside Google knows exactly how it works. What we do guarantee is a proven process, transparent reporting, and a focus on revenue, not just rankings. We've been delivering results for ${location.name} businesses since 2011.`
              },
              {
                q: `What's the difference between SEO and Local SEO?`,
                a: `Local SEO focuses on appearing in Google Maps and local pack results for "${location.name}" searches. General SEO targets broader organic rankings for commercial keywords regardless of location. Most ${location.name} businesses benefit from both—we can advise on the right mix for your specific situation.`
              },
              {
                q: `Do you work with businesses in my industry?`,
                a: `We work with ${location.name} businesses across virtually all industries—from professional services and healthcare to e-commerce and hospitality. The principles of SEO apply across sectors; we tailor our approach to your specific competitive landscape and customer journey. If you're serious about growth, we can help.`
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
          <h2 className="text-2xl font-bold mb-8">SEO Services Across London</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/seo/${loc.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-lg p-4 hover:border-brand transition-colors text-center"
              >
                <span className="text-sm font-medium">{loc.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/seo/" className="text-brand hover:underline text-sm font-medium">
              View all London areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={`Ready to grow your organic traffic in ${location.name}?`}
        description={`Get a free SEO audit and discover untapped opportunities to outrank your ${location.name} competitors.`}
        buttonText="Get Your Free Audit"
      />
    </>
  );
}
