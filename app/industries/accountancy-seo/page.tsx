import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'SEO for Accountants & Accounting Firms UK | Extra Edge Club',
  description: 'Specialist SEO for UK accountants, bookkeepers, and tax advisors. We rank accounting firms for high-intent niche terms — late tax returns, landlord accounting, e-commerce bookkeeping, and more.',
};

const services = [
  { n: '01', title: 'Niche Service Pages', desc: 'Dedicated pages for every service you offer — self-assessment, VAT returns, payroll, R&D tax credits, late filing. Not a single "services" page that ranks for nothing.' },
  { n: '02', title: 'Hyper-Local Borough Targeting', desc: 'London accountants need borough-level dominance. We build location pages for Harrow, Camden, Westminster and every area you serve — each unique, each indexed.' },
  { n: '03', title: 'E-E-A-T Authority Building', desc: 'ICAEW, ACCA, and AAT membership signals. Named practitioner authorship. Professional body citations. The trust infrastructure Google looks for in financial content.' },
  { n: '04', title: 'HMRC Deadline Content', desc: 'High-traffic informational pages around Self Assessment deadlines, Making Tax Digital, and HMRC penalty guidance — that rank, earn backlinks, and position you as the expert.' },
  { n: '05', title: 'Niche Client Targeting', desc: 'Specialist pages for landlords, contractors, Uber drivers, e-commerce sellers, and startups — the high-intent audiences who search for an accountant who understands their specific situation.' },
  { n: '06', title: 'Local Pack & GBP', desc: 'Google Business Profile optimisation and review generation for your practice location. Essential for capturing the "accountant near me" searches that drive bookings.' },
  { n: '07', title: 'Competitor Gap Analysis', desc: 'We identify which niche terms and boroughs your competitors rank for that you don\'t — and build a systematic plan to displace them.' },
  { n: '08', title: 'Technical SEO Foundation', desc: 'Schema markup for AccountingService and LocalBusiness, canonical configuration, and site speed — the technical foundation that lets your content compete.' },
];

const faqs = [
  { q: 'What kinds of accounting terms actually drive new client enquiries?', a: 'High-intent niche terms consistently outperform generic terms. "Late tax return accountant London" converts at a far higher rate than "accountant London" — because the searcher has a specific, urgent problem. We map your full service offering to the niche queries that attract clients who are ready to engage.' },
  { q: 'Can you rank us for specific client types — like landlords or contractors?', a: 'Yes, this is one of our core specialisms. Dedicated pages targeting "landlord accountant Harrow" or "contractor accountant London" attract clients who have a specific need and a high propensity to convert. We\'ve built these across multiple London boroughs with strong results.' },
  { q: 'How does local SEO work for accountants with multiple service areas?', a: 'For London firms, we build borough-level pages — each with unique content referencing the local business landscape, local business rates, and borough-specific commercial context. These pages link back to your main service pages and help you dominate the local pack for each area.' },
  { q: 'Is there SEO opportunity in Making Tax Digital and HMRC content?', a: 'Significant opportunity. Informational content around Self Assessment deadlines, MTD requirements, and penalty guidance drives high volumes of traffic from business owners who are actively looking for an accountant to sort things out. We build this content to rank and convert — not just inform.' },
];

const niches = [
  'Late Tax Return Accounting', 'Landlord Accounting', 'Contractor Accounting',
  'E-Commerce Bookkeeping', 'Uber Driver Accounting', 'Startup Accounting',
  'Self-Assessment Returns', 'VAT Returns & Registration', 'R&D Tax Credits',
  'Payroll Services', 'Company Formation', 'Making Tax Digital',
];

export default function AccountancySeoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Industry Specialism</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,92px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              SEO for<br />Accountants<br />&amp; <span style={{ color: '#e85d26' }}>Tax Advisors</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Business owners searching for an accountant have a specific problem and they want it solved. The practices that rank for "late tax return accountant London" or "landlord accountant Harrow" don&apos;t win on brand — they win on search architecture. We build that architecture.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Get Your Free Accountancy SEO Audit →</Link>
              <Link href="/case-studies/tidy-money/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Tidy Money case study</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            {[
              ['312%', 'Avg. organic traffic increase'],
              ['36', 'London boroughs targeted across our accountancy network'],
              ['12+', 'Niche service pages ranked per client'],
              ['14', 'Years of financial services SEO'],
            ].map(([stat, label], i) => (
              <div key={i} style={{ paddingBottom: 22, marginBottom: 22, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(44px,6vw,68px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niche targeting section */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Niche Targeting</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(36px,5vw,56px)', color: '#111110', marginBottom: 12 }}>
          The niches we rank accountants for
        </h2>
        <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
          Each of these search terms represents a client with a specific problem and a high propensity to engage. We build dedicated, optimised pages for every niche you serve.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
          {niches.map((niche, i) => (
            <div key={i} style={{ padding: '18px 24px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#ffffff' }}>
              <div className="v1-label" style={{ fontSize: 11, color: '#111110', letterSpacing: '0.1em' }}>{niche}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: '#ffffff', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What We Do</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The accountancy SEO playbook</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {services.map((s) => (
            <div key={s.n} style={{ padding: '28px 32px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1 }}>
              <div className="v1-headline" style={{ fontSize: 44, color: '#ece8e0', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
              <div className="v1-label" style={{ fontSize: 12, color: '#111110', marginBottom: 8, letterSpacing: '0.1em' }}>{s.title}</div>
              <p className="v1-body" style={{ fontSize: 13, color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof pull-through */}
      <section style={{ background: '#e85d26', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Proven in practice</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>
          12 London boroughs. One accountancy network. All ranking.
        </h2>
        <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
          We built and ranked a network of hyper-local accountancy sites across London — targeting Harrow, Brent, Kenton, Wembley, and more — each with niche service pages for landlords, VAT, late tax returns, and e-commerce. Every page ranking. Every form converting.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/case-studies/tidy-money/" className="btn-out" style={{ borderColor: '#fff', color: '#fff' }}>Tidy Money case study →</Link>
          <Link href="/localseoagency/harrow/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.8)' }}>See Harrow as a live example →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Common Questions</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,56px)', color: '#111110', marginBottom: 40 }}>Accountancy SEO — what to expect</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid #ddd' }}>
              <div className="v1-label" style={{ fontSize: 13, color: '#111110', letterSpacing: '0.08em', marginBottom: 10 }}>{faq.q}</div>
              <p className="v1-body" style={{ fontSize: 14, color: '#888', lineHeight: 1.7, maxWidth: 680 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Free accountancy<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            We&apos;ll audit your current niche page coverage, local pack presence, competitor gaps, and E-E-A-T signals — and show you exactly which terms are driving enquiries to your competitors instead of you.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Accountancy SEO" title="" variant="light" buttonText="Request Free Accountancy SEO Audit" />
        </div>
      </section>

      <CTASection title="Own your niche. Own your borough." description="Accountancy SEO built around the specific services and locations that drive your highest-value clients." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
