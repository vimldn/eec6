import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Case Studies | SEO Success Stories',
  description: 'See how Extra Edge Club has helped UK businesses grow through SEO. Real results from real clients.',
};

const caseStudies = [
  {
    client: 'Sixes Cricket',
    type: 'National Brand',
    industry: 'Entertainment & Hospitality',
    challenge: 'Sixes Cricket needed to build organic visibility for a new entertainment concept with multiple UK locations.',
    results: [
      '312% increase in organic traffic',
      'Page 1 rankings for key terms',
      'Significant growth in bookings'
    ],
    services: ['SEO', 'Local SEO'],
  },
  {
    client: "The Gentleman's Journal",
    type: 'National Brand',
    industry: 'Media & Publishing',
    challenge: 'A luxury lifestyle publication looking to increase organic traffic and compete with established media brands.',
    results: [
      '450% increase in organic sessions',
      'Featured snippets for key topics',
      'Strong domain authority growth'
    ],
    services: ['SEO', 'Content Strategy'],
  },
  {
    client: 'FireStar Toys',
    type: 'National Brand',
    industry: 'E-commerce',
    challenge: 'An e-commerce retailer needed to improve category and product page rankings in a competitive market.',
    results: [
      '280% increase in organic revenue',
      'Top 3 rankings for key products',
      'Improved conversion rates'
    ],
    services: ['SEO', 'Technical SEO'],
  },
  {
    client: 'Tidy Money',
    type: 'Local Business',
    industry: 'Financial Services',
    challenge: 'A Manchester-based financial services company struggling to appear in local search results.',
    results: [
      'Top 3 local pack rankings',
      '3x increase in enquiries',
      '4.8 star Google rating'
    ],
    services: ['Local SEO'],
  },
  {
    client: 'Makwana Solicitors',
    type: 'Local Business',
    industry: 'Legal Services',
    challenge: 'A law firm in London needing to stand out in a highly competitive local legal market.',
    results: [
      'Page 1 rankings for practice areas',
      '150% increase in organic leads',
      'Improved Google Business Profile visibility'
    ],
    services: ['Local SEO', 'SEO'],
  },
  {
    client: 'Total Shred',
    type: 'Local Business',
    industry: 'Document Destruction',
    challenge: 'A document shredding company wanting to dominate local search across multiple service areas.',
    results: [
      'Local pack rankings in 15+ cities',
      '200% increase in quote requests',
      'Expanded service area visibility'
    ],
    services: ['Local SEO'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Real results from <span className="text-brand">real clients</span>
          </h1>
          <p className="text-xl text-text-secondary">
            See how we've helped UK businesses grow through SEO. From national brands to local businesses, these are the results that matter.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 py-10 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <div key={i} className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 hover:border-brand/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${study.type === 'National Brand' ? 'bg-brand/20 text-brand' : 'bg-white/10 text-text-secondary'}`}>
                  {study.type}
                </span>
                <span className="text-xs text-text-secondary">{study.industry}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{study.client}</h2>
              <p className="text-text-secondary mb-6">{study.challenge}</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-brand mb-3">Results</h3>
                <ul className="space-y-2">
                  {study.results.map((result, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-brand mt-0.5">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {study.services.map((service, j) => (
                  <span key={j} className="text-xs bg-white/5 px-3 py-1 rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">The Numbers That Matter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '312%', label: 'Average traffic increase' },
              { number: '200+', label: 'Clients served' },
              { number: '£4.2M', label: 'Revenue generated' },
              { number: '14', label: 'Years experience' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Want results like these?"
        description="Get in touch for a free SEO audit and see what we can do for your business."
        buttonText="Get Your Free Audit"
        buttonLink="/contact/"
      />
    </>
  );
}
