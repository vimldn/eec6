import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'SEO Services UK | Extra Edge Club',
  description: 'Specialist SEO services — from programmatic location pages at scale to deep technical audits and lead generation architecture. 14 years of proven results.',
};

const services = [
  {
    slug: 'programmatic-seo',
    name: 'Programmatic SEO',
    label: 'Scale · Location Pages · Dynamic Content',
    stat: '100+', statLabel: 'pages ranked per client',
    desc: 'Building scalable page architectures that rank across hundreds of locations, categories, or queries — without sacrificing quality or triggering spam filters.',
  },
  {
    slug: 'seo-audit',
    name: 'Technical SEO Audit',
    label: 'Deep-Dive · Actionable · Prioritised',
    stat: '48hr', statLabel: 'turnaround on full audits',
    desc: 'A forensic audit of your site\'s technical health, content architecture, and backlink profile — with a prioritised fix list ordered by commercial impact.',
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    label: 'Core Web Vitals · Schema · Crawlability',
    stat: '312%', statLabel: 'avg. traffic increase post-fix',
    desc: 'The technical foundation everything else depends on. Crawl budget, schema markup, site speed, international routing — fixed and maintained.',
  },
  {
    slug: 'lead-gen-architecture',
    name: 'Lead-Gen Architecture',
    label: 'Affiliate · Lead Capture · Niche Networks',
    stat: '£4.2M', statLabel: 'revenue generated for clients',
    desc: 'Consulting and build on how to structure lead generation and affiliate websites that rank, convert, and scale — across any niche.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What We Do</p>
        <h1 className="v1-headline" style={{ fontSize: 'clamp(56px,8vw,100px)', color: '#111110', maxWidth: 800, marginBottom: 24 }}>
          Specialist SEO.<br /><span style={{ color: '#e85d26' }}>No generalists.</span>
        </h1>
        <p className="v1-body" style={{ fontSize: 16, color: '#888', maxWidth: 560, lineHeight: 1.7 }}>
          Every service we offer is something we&apos;ve built proprietary methodology around — proven across 14 years and hundreds of client campaigns.
        </p>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            borderBottom: '3px solid #111110',
            background: i % 2 === 0 ? '#ffffff' : '#f7f5f0',
          }}
        >
          <div style={{ padding: 'clamp(40px,5vw,72px) clamp(24px,5vw,64px)', borderRight: '3px solid #111110' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 12 }}>{s.label}</p>
            <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 16 }}>{s.name}</h2>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7, maxWidth: 460, marginBottom: 32 }}>{s.desc}</p>
            <Link href={`/services/${s.slug}/`} className="btn-fill">See the full approach →</Link>
          </div>
          <div style={{ padding: 'clamp(40px,5vw,72px) clamp(24px,5vw,64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="v1-headline" style={{ fontSize: 'clamp(64px,10vw,104px)', color: '#e85d26', lineHeight: 1 }}>{s.stat}</div>
            <div className="v1-label" style={{ fontSize: 12, color: '#888', marginTop: 8, letterSpacing: '0.18em' }}>{s.statLabel}</div>
          </div>
        </section>
      ))}

      <CTASection title="Not sure which service fits?" description="Tell us about your site and goals — we'll map out exactly where to start." buttonLink="/contact/" buttonText="Get Your Free Audit →" />
    </>
  );
}
