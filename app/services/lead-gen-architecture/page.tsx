import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Lead Generation Architecture Consulting UK | Extra Edge Club',
  description: 'Consulting and build on how to structure lead generation and affiliate websites that rank, convert, and scale. Proven across home services, legal, healthcare, and financial niches.',
};

const phases = [
  { n: '01', title: 'Niche & Keyword Validation', desc: 'Before a single page is built — commercial intent analysis, CPL benchmarking, and competitor architecture teardown to confirm the niche is worth entering.' },
  { n: '02', title: 'URL & Content Architecture', desc: 'The exact URL structure, page types, and content depth required for each layer of the site. Designed to pass quality thresholds from day one.' },
  { n: '03', title: 'Data Spine Design', desc: 'Every lead-gen site lives or dies by its data. We structure the location, category, and service data that feeds programmatic pages without creating duplicates.' },
  { n: '04', title: 'Conversion Architecture', desc: 'Form placement, trust signals, call tracking, and lead routing — built into the structure from the start rather than bolted on after launch.' },
  { n: '05', title: 'Monetisation Strategy', desc: 'CPL rates, affiliate network selection, direct client relationships, or hybrid models — mapped against traffic projections before you commit to a build.' },
  { n: '06', title: 'Launch & Growth Roadmap', desc: 'A phased content and link building plan with milestone targets — so you know exactly what success looks like at 3, 6, and 12 months post-launch.' },
];

export default function LeadGenArchitecturePage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Service</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,88px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              Lead-Gen<br /><span style={{ color: '#e85d26' }}>Architecture</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              We&apos;ve built ranking lead-gen networks across home services, legal, healthcare, and financial niches. This is consulting and build on the exact methodology — niche validation, URL architecture, data design, and monetisation strategy — before you spend anything on content or development.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Book a Lead-Gen Consultation →</Link>
              <Link href="/case-studies/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>See live examples</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
            {[['£4.2M', 'Revenue generated across client lead-gen sites'], ['12+', 'Active lead-gen networks built and ranked'], ['14', 'Years in affiliate and lead-gen SEO']].map(([stat, label], i) => (
              <div key={i} style={{ paddingBottom: 28, marginBottom: 28, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(44px,6vw,72px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Niches We&apos;ve Built In</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0, marginBottom: 64 }}>
          {['Home Services', 'Legal Services', 'Healthcare & Dental', 'Accountancy', 'Building & Construction', 'NYC Property Violations', 'Garden Rooms & Landscaping', 'Education & Tutoring'].map((niche, i) => (
            <div key={i} style={{ padding: '20px 28px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#ffffff' }}>
              <div className="v1-label" style={{ fontSize: 11, color: '#111110', letterSpacing: '0.1em' }}>{niche}</div>
            </div>
          ))}
        </div>

        <p className="section-label">The Six Phases</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>How we structure a lead-gen build</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {phases.map((s) => (
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
            Book a<br /><span style={{ color: '#e85d26' }}>strategy session</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            Tell us your niche, your target geography, and your monetisation model. We&apos;ll validate the opportunity and outline the architecture — before you commit to anything.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Lead Gen Architecture" title="" variant="light" buttonText="Book Strategy Session" />
        </div>
      </section>

      <CTASection title="Build it right the first time" description="Most lead-gen sites fail because the architecture is wrong from day one. We fix that before you write a word." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
