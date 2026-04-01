import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'SEO for Accountants & Financial Services UK | Extra Edge Club',
  description: 'Specialist SEO for UK accountants, IFAs, and fintech companies. Build E-E-A-T authority and rank for the financial terms that drive consultations.',
};

const services = [
  { title: 'E-E-A-T for Finance', desc: 'Google\'s YMYL rules hit financial content hardest. We build the expertise signals, author authority, and trust architecture to rank.' },
  { title: 'Service Page Architecture', desc: 'Dedicated, optimised pages for every service — tax returns, payroll, VAT, FCA-regulated advice — not a single "services" page.' },
  { title: 'Local SEO for Practices', desc: 'Dominate Google Maps for accountants and IFAs in your postcode. Local intent drives 46% of all financial service searches.' },
  { title: 'Content Authority', desc: 'HMRC deadline guides, tax explainers, and financial calculators that rank, earn backlinks, and position you as the expert.' },
  { title: 'Citation & Directory Building', desc: 'FCA register, ICAEW, ACCA directories — the trust signals Google specifically looks for in financial services.' },
  { title: 'Competitor Intelligence', desc: 'We analyse which firms own the terms you need and build a systematic plan to displace them.' },
];

export default function FinancialSeoPage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.1)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Industry Specialism</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(56px,8vw,96px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              SEO for<br />Financial<br /><span style={{ color: '#e85d26' }}>Services</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Accountants and IFAs live or die by trust. Google knows this — financial content is held to its strictest E-E-A-T standards. We know exactly how to build that authority and turn it into rankings that bring in consultations.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn-fill">Get Your Free Financial SEO Audit →</Link>
              <Link href="/case-studies/tidy-money/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Tidy Money case study</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center' }}>
            {[['312%', 'Avg. organic traffic increase'], ['4.2×', 'Avg. consultation enquiry increase'], ['14', 'Years in financial services SEO']].map(([n, l], i) => (
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
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The financial SEO playbook</h2>
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
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>Tidy Money — 312% organic growth in 8 months</h2>
        <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
          A personal finance and budgeting platform targeting high-intent money management keywords. We rebuilt their content architecture, E-E-A-T signals, and internal linking — delivering a 312% increase in organic sessions.
        </p>
        <Link href="/case-studies/tidy-money/" className="btn-out" style={{ borderColor: '#fff', color: '#fff' }}>Read the full case study →</Link>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Free financial<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            We'll identify your YMYL gaps, your highest-value keyword opportunities, and show exactly where competitors are taking consultations that should be yours.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Financial SEO" title="" variant="light" buttonText="Request Free Financial SEO Audit" />
        </div>
      </section>

      <CTASection title="Build authority that compounds" description="Financial SEO done right is an asset, not a cost. Rankings that earn trust and generate consultations 24/7." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
