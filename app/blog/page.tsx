import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'SEO Blog | Expert Insights for UK Businesses | Extra Edge Club',
  description: 'Practical SEO insights for UK businesses. Local SEO, technical guides, E-E-A-T strategy, and proven tactics from a team with 14 years of results.',
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Blog</p>
          <h1 className="text-4xl md:text-5xl mb-6 font-display">
            SEO insights for <span className="text-brand">UK businesses</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Practical advice on Local SEO, technical optimisation, E-E-A-T, and organic growth strategy — written by practitioners, not content farms.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-text-secondary">Articles coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="bg-dark-card border border-white/[0.08]  overflow-hidden hover:border-brand/30 transition-all group block"
                >
                  {/* Category pill */}
                  <div className="px-6 pt-6">
                    <span className="text-xs uppercase tracking-wider text-brand font-medium">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 pt-3">
                    <h2 className="text-lg mb-3 group-hover:text-brand transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-text-secondary text-sm mb-5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span>
                        {post.publishedDate
                          ? new Date(post.publishedDate).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                          : ''}
                      </span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
