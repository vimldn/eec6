import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { getCaseStudyBySlug, getAllCaseStudySlugs, caseStudies } from '@/lib/case-studies';

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'Not Found' };
  return {
    title: `${study.client} SEO Case Study | Extra Edge Club`,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((cs) => cs.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-secondary">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/case-studies/" className="hover:text-white transition-colors">Case Studies</Link>
            <span className="mx-2">→</span>
            <span className="text-brand">{study.client}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium ${
              study.type === 'National Brand'
                ? 'bg-brand/20 text-brand'
                : 'bg-ink/10 text-text-secondary'
            }`}>
              {study.type}
            </span>
            <span className="text-xs text-text-secondary">{study.industry}</span>
            <span className="text-xs text-text-secondary">·</span>
            <span className="text-xs text-text-secondary">{study.location}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            {study.client}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {study.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {study.services.map((s) => (
              <span key={s} className="text-sm bg-ink/5 border border-white/[0.08] px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>

          <div className="bg-dark-card border border-brand/30  p-8 inline-block">
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              {study.heroStat.value}
            </div>
            <div className="text-text-secondary">{study.heroStat.label}</div>
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section className="px-6 py-12 bg-dark-lighter border-y border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-6">Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-brand mb-1 font-display">{result.value}</div>
                <div className="text-sm text-text-secondary">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-4">The Challenge</p>
          <h2 className="text-3xl font-bold mb-6 font-display">What We Were Up Against</h2>
          <p className="text-text-muted leading-relaxed text-lg">{study.challenge}</p>
        </div>
      </section>

      {/* Strategy */}
      <section className="px-6 py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-4">Strategy</p>
          <h2 className="text-3xl font-bold mb-10 font-display">How We Approached It</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.strategy.map((step, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08]  p-6">
                <div className="w-8 h-8 bg-brand/15 text-brand  flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-4">Outcome</p>
          <h2 className="text-3xl font-bold mb-6 font-display">The Results</h2>
          <p className="text-text-muted leading-relaxed text-lg mb-10">{study.outcome}</p>

          {study.quote && (
            <blockquote className="bg-dark-card border-l-4 border-brand rounded-r-2xl p-8">
              <p className="text-xl leading-relaxed mb-6">&ldquo;{study.quote.text}&rdquo;</p>
              <footer>
                <div className="font-semibold">{study.quote.attribution}</div>
                <div className="text-sm text-text-secondary">{study.quote.role}</div>
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      <div className="px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-text-secondary">
            <span className="text-brand font-medium">Engagement period:</span> {study.timeframe}
          </p>
        </div>
      </div>

      {otherStudies.length > 0 && (
        <section className="px-6 py-16 bg-dark-lighter">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">More Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}/`}
                  className="bg-dark-card border border-white/[0.08]  p-6 hover:border-brand/30 transition-colors block"
                >
                  <span className="text-xs text-text-secondary mb-2 block">{cs.industry}</span>
                  <div className="font-semibold mb-1">{cs.client}</div>
                  <div className="text-brand font-bold">{cs.heroStat.value}</div>
                  <div className="text-xs text-text-secondary">{cs.heroStat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Want results like these?"
        description="Get in touch for a free SEO audit and see what we can do for your business."
        buttonText="Get Your Free Audit"
        buttonLink="/contact/"
      />
    </>
  );
}
