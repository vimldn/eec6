'use client';

import { useMemo, useState } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadForm({
  page,
  location,
}: {
  page: string;
  location?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');

  const locationLabel = useMemo(() => (location ? location : ''), [location]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement | null)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement | null)?.value || '';
    const website = (form.elements.namedItem('website') as HTMLInputElement | null)?.value || '';
    const service = (form.elements.namedItem('service') as HTMLSelectElement | null)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement | null)?.value || '';

    const data = {
      fullName: name,
      email,
      phone,
      website,
      service,
      message,
      location: locationLabel,
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
    <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Get Your Free SEO Audit</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2">
              Website *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
            defaultValue=""
          >
            <option value="">Select a service</option>
            <option value="local-seo">Local SEO</option>
            <option value="seo">SEO</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Tell us about your goals
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors resize-none"
            placeholder="What are you looking to achieve with SEO?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : 'Request Free Audit'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center">
            ✓ Thanks! We'll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-xs text-text-secondary text-center">
          We'll respond within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
