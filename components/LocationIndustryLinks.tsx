import Link from 'next/link';

interface Props {
  locationName: string;
}

const industries = [
  {
    href: '/industries/legal-seo/',
    label: 'Legal SEO',
    eyebrow: 'Solicitors · Law Firms · Barristers',
    desc: (loc: string) =>
      `Running a legal practice in ${loc}? We rank solicitors and law firms for high-intent practice area terms — from criminal defence to employment law. See how we took Makwana Solicitors from zero organic presence to page one.`,
    caseStudy: { label: 'Makwana Solicitors case study →', href: '/case-studies/makwana-solicitors/' },
    stat: '8×',
    statLabel: 'close rate vs cold leads',
  },
  {
    href: '/industries/accountancy-seo/',
    label: 'Accountancy & Financial SEO',
    eyebrow: 'Accountants · IFAs · Fintech',
    desc: (loc: string) =>
      `Accountancy and financial services searches convert at a premium in ${loc}. We build E-E-A-T authority and local pack dominance for firms targeting everything from self-assessment to business tax planning.`,
    caseStudy: { label: 'Tidy Money case study →', href: '/case-studies/tidy-money/' },
    stat: '312%',
    statLabel: 'avg. organic traffic increase',
  },
  {
    href: '/industries/ecommerce-seo/',
    label: 'E-Commerce SEO',
    eyebrow: 'Shopify · WooCommerce · DTC Brands',
    desc: (loc: string) =>
      `Operating an online store based in ${loc}? We build the category architecture, product schema, and content strategy that lets independent retailers compete with Amazon and category giants on organic search.`,
    caseStudy: { label: 'FireStar Toys case study →', href: '/case-studies/firestar-toys/' },
    stat: '200+',
    statLabel: 'product pages ranked page one',
  },
  {
    href: '/industries/dental-seo/',
    label: 'Healthcare & Dental SEO',
    eyebrow: 'Dentists · Clinics · Medical Practices',
    desc: (loc: string) =>
      `Healthcare is Google's most scrutinised YMYL category. We build the E-E-A-T foundations, local schema, and Google Business Profile authority that clinical practices in ${loc} need to rank in a trust-gated niche.`,
    caseStudy: { label: 'View our dental SEO approach →', href: '/industries/dental-seo/' },
    stat: '4.2×',
    statLabel: 'avg. enquiry increase',
  },
];

export default function LocationIndustryLinks({ locationName }: Props) {
  return (
    <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110' }}>
      {/* Section header */}
      <div style={{ padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px) 0', borderBottom: '1px solid #ddd' }}>
        <p className="section-label">SEO by Industry in {locationName}</p>
        <h2
          className="v1-headline"
          style={{ fontSize: 'clamp(36px,5vw,56px)', color: '#111110', paddingBottom: 'clamp(28px,3vw,40px)' }}
        >
          What kind of business are<br />
          you growing in <span style={{ color: '#e85d26' }}>{locationName}</span>?
        </h2>
      </div>

      {/* Industry rows */}
      {industries.map((ind, i) => (
        <div
          key={ind.href + i}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            borderBottom: i < industries.length - 1 ? '1px solid #ddd' : 'none',
            background: i % 2 === 0 ? '#f7f5f0' : '#ffffff',
          }}
        >
          {/* Left — content */}
          <div
            style={{
              padding: 'clamp(28px,4vw,48px) clamp(24px,4vw,56px)',
              borderRight: '1px solid #ddd',
            }}
          >
            <p className="v1-label" style={{ fontSize: 10, color: '#e85d26', marginBottom: 10 }}>
              {ind.eyebrow}
            </p>
            <h3
              className="v1-headline"
              style={{ fontSize: 'clamp(28px,3.5vw,40px)', color: '#111110', marginBottom: 14 }}
            >
              {ind.label}
            </h3>
            <p
              className="v1-body"
              style={{ fontSize: 14, color: '#888', lineHeight: 1.7, maxWidth: 480, marginBottom: 20 }}
            >
              {ind.desc(locationName)}
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href={ind.href} className="btn-fill" style={{ fontSize: 12, padding: '10px 20px' }}>
                See our {ind.label} approach →
              </Link>
              <Link
                href={ind.caseStudy.href}
                className="btn-out"
                style={{ fontSize: 12, padding: '10px 20px' }}
              >
                {ind.caseStudy.label}
              </Link>
            </div>
          </div>

          {/* Right — stat */}
          <div
            style={{
              padding: 'clamp(28px,4vw,48px) clamp(24px,4vw,48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              className="v1-headline"
              style={{ fontSize: 'clamp(56px,8vw,88px)', color: '#e85d26', lineHeight: 1 }}
            >
              {ind.stat}
            </div>
            <div
              className="v1-label"
              style={{ fontSize: 11, color: '#888', marginTop: 8, letterSpacing: '0.18em' }}
            >
              {ind.statLabel}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
