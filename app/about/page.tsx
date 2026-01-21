import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { clients } from '@/data/clients';

export const metadata: Metadata = {
  title: 'About Us | SEO Specialists Since 2011',
  description: 'Extra Edge Club Ltd has been helping UK businesses grow through SEO since 2011. Learn about our team, approach, and track record.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            SEO specialists since <span className="text-brand">2011</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Extra Edge Club Ltd was founded with a simple mission: help UK businesses grow through search. Over 14 years later, we've helped hundreds of businesses increase their visibility, traffic, and revenue.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>
                We started Extra Edge Club in 2011 when SEO was still considered a dark art by most businesses. We saw an opportunity to bring transparency, ethics, and genuine results to an industry full of snake oil salesmen.
              </p>
              <p>
                Since then, we've worked with national brands like Sixes Cricket, The Gentleman's Journal, and FireStar Toys, as well as local businesses across the UK. Our approach has always been the same: understand the business, develop a strategy, execute with precision, and deliver measurable results.
              </p>
              <p>
                We don't do long contracts or vanity metrics. We focus on what matters: traffic, leads, and revenue. If we're not delivering value, you shouldn't be paying us.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '2011', label: 'Founded' },
              { number: '200+', label: 'Clients served' },
              { number: '14', label: 'Years experience' },
              { number: '£4.2M', label: 'Revenue generated' }
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-brand mb-1">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">How We Work</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Transparency', 
                desc: 'No jargon, no hidden tactics. We explain what we do and why we do it. You\'ll always know exactly where your investment is going.' 
              },
              { 
                title: 'Results-Focused', 
                desc: 'Rankings are nice, but they don\'t pay the bills. We focus on metrics that matter: traffic, leads, and revenue.' 
              },
              { 
                title: 'Long-Term Thinking', 
                desc: 'We don\'t do quick fixes that risk your site. Our strategies are built for sustainable, compounding growth.' 
              }
            ].map((value, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Clients We've Worked With</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{client.name}</h3>
                  <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${client.type === 'national' ? 'bg-brand/20 text-brand' : 'bg-white/10 text-text-secondary'}`}>
                    {client.type}
                  </span>
                </div>
                {client.industry && (
                  <p className="text-sm text-text-secondary">{client.industry}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to work with us?"
        description="Get in touch to discuss how we can help your business grow."
        buttonText="Get in Touch"
        buttonLink="/contact/"
      />
    </>
  );
}
