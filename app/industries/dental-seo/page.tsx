import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'SEO for Dentists & Dental Practices UK | Extra Edge Club',
  description: 'Specialist SEO for UK dental practices, Invisalign providers, and multi-location dental groups. YMYL-compliant E-E-A-T strategy that ranks and converts high-value treatment searches.',
};

const services = [
  { n: '01', title: 'Treatment Page Architecture', desc: 'Individual, fully optimised pages for every treatment — Invisalign, implants, composite bonding, whitening. Not a single "treatments" page that ranks for nothing.' },
  { n: '02', title: 'YMYL & E-E-A-T Compliance', desc: "Dental content is held to Google's highest scrutiny. We build the authorship credentials, clinical references, and trust signals that pass the YMYL threshold." },
  { n: '03', title: 'Multi-Location GBP Management', desc: 'Google Business Profile optimisation and monitoring for every practice location — including the photo strategy, review velocity, and posting cadence that drives map pack rankings.' },
  { n: '04', title: 'Local Pack Domination', desc: 'Postcode-level proximity strategy, citation consistency, and NAP architecture designed around how patients actually search: "dentist near me", "Invisalign [area]".' },
  { n: '05', title: 'Review Generation Systems', desc: 'A systematic, CQC-compliant review acquisition strategy. Reviews are the single highest-impact local ranking factor for dental practices.' },
  { n: '06', title: 'Schema Markup for Dentists', desc: 'Dentist, MedicalOrganization, and LocalBusiness schema — correctly implemented server-side so Googlebot reads every tag and rich results appear in SERPs.' },
  { n: '07', title: 'Competitor Gap Analysis', desc: "We identify which treatments and locations your nearest competitors rank for that you don't — and build a prioritised plan to close those gaps systematically." },
  { n: '08', title: 'County & Multi-Area Lead Gen', desc: 'For Invisalign providers and specialist clinics: dedicated county-level landing pages that capture high-value searches across a wider catchment area.' },
];

const faqs = [
  { q: 'How long does dental SEO take to show results?', a: 'Local pack results typically improve within 60–90 days of GBP optimisation and citation work. Organic ranking improvements for treatment pages take 4–6 months for established practices, longer for new sites. High-competition treatments like Invisalign and implants in London require 6–12 months of sustained effort.' },
  { q: "Is dental content subject to different Google rules?", a: "Yes. Dental content falls under Google's YMYL (Your Money or Your Life) category — meaning it's evaluated at a higher standard for E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. Content must demonstrate clinical credibility through named GDC-registered practitioners, professional body citations, and accurate treatment information." },
  { q: "Can you help practices with multiple locations?", a: "Multi-location dental groups are where we specialise. Each location needs its own GBP, its own locally-optimised page, and its own citation profile — all without creating duplicate content issues across the group's site." },
  { q: 'Do you work with Invisalign Diamond and Platinum providers?', a: 'Yes. Invisalign searches are highly competitive and highly specific. We build county and area-level landing pages that capture "Invisalign [town]" searches across a wider geography than just the practice postcode.' },
];

export default function DentalSeoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.08)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Industry Specialism</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(52px,8vw,92px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              SEO for<br />Dentists &amp;<br /><span style={{ color: '#e85d26' }}>Dental Practices</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Patients searching for Invisalign, implants, or a new NHS dentist are ready to book. They convert at a higher rate than almost any other local search category — but dental SEO is uniquely demanding. Google holds healthcare content to its strictest YMYL standards, and the local competition in most UK cities is fierce. We&apos;ve built the methodology to win it.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#audit" className="btn-fill">Get Your Free Dental SEO Audit →</Link>
              <Link href="/contact/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Speak to the team</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            {[
              ['£850+', 'Avg. Invisalign treatment value'],
              ['8×', 'Higher close rate vs cold leads'],
              ['46%', 'Of dental searches have local intent'],
              ['14', 'Years of dental & healthcare SEO'],
            ].map(([stat, label], i) => (
              <div key={i} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="v1-headline" style={{ fontSize: 'clamp(44px,6vw,72px)', color: '#e85d26', lineHeight: 1 }}>{stat}</div>
                <div className="v1-label" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.18em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why dental SEO is different */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Why Dental SEO Is Different</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0 }}>
          <div style={{ paddingRight: 'clamp(24px,4vw,56px)', paddingBottom: 32 }}>
            <h2 className="v1-headline" style={{ fontSize: 'clamp(36px,5vw,56px)', color: '#111110', marginBottom: 20 }}>
              YMYL means Google scrutinises every page
            </h2>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 16 }}>
              Healthcare content — including dental — is categorised as YMYL (Your Money or Your Life). Google employs human quality raters to assess these pages against its strictest E-E-A-T standards: Experience, Expertise, Authoritativeness, and Trustworthiness.
            </p>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
              That means a dental page written by a generic content agency — with no named GDC-registered practitioner, no professional body citations, and no verifiable clinical accuracy — will consistently rank below pages that meet those standards. We build to the standard from day one.
            </p>
          </div>
          <div style={{ paddingLeft: 'clamp(24px,4vw,56px)', paddingBottom: 32, borderLeft: '3px solid #111110' }}>
            <h2 className="v1-headline" style={{ fontSize: 'clamp(36px,5vw,56px)', color: '#111110', marginBottom: 20 }}>
              Local intent is everything
            </h2>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 16 }}>
              Patients don&apos;t search for "best Invisalign provider in the UK." They search for "Invisalign Harrow" or "dentist near me." Local pack visibility — showing up in the top three Google Maps results — drives the majority of dental bookings in competitive areas.
            </p>
            <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
              Winning the local pack requires consistent NAP data across every directory, a review acquisition strategy, Google Business Profile optimisation, and proximity-aware content. We build all of it.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: '#ffffff', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">What We Do</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The dental SEO playbook</h2>
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

      {/* FAQ — FAQ schema target */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <p className="section-label">Common Questions</p>
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,56px)', color: '#111110', marginBottom: 40 }}>Dental SEO — what to expect</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
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
            Free dental<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            We&apos;ll review your GBP setup, treatment page coverage, local citation consistency, and top competitor rankings — and give you a clear picture of where you&apos;re losing bookings to rivals online.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="Dental SEO" title="" variant="light" buttonText="Request Free Dental SEO Audit" />
        </div>
      </section>

      <CTASection title="More bookings. Higher-value treatments." description="YMYL-compliant dental SEO that ranks for Invisalign, implants, and every treatment you want to grow." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
