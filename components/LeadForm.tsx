'use client';

import { useState } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec';

const INP: React.CSSProperties = {
  width: '100%',
  background: '#f7f5f0',
  border: '1px solid #ddd',
  color: '#111110',
  fontFamily: "'Barlow', sans-serif",
  fontSize: 13,
  padding: '9px 12px',
  outline: 'none',
};

const LBL: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 700,
  fontSize: 10,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#888888',
  marginBottom: 5,
};

type LeadFormProps = {
  page: string;
  location?: string;
  title?: string;
  buttonText?: string;
  variant?: 'dark' | 'light';
};

export default function LeadForm({
  page,
  location,
  title = 'Get Your Free SEO Audit',
  buttonText = 'Request Free Audit',
  variant = 'dark',
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem('name') as HTMLInputElement).value,
      email:    (form.elements.namedItem('email') as HTMLInputElement).value,
      phone:    (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '',
      website:  (form.elements.namedItem('website') as HTMLInputElement)?.value ?? '',
      service:  (form.elements.namedItem('service') as HTMLSelectElement)?.value ?? '',
      message:  (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
      location: location ?? '',
      page,
      source: document.referrer || 'Direct',
    };
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  // ── LIGHT — compact, cream inputs, no outer card ──
  if (variant === 'light') {
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {title && (
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#111110', lineHeight: 1, marginBottom: 4 }}>
            {title}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label style={LBL}>Name *</label>
            <input type="text" name="name" required style={INP} placeholder="Your name" />
          </div>
          <div>
            <label style={LBL}>Email *</label>
            <input type="email" name="email" required style={INP} placeholder="your@email.com" />
          </div>
        </div>

        <div>
          <label style={LBL}>Website *</label>
          <input type="url" name="website" required style={INP} placeholder="https://yourwebsite.com" />
        </div>

        <div>
          <label style={LBL}>Phone</label>
          <input type="tel" name="phone" style={INP} placeholder="Your phone number" />
        </div>

        <div>
          <label style={LBL}>Goals</label>
          <textarea
            name="message"
            rows={3}
            style={{ ...INP, resize: 'none' }}
            placeholder="What are you looking to achieve with SEO?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%',
            background: '#e85d26',
            color: '#fff',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '13px',
            border: 'none',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: status === 'loading' ? 0.6 : 1,
          }}
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>

        {status === 'success' && (
          <p style={{ fontSize: 12, color: '#2d7a2d', textAlign: 'center', fontFamily: "'Barlow', sans-serif" }}>
            ✓ We&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p style={{ fontSize: 12, color: '#c0392b', textAlign: 'center', fontFamily: "'Barlow', sans-serif" }}>
            Something went wrong. Please try again.
          </p>
        )}

        <p style={{ fontSize: 11, color: '#aaa', textAlign: 'center', fontFamily: "'Barlow', sans-serif" }}>
          We&apos;ll respond within 24 hours. No spam, ever.
        </p>
      </form>
    );
  }

  // ── DARK — original card, used on contact page ──
  return (
    <div className="p-8 bg-[#141824]/95 backdrop-blur-md border border-white/15">
      {title && (
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#fff', letterSpacing: '0.03em', marginBottom: 24 }}>
          {title}
        </h2>
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Name *</label>
            <input type="text" id="name" name="name" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Email *</label>
            <input type="email" id="email" name="email" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="your@email.com" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="Your phone number" />
          </div>
          <div>
            <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Website *</label>
            <input type="url" id="website" name="website" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="https://yourwebsite.com" />
          </div>
        </div>
        <div>
          <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Service Interested In</label>
          <select id="service" name="service" className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors">
            <option value="">Select a service</option>
            <option value="local-seo">Local SEO</option>
            <option value="seo">SEO</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className="block text-xs mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Tell us about your goals</label>
          <textarea id="message" name="message" rows={4} className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors resize-none" placeholder="What are you looking to achieve with SEO?" />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand hover:bg-brand-dark text-white py-4 transition-colors disabled:opacity-60"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 14 }}
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
        {status === 'success' && <p className="text-green-400 text-sm text-center">✓ Thanks! We&apos;ll be in touch within 24 hours.</p>}
        {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
        <p className="text-xs text-white/45 text-center" style={{ fontFamily: "'Barlow', sans-serif" }}>
          We&apos;ll respond within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
