import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'SEO for Solicitors & Law Firms UK | Extra Edge Club',
  description: 'Specialist SEO for UK solicitors, law firms, and barristers. Rank for high-intent legal search terms and convert searchers into case enquiries.',
};

const services = [
  { title: 'Practice Area Pages', desc: 'Architected to rank for high-intent terms like "employment solicitor London" — not generic firm pages.' },
  { title: 'Local Pack Domination', desc: 'Google Maps rankings for every office location. Critical for walk-in and local referral traffic.' },
  { title: 'E-E-A-T Authority Building', desc: 'Google holds legal content to its highest standard. We build author credentials, citations, and trust signals that pass the bar.' },
  { title: 'Competitor Gap Analysis', desc: 'We identify exactly which practice areas your rivals rank for that you don\'t — then close the gap systematically.' },
  { title: 'Review Generation', desc: 'Systematic Google review acquisition. Reviews are the #1 local ranking signal for legal services.' },
  { title: 'Technical SEO', desc: 'Site speed, schema markup, mobile UX — the technical foundation that lets your content compete.' },
];

export default function LegalSeoPage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.1)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Industry Specialism</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(56px,8vw,96px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              SEO for<br />Solicitors<br />&amp; <span style={{ color: '#e85d26' }}>Law Firms</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Legal search terms are the most competitive and highest-converting in any industry. A single page-one ranking for "employment solicitor London" can be worth tens of thousands in retainers annually.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn-fill">Get Your Free Legal SEO Audit →</Link>
              <Link href="/case-studies/makwana-solicitors/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Makwana Solicitors case study</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center' }}>
            {[['8×', 'Higher close rate vs cold outreach'], ['46%', 'Of legal searches have local intent'], ['14', 'Years placing law firms on page one']].map(([n, l], i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 28 }}>
                <div className="v1-headline" style={{ fontSize: 64, color: '#e85d26', lineHeight: 1 }}>{n}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What We Do</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The legal SEO playbook</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: '32px 36px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#ffffff' }}>
              <div className="v1-headline" style={{ fontSize: 48, color: '#ece8e0', lineHeight: 1, marginBottom: 8 }}>0{i + 1}</div>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 10, letterSpacing: '0.1em' }}>{s.title}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#e85d26', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Proven in practice</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>Makwana Solicitors — from invisible to page one</h2>
        <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
          A specialist criminal and motoring law firm. Zero organic presence when we started. Now ranking page one for fare evasion, blue badge misuse, and criminal defence terms across London.
        </p>
        <Link href="/case-studies/makwana-solicitors/" className="btn-out" style={{ borderColor: '#fff', color: '#fff' }}>Read the full case study →</Link>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Free legal<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            We'll review your current rankings, identify your highest-value keyword opportunities, and show you exactly where you're losing cases to competitors online.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Legal SEO" title="" variant="light" buttonText="Request Free Legal SEO Audit" />
        </div>
      </section>

      <CTASection title="Own your practice area" description="Page one rankings for your key legal terms. Measurable ROI. No retainer lock-ins." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
