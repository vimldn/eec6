import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Free SEO Audit',
  description: 'Get in touch with Extra Edge Club for a free SEO audit. We help UK businesses grow through Local SEO and national SEO campaigns.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
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
          <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get Your Free SEO Audit</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
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
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
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
                    className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
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
                  className="w-full bg-dark border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="What are you looking to achieve with SEO?"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-lg font-semibold transition-colors"
              >
                Request Free Audit
              </button>
              
              <p className="text-xs text-text-secondary text-center">
                We'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'We review your submission', desc: 'Our team will look at your website and understand your goals.' },
                  { step: '2', title: 'Free SEO audit', desc: 'We\'ll prepare a custom audit highlighting opportunities and issues.' },
                  { step: '3', title: 'Strategy call', desc: 'We\'ll walk through our findings and discuss how we can help.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center text-brand font-bold text-sm flex-shrink-0">
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
            
            <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
              <h3 className="font-bold mb-4">Contact Details</h3>
              <div className="space-y-3 text-text-secondary">
                <p>
                  <strong className="text-white">Email:</strong><br />
                  hello@extraedgeclub.com
                </p>
                <p>
                  <strong className="text-white">Company:</strong><br />
                  Extra Edge Club Ltd
                </p>
                <p>
                  <strong className="text-white">Established:</strong><br />
                  2011
                </p>
              </div>
            </div>
            
            <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
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
