import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'SEO by Industry | Extra Edge Club',
  description: 'Specialist SEO for law firms, financial services, and e-commerce. Industry-specific strategies built on 14 years of niche experience.',
};

const industries = [
  {
    slug: 'legal-seo',
    name: 'Legal SEO',
    label: 'Solicitors · Law Firms · Barristers',
    stat: '4.2×',
    statLabel: 'avg. case enquiry increase',
    desc: 'Legal clients search with high intent and convert at premium rates. We help UK law firms dominate Google for their practice areas.',
    caseStudy: { name: 'Makwana Solicitors', slug: 'makwana-solicitors' },
  },
  {
    slug: 'financial-seo',
    name: 'Financial SEO',
    label: 'Accountants · IFAs · Fintech',
    stat: '312%',
    statLabel: 'avg. organic traffic increase',
    desc: 'Financial services searchers are ready to commit. We build E-E-A-T authority and ranking positions that turn clicks into consultations.',
    caseStudy: { name: 'Tidy Money', slug: 'tidy-money' },
  },
  {
    slug: 'dental-seo',
    name: 'Dental SEO',
    label: 'Dentists · Invisalign Providers · Dental Groups',
    stat: '£850+',
    statLabel: 'avg. Invisalign treatment value',
    desc: "Healthcare content is held to Google's strictest YMYL standards. We build the E-E-A-T authority, treatment page architecture, and local pack dominance that dental practices need to win.",
    caseStudy: { name: 'See our dental methodology', slug: 'dental-seo' },
  },
  {
    slug: 'accountancy-seo',
    name: 'Accountancy SEO',
    label: 'Accountants · Tax Advisors · Bookkeepers',
    stat: '36',
    statLabel: 'London boroughs ranked across our accountancy network',
    desc: 'Niche service pages, hyper-local borough targeting, and E-E-A-T authority for UK accounting firms. We rank for the specific client types — landlords, contractors, e-commerce — that convert at the highest rate.',
    caseStudy: { name: 'Tidy Money', slug: 'tidy-money' },
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-Commerce SEO',
    label: 'Shopify · WooCommerce · DTC Brands',
    stat: '200+',
    statLabel: 'product pages ranked page 1',
    desc: 'Revenue-focused SEO for online stores. Category architecture, product schema, and content that converts browsers into buyers.',
    caseStudy: { name: 'FireStar Toys', slug: 'firestar-toys' },
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Industry Expertise</p>
        <h1 className="v1-headline" style={{ fontSize: 'clamp(56px,8vw,100px)', color: '#111110', maxWidth: 800, marginBottom: 24 }}>
          SEO that speaks<br /><span style={{ color: '#e85d26' }}>your industry.</span>
        </h1>
        <p className="v1-body" style={{ fontSize: 16, color: '#888', maxWidth: 560, lineHeight: 1.7 }}>
          Generic SEO doesn't win competitive niches. We bring 14 years of sector-specific experience — proven in case studies, not promises.
        </p>
      </section>

      {/* Industry cards */}
      {industries.map((ind, i) => (
        <section
          key={ind.slug}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            borderBottom: '3px solid #111110',
            background: i % 2 === 0 ? '#ffffff' : '#f7f5f0',
          }}
        >
          <div style={{ padding: 'clamp(40px,5vw,72px) clamp(24px,5vw,64px)', borderRight: '3px solid #111110' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 12 }}>{ind.label}</p>
            <h2 className="v1-headline" style={{ fontSize: 'clamp(48px,6vw,72px)', color: '#111110', marginBottom: 16 }}>
              {ind.name}
            </h2>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              {ind.desc}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={`/industries/${ind.slug}/`} className="btn-fill">See the approach →</Link>
              <Link href={ind.slug === 'dental-seo' || ind.slug === 'accountancy-seo' ? `/industries/${ind.caseStudy.slug}/` : `/case-studies/${ind.caseStudy.slug}/`} className="btn-out">{ind.caseStudy.name} case study</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(40px,5vw,72px) clamp(24px,5vw,64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="v1-headline" style={{ fontSize: 'clamp(72px,10vw,112px)', color: '#e85d26', lineHeight: 1 }}>{ind.stat}</div>
            <div className="v1-label" style={{ fontSize: 12, color: '#888', marginTop: 8, letterSpacing: '0.18em' }}>{ind.statLabel}</div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not sure which fits?"
        description="Tell us about your business and we'll map out the right strategy — free, no obligation."
        buttonText="Get Your Free Audit →"
        buttonLink="/contact/"
      />
    </>
  );
}
