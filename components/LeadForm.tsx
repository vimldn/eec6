'use client';

import { useState } from 'react';

type LeadFormProps = {
  page: string;
  location?: string;
  title?: string;
  buttonText?: string;
};

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec';

export default function LeadForm({
  page,
  location,
  title = 'Get Your Free SEO Audit',
  buttonText = 'Request Free Audit',
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    const data = {
      fullName: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
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

  return (
    // ✅ Grey shadow/glow goes HERE (outer wrapper)
    <div
      className="
        rounded-2xl p-8
        bg-[#141824]/95 backdrop-blur-md
        border border-white/15
        shadow-[0_30px_90px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06),0_0_55px_rgba(255,255,255,0.14)]
      "
    >
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2 text-white">
              Website *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
          >
            <option value="">Select a service</option>
            <option value="local-seo">Local SEO</option>
            <option value="seo">SEO</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
            Tell us about your goals
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-[#0b0f19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors resize-none"
            placeholder="What are you looking to achieve with SEO?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center">
            ✓ Thanks! We&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-xs text-white/45 text-center">
          We&apos;ll respond within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
