import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'E-Commerce SEO Agency UK | Shopify & WooCommerce | Extra Edge Club',
  description: 'Revenue-focused e-commerce SEO for UK online stores. Category architecture, product schema, and content that converts browsers into buyers.',
};

const services = [
  { title: 'Category Architecture', desc: 'The structural foundation of e-commerce SEO. We build category trees that channel authority to your highest-margin product lines.' },
  { title: 'Product Schema Markup', desc: 'Rich results showing price, availability, and reviews directly in Google. Higher CTR, lower cost-per-acquisition.' },
  { title: 'Faceted Navigation Fixes', desc: 'Shopify and WooCommerce filter pages are a crawl budget disaster. We fix the canonical and noindex issues that tank rankings.' },
  { title: 'Collection Page Content', desc: 'Thin category pages don\'t rank. We add optimised, scannable content that satisfies both Google and conversion rate.' },
  { title: 'International SEO', desc: 'Hreflang, currency routing, and geo-targeting for stores selling across UK, EU, and US markets.' },
  { title: 'Link Building for E-Commerce', desc: 'Product PR, blogger outreach, and digital PR campaigns that earn the backlinks category pages need to outrank Amazon.' },
];

export default function EcommerceSeoPage() {
  return (
    <>
      <section style={{ background: '#111110', borderBottom: '3px solid #e85d26' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', borderRight: '3px solid rgba(255,255,255,0.1)' }}>
            <p className="v1-label" style={{ fontSize: 11, color: '#e85d26', marginBottom: 16 }}>Industry Specialism</p>
            <h1 className="v1-headline" style={{ fontSize: 'clamp(56px,8vw,96px)', lineHeight: 0.92, marginBottom: 24, color: '#ffffff' }}>
              E-Commerce<br /><span style={{ color: '#e85d26' }}>SEO</span>
            </h1>
            <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              Ranking against Amazon, ASOS, and well-funded DTC brands takes a different playbook. We specialise in the category architecture, schema, and content strategy that lets independent stores punch above their weight.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn-fill">Get Your Free E-Commerce SEO Audit →</Link>
              <Link href="/case-studies/firestar-toys/" className="btn-out" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>FireStar Toys case study</Link>
            </div>
          </div>
          <div style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center' }}>
            {[['200+', 'Product pages ranked page one'], ['8×', 'Higher close rate vs paid ads'], ['14', 'Years of e-commerce SEO']].map(([n, l], i) => (
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
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111110', marginBottom: 48 }}>The e-commerce SEO playbook</h2>
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
        <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#ffffff', marginBottom: 20 }}>FireStar Toys — 200+ product pages to page one</h2>
        <p className="v1-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.7, marginBottom: 32 }}>
          A specialist Lego-compatible brick and accessories retailer competing against giants. We rebuilt their category architecture and product schema, getting 200+ product pages onto page one of Google.
        </p>
        <Link href="/case-studies/firestar-toys/" className="btn-out" style={{ borderColor: '#fff', color: '#fff' }}>Read the full case study →</Link>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '3px solid #111110' }} id="audit">
        <div style={{ background: '#f7f5f0', padding: 'clamp(40px,5vw,64px)', borderRight: '3px solid #111110' }}>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(40px,5vw,60px)', color: '#111110', marginBottom: 16 }}>
            Free e-commerce<br /><span style={{ color: '#e85d26' }}>SEO audit</span>
          </h2>
          <p className="v1-body" style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>
            We'll audit your category structure, product schema, and top competitor gaps — and give you a clear picture of the revenue sitting on the table from untapped organic rankings.
          </p>
        </div>
        <div style={{ background: '#ffffff', padding: 'clamp(40px,4vw,56px) clamp(24px,4vw,48px)' }}>
          <LeadForm page="E-Commerce SEO" title="" variant="light" buttonText="Request Free E-Commerce SEO Audit" />
        </div>
      </section>

      <CTASection title="Stop losing to Amazon on your own products" description="Category architecture and product schema that puts independent stores on page one." buttonLink="/contact/" buttonText="Start the conversation →" />
    </>
  );
}
