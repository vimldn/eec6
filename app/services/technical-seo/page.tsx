import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Technical SEO Agency UK | Extra Edge Club',
  description: 'Technical SEO for UK businesses — Core Web Vitals, schema markup, crawl optimisation, and site architecture. The foundation every content strategy depends on.',
};

const services = [
  { n: '01', title: 'Core Web Vitals', desc: 'LCP, CLS, and INP fixes at the asset level. We identify the specific images, scripts, and layout shifts costing you rankings — and fix them.' },
  { n: '02', title: 'Schema Markup', desc: 'JSON-LD implementation for LocalBusiness, FAQ, Review, Product, Article, and more. Server-side rendering to ensure Googlebot reads every tag.' },
  { n: '03', title: 'Crawl Optimisation', desc: 'Fixing crawl budget waste — duplicate content, redirect chains, orphaned pages, and incorrectly blocked resources eating into your crawl allocation.' },
  { n: '04', title: 'Site Architecture', desc: 'URL structure, internal linking, canonical configuration, and pagination — designed so authority flows to the pages that need it most.' },
  { n: '05', title: 'International SEO', desc: 'Hreflang implementation, geo-targeting, and ccTLD strategy for businesses operating across UK, EU, and international markets.' },
  { n: '06', title: 'Migration Support', desc: 'Domain migrations, CMS changes, and URL restructures — with 301 redirect mapping and post-migration monitoring to protect your rankings.' },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Service</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,88px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              Technical<br /><span style={{ color: '#e85d26' }}>SEO</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Content doesn&apos;t rank without a sound technical foundation. Crawlability, site speed, schema, internal architecture — these are the factors Google resolves before it even looks at your copy. We fix the foundations first.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Get a Technical SEO Review →</Link>
              <Link href="/services/seo-audit/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>View full audit service</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
            {[['312%', 'Avg. traffic increase after technical fix'], ['48hr', 'Issue audit turnaround'], ['14', 'Years of technical SEO']].map(([stat, label], i) => (
              <div key={i} style={{ paddingBottom: 28, marginBottom: 28, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(52px,7vw,80px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What We Fix</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The technical SEO stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {services.map((s) => (
            <div key={s.n} style={{ padding: '32px 36px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#ffffff' }}>
              <div className="v1-headline" style={{ fontSize: 52, color: '#ece8e0', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 10, letterSpacing: '0.1em' }}>{s.title}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Free technical<br /><span style={{ color: '#e85d26' }}>SEO review</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            Share your URL. We&apos;ll run a crawl, check your Core Web Vitals, and give you a summary of the top issues — free, before any engagement begins.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Technical SEO" title="" variant="light" buttonText="Request Free Technical Review" />
        </div>
      </section>

      <CTASection title="Fix the foundation first" description="Everything else — content, links, authority — depends on a crawlable, fast, correctly structured site." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
