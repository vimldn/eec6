import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'SEO Case Studies | Real Results for UK Businesses | Extra Edge Club',
  description: 'See how Extra Edge Club has helped UK businesses grow through SEO. Detailed case studies covering strategy, execution, and measurable results.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Real results from <span className="text-brand">real clients</span>
          </h1>
          <p className="text-xl text-text-secondary">
            We don't just report rankings. We document problems, strategies, and business outcomes — so you can judge our work properly.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}/`}
              className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 hover:border-brand/30 transition-all group block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium ${
                  study.type === 'National Brand'
                    ? 'bg-brand/20 text-brand'
                    : 'bg-white/10 text-text-secondary'
                }`}>
                  {study.type}
                </span>
                <span className="text-xs text-text-secondary">{study.industry}</span>
              </div>

              <h2 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">
                {study.client}
              </h2>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed line-clamp-2">
                {study.summary}
              </p>

              {/* Hero stat */}
              <div className="mb-6">
                <span className="text-3xl font-bold gradient-text">{study.heroStat.value}</span>
                <span className="text-text-secondary text-sm ml-2">{study.heroStat.label}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <span key={s} className="text-xs bg-white/5 px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-brand text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">The Numbers That Matter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '312%', label: 'Average traffic increase' },
              { number: '200+', label: 'Clients served' },
              { number: '£4.2M', label: 'Revenue generated' },
              { number: '14', label: 'Years experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        description="Get in touch for a free SEO audit and see what we can do for your business."
        buttonText="Get Your Free Audit"
        buttonLink="/contact/"
      />
    </>
  );
}
