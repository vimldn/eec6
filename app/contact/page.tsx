'use client';

import { useState } from 'react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzhMiatnj_tIyzTGmmEY1GZV6eEnoqbQJGJRsTDOAU84w1XxDeIQFwi2VshXJgSH04/exec";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      location: "",
      page: "Contact Page",
      source: document.referrer || "Direct",
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Contact Us</p>
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">
            Let's talk about your <span className="text-brand">growth</span>
          </h1>
          <p className="text-xl text-text-secondary">
            Ready to get started? Fill out the form below and we'll be in touch within 24 hours to discuss your SEO needs.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-10 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-dark-card border border-white/[0.08]  p-8">
            <h2 className="text-2xl mb-6">Get Your Free SEO Audit</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">Website *</label>
                  <input 
                    type="url" 
                    id="website" 
                    name="website"
                    required
                    className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="local-seo">Local SEO</option>
                  <option value="seo">SEO</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your goals</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full bg-dark border border-white/[0.08]  px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="What are you looking to achieve with SEO?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand hover:bg-brand-dark text-white py-4  font-semibold transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Request Free Audit'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">✓ Thanks! We'll be in touch within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              
              <p className="text-xs text-text-secondary text-center">
                We'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-4">What happens next?</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'We review your submission', desc: 'Our team will look at your website and understand your goals.' },
                  { step: '2', title: 'Free SEO audit', desc: 'We\'ll prepare a custom audit highlighting opportunities and issues.' },
                  { step: '3', title: 'Strategy call', desc: 'We\'ll walk through our findings and discuss how we can help.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center text-brand text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-card border border-white/[0.08]  p-6">
              <h3 className="font-bold mb-4">Contact Details</h3>
              <div className="space-y-3 text-text-secondary">
                <p>
                  <strong className="text-ink">Email:</strong><br />
                  hello@extraedgeclub.com
                </p>
                <p>
                  <strong className="text-ink">Company:</strong><br />
                  Extra Edge Club Ltd
                </p>
                <p>
                  <strong className="text-ink">Established:</strong><br />
                  2011
                </p>
              </div>
            </div>
            
            <div className="bg-dark-card border border-white/[0.08]  p-6">
              <h3 className="font-bold mb-3">Why choose us?</h3>
              <ul className="space-y-2">
                {['14 years experience', 'No long contracts', 'Transparent reporting', 'Results-focused approach'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="text-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
