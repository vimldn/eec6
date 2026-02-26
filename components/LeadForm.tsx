'use client';

import React, { useMemo, useState } from 'react';

type LeadFormProps = {
  page: string;
  location?: string;
  title?: string;
  buttonText?: string;
};

const SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec'; // set this OR hardcode like your contact page

export default function LeadForm({
  page,
  location,
  title = 'Get a Free Consultation',
  buttonText = 'Send Message',
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const sourceValue = useMemo(() => {
    if (location) return `${page} - ${location}`;
    return page;
  }, [page, location]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('idle');

    if (!SCRIPT_URL) {
      console.error(
        'Missing SCRIPT_URL. Set NEXT_PUBLIC_CONTACT_SCRIPT_URL or hardcode the contact form endpoint.'
      );
      setStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Match typical contact-form payloads sent to Apps Script
      const payload = new URLSearchParams();
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('phone', form.phone);
      payload.append('website', form.website);
      payload.append('message', form.message);
      payload.append('page', page);
      payload.append('location', location ?? '');
      payload.append('source', sourceValue);

      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error(`Bad response: ${res.status}`);

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>

      <form onSubmit={onSubmit} className="space-y-3">
        <input type="hidden" name="page" value={page} />
        <input type="hidden" name="location" value={location ?? ''} />
        <input type="hidden" name="source" value={sourceValue} />

        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-black/30"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            type="email"
            className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-black/30"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-black/30"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Website</label>
          <input
            name="website"
            value={form.website}
            onChange={onChange}
            className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-black/30"
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={4}
            className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-black/30"
            placeholder="Tell us what you need..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : buttonText}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-700">
            Thanks! We received your message.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
