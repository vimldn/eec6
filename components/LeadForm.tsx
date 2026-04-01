'use client';

import { useState } from 'react';

type LeadFormProps = {
  page: string;
  location?: string;
  title?: string;
  buttonText?: string;
  variant?: 'dark' | 'light'; // dark = original overlay card, light = compact on white
};

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec';

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
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '',
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value ?? '',
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
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

  // ── LIGHT variant — compact, on white background ──
  if (variant === 'light') {
    const lbl = {
      display: 'block' as const,
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      color: '#888',
      marginBottom: 5,
    };
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {title && (
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#111110', lineHeight: 1, marginBottom: 4 }}>
            {title}
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label style={lbl}>Name *</label>
            <input type="text" name="name" required style={ width: '100%', background: '#f7f5f0', border: '1px solid #ddd', color: '#111110', fontFamily: 'Barlow, sans-serif', fontSize: 13, padding: '9px 12px', outline: 'none' } placeholder="Your name" />
          </div>
          <div>
            <label style={lbl}>Email *</label>
            <input type="email" name="email" required style={ width: '100%', background: '#f7f5f0', border: '1px solid #ddd', color: '#111110', fontFamily: 'Barlow, sans-serif', fontSize: 13, padding: '9px 12px', outline: 'none' } placeholder="your@email.com" />
          </div>
        </div>
        <div>
          <label style={lbl}>Website *</label>
          <input type="url" name="website" required style={ width: '100%', background: '#f7f5f0', border: '1px solid #ddd', color: '#111110', fontFamily: 'Barlow, sans-serif', fontSize: 13, padding: '9px 12px', outline: 'none' } placeholder="https://yourwebsite.com" />
        </div>
        <div>
          <label style={lbl}>Phone</label>
          <input type="tel" name="phone" style={ width: '100%', background: '#f7f5f0', border: '1px solid #ddd', color: '#111110', fontFamily: 'Barlow, sans-serif', fontSize: 13, padding: '9px 12px', outline: 'none' } placeholder="Your phone number" />
        </div>
        <div>
          <label style={lbl}>Goals</label>
          <textarea
            name="message"
            rows={3}
            style={{ width: '100%', background: '#f7f5f0', border: '1px solid #ddd', color: '#111110', fontFamily: 'Barlow,sans-serif', fontSize: 13, padding: '9px 12px', outline: 'none', resize: 'none' }}
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
            cursor: 'pointer',
            opacity: status === 'loading' ? 0.6 : 1,
          }}
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
        {status === 'success' && <p style={{ fontSize: 12, color: '#2d7a2d', textAlign: 'center' }}>✓ We&apos;ll be in touch within 24 hours.</p>}
        {status === 'error' && <p style={{ fontSize: 12, color: '#c0392b', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
        <p style={{ fontSize: 11, color: '#aaa', textAlign: 'center', fontFamily: 'Barlow,sans-serif' }}>
          We&apos;ll respond within 24 hours. No spam, ever.
        </p>
      </form>
    );
  }

  // ── DARK variant — original overlay card style ──
  return (
    <div className="p-8 bg-[#141824]/95 backdrop-blur-md border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)]">
      {title && <h2 className="v1-headline text-2xl mb-6 text-white">{title}</h2>}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Name *</label>
            <input type="text" id="name" name="name" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Email *</label>
            <input type="email" id="email" name="email" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="your@email.com" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="Your phone number" />
          </div>
          <div>
            <label htmlFor="website" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Website *</label>
            <input type="url" id="website" name="website" required className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors" placeholder="https://yourwebsite.com" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Service Interested In</label>
          <select id="service" name="service" className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors">
            <option value="">Select a service</option>
            <option value="local-seo">Local SEO</option>
            <option value="seo">SEO</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="v1-label block text-xs mb-2" style={{ color: '#888' }}>Tell us about your goals</label>
          <textarea id="message" name="message" rows={4} className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors resize-none" placeholder="What are you looking to achieve with SEO?" />
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full bg-brand hover:bg-brand-dark text-white py-4 font-semibold transition-colors disabled:opacity-60" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 14 }}>
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
        {status === 'success' && <p className="text-green-400 text-sm text-center">✓ Thanks! We&apos;ll be in touch within 24 hours.</p>}
        {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
        <p className="text-xs text-white/45 text-center v1-body">We&apos;ll respond within 24 hours. No spam, ever.</p>
      </form>
    </div>
  );
}
