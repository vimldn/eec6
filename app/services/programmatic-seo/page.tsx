import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Programmatic SEO Agency UK | Extra Edge Club',
  description: 'We build scalable page architectures that rank across hundreds of locations, categories, or niches. Proven across lead-gen networks, directories, and local service sites.',
};

const steps = [
  { n: '01', title: 'Keyword & Intent Mapping', desc: 'We identify the full matrix of queries — location × service × intent — and determine which combinations have genuine search volume and commercial value.' },
  { n: '02', title: 'Data Architecture', desc: 'Every page needs a unique data spine. We structure location data, category data, and content modifiers so no two pages are identical — and all of them are crawlable.' },
  { n: '03', title: 'Template Design', desc: 'We build Next.js templates that pass real content to each page at build time. Dynamic routing, static generation, correct canonical and hreflang implementation throughout.' },
  { n: '04', title: 'Quality Threshold', desc: 'Google\'s Helpful Content Update targets thin programmatic pages. We set minimum content standards per page type — and enforce them before any page goes live.' },
  { n: '05', title: 'Internal Linking Mesh', desc: '100 pages with no internal links is worthless. We build the hub-and-spoke linking architecture that concentrates authority where it converts.' },
  { n: '06', title: 'Monitoring & Iteration', desc: 'GSC integration, crawl monitoring, and keyword rank tracking at the page-type level — so we know when a template is working and when it needs revision.' },
];

const proofPoints = [
  { stat: '100+', label: 'Location pages ranked per client' },
  { stat: '36', label: 'London boroughs covered in one build' },
  { stat: '14', label: 'Years building programmatic networks' },
];

export default function ProgrammaticSeoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Service</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,88px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              Programmatic<br /><span style={{ color: '#e85d26' }}>SEO</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Most agencies run paid ads or write one blog post at a time. We build page architectures that generate hundreds of ranking pages from a single template — each one genuinely useful, each one indexed. This is how you dominate a niche without a proportional content budget.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Get a Programmatic SEO Consultation →</Link>
              <Link href="/case-studies/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>View case studies</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
            {proofPoints.map(({ stat, label }, i) => (
              <div key={i} style={{ paddingBottom: 28, marginBottom: 28, borderBottom: i < proofPoints.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(52px,7vw,80px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Who It&apos;s For</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
          {[
            { label: 'Local Service Businesses', desc: 'Plumbers, solicitors, accountants, dentists — any business that needs to rank across dozens of boroughs or towns with a single scalable page template.' },
            { label: 'Lead-Gen Site Builders', desc: 'Entrepreneurs building niche lead capture sites. We design the architecture so they rank from launch, not after 18 months of manual SEO work.' },
            { label: 'Directories & Marketplaces', desc: 'Category × location pages that compete with aggregators like Checkatrade, Tagvenue, or Bark.com — built to pass quality thresholds rather than trigger spam filters.' },
            { label: 'Enterprise & Multi-Location', desc: 'Brands with physical locations in dozens of cities needing a consistent, rankable, and maintainable location page architecture.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '32px 36px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#ffffff' }}>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 10, letterSpacing: '0.1em' }}>{item.label}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section style={{ background: '#ffffff', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">How We Do It</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The programmatic SEO process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ padding: '32px 36px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1 }}>
              <div className="v1-headline" style={{ fontSize: 52, color: '#ece8e0', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 10, letterSpacing: '0.1em' }}>{s.title}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof pull-through */}
      <section style={{ background: '#e85d26', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Proven in practice</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>
          36 London boroughs. One template. All ranked.
        </h2>
        <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
          This site is itself an example. Every Extra Edge Club location page is generated from a single Next.js template fed by a location data file — each page unique, schema-marked, and indexed. The same methodology we build for clients.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/localseoagency/london/" className="btn-out" style={{ borderColor: '#fff', color: '#fff' }}>See a live example →</Link>
          <Link href="/case-studies/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.8)' }}>All case studies</Link>
        </div>
      </section>

      {/* Form */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Book a<br /><span style={{ color: '#e85d26' }}>free consultation</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            Tell us about your site, your niche, and your target scale. We&apos;ll outline the architecture and give you a realistic assessment of what&apos;s achievable — no obligation.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Programmatic SEO" title="" variant="light" buttonText="Request Free Consultation" />
        </div>
      </section>

      <CTASection title="Ready to scale your rankings?" description="One template. Hundreds of ranking pages. Built to last beyond the next Google update." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
