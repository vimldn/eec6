import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import { getAllBlogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing Blog | Extra Edge Club',
  description: 'Expert insights on SEO, local search, content marketing, and digital growth strategies for UK businesses.',
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  // Calculate reading time for display
  const getReadingTime = (content: string) => {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  // Extract first image from content
  const getFirstImage = (content: string): string | null => {
    const imgMatch = content.match(/src=["']([^"']+)["']/);
    return imgMatch ? imgMatch[1] : null;
  };

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl">
          <p className="section-label">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            SEO insights & <span className="text-brand">digital marketing</span> strategies
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Expert advice on SEO, local search, content marketing, and proven strategies to help UK businesses grow online.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const readingTime = getReadingTime(post.content);
              const excerpt = post.metaDescription || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
              const featuredImage = getFirstImage(post.content);
              
              return (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-dark-card border border-white/[0.08] rounded-xl overflow-hidden hover:border-brand/30 transition-all group block"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 bg-gradient-to-br from-brand/20 to-brand-light/10 overflow-hidden">
                    {featuredImage ? (
                      <img 
                        src={featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-brand text-4xl opacity-50">📝</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 text-sm text-text-secondary">
                      {post.location && (
                        <span className="px-2 py-1 bg-brand/10 text-brand rounded capitalize">
                          {post.location.replace('-', ' ')}
                        </span>
                      )}
                      <span>{readingTime} min read</span>
                    </div>

                    {/* Title - FULLY CLICKABLE */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {excerpt}
                    </p>

                    {/* Read More */}
                    <span className="text-brand hover:text-brand-light transition-colors inline-flex items-center gap-2 text-sm font-semibold">
                      Read article
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Show count */}
          <div className="text-center mt-12 text-text-secondary">
            Showing {blogPosts.length} article{blogPosts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
