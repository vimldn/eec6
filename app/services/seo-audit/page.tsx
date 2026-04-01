import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Technical SEO Audit UK | Extra Edge Club',
  description: 'A forensic technical SEO audit with every issue prioritised by commercial impact. Crawl health, Core Web Vitals, content gaps, backlink analysis — delivered in 48 hours.',
};

const auditSections = [
  { n: '01', title: 'Crawl & Indexation', desc: 'Crawl budget waste, orphaned pages, soft 404s, blocked resources, noindex conflicts, and sitemap accuracy.' },
  { n: '02', title: 'Core Web Vitals', desc: 'LCP, CLS, and INP measured on real-world URLs. Specific asset-level fixes — not just "compress your images".' },
  { n: '03', title: 'On-Page Architecture', desc: 'Title tag patterns, heading hierarchy, internal link equity distribution, and canonical configuration.' },
  { n: '04', title: 'Schema & Structured Data', desc: 'Validation of all existing schema. Identification of missing markup types for your content category (LocalBusiness, FAQ, Review, Product, etc.).' },
  { n: '05', title: 'Content Gap Analysis', desc: 'Keyword clusters you should rank for but don\'t. Pages that are cannibalising each other. Thin content dragging down domain authority.' },
  { n: '06', title: 'Backlink Profile', desc: 'Link quality assessment, toxic link identification, anchor text distribution, and competitor gap analysis for your top 10 target queries.' },
];

export default function SeoAuditPage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Service</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,88px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              Technical<br />SEO <span style={{ color: '#e85d26' }}>Audit</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Not a PDF of Screaming Frog screenshots. A forensic review of your site — crawl health, content architecture, schema, Core Web Vitals, and backlink profile — with every issue ranked by how much it&apos;s costing you in rankings and revenue.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Request Your SEO Audit →</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
            {[['48hr', 'Turnaround on full audits'], ['6', 'Audit dimensions covered'], ['14', 'Years of audit methodology']].map(([stat, label], i) => (
              <div key={i} style={{ paddingBottom: 28, marginBottom: 28, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(52px,7vw,80px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What&apos;s Covered</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>Six dimensions. Every issue ranked.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {auditSections.map((s) => (
            <div key={s.n} style={{ padding: '32px 36px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1 }}>
              <div className="v1-headline" style={{ fontSize: 52, color: '#ece8e0', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 10, letterSpacing: '0.1em' }}>{s.title}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#e85d26', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>
          What you get at the end
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 32 }}>
          {['Prioritised fix list ordered by revenue impact', 'Competitor benchmark for your top 10 targets', 'Schema markup code ready to implement', 'Content gap report with word count targets', '30-min walkthrough call included'].map((item, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', padding: '20px 24px' }}>
              <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em' }}>{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Request your<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            Share your URL and we&apos;ll confirm scope and turnaround. Most audits delivered within 48 hours of kickoff.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="SEO Audit" title="" variant="light" buttonText="Request SEO Audit" />
        </div>
      </section>

      <CTASection title="Know exactly what's holding you back" description="Every issue, every priority, every fix — mapped out and ready to action." buttonLink="/contact/" buttonText="Get your audit →" />
    </>
  );
}
