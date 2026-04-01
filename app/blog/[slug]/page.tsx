import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { getPostBySlug, getAllPostSlugs, getAllPostsMeta } from '@/lib/blog';
import styles from './BlogContent.module.css';

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  // Related posts — same category, different slug
  const allPosts = getAllPostsMeta();
  const related = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f7f5f0', borderBottom: '1px solid #ddd', padding: '8px 40px' }}>
        <nav style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <Link href="/blog/" style={{ color: '#888', textDecoration: 'none' }}>Blog</Link>
          <span style={{ margin: '0 8px' }}>→</span>
          <span style={{ color: '#e85d26' }}>{post.title}</span>
        </nav>
      </div>

      {/* ── Article header — ink background ── */}
      <header style={{ background: '#111110', borderBottom: '3px solid #e85d26', padding: 'clamp(40px,6vw,80px) clamp(24px,5vw,64px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Category tag */}
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#e85d26', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <span style={{ fontSize: 7 }}>▶</span>
            {post.category || 'SEO'}
          </div>

          {/* Title — Bebas Neue */}
          <h1 className="v1-headline" style={{ fontSize: 'clamp(48px, 7vw, 88px)', color: '#ffffff', marginBottom: 28, textTransform: 'uppercase' }}>
            {post.title}
          </h1>

          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {post.publishedDate && (
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                {new Date(post.publishedDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>◆</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
              {post.readingTime} min read
            </span>
            {post.location && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>◆</span>
                <Link
                  href={`/localseoagency/${post.location}/`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e85d26', textDecoration: 'none' }}
                >
                  {post.location.charAt(0).toUpperCase() + post.location.slice(1)}
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── Article body ── */}
      <section style={{ background: '#f7f5f0', borderBottom: '3px solid #111110' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,64px)' }}>
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section style={{ background: '#ffffff', borderBottom: '3px solid #111110', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }}>
          <p className="section-label">Keep Reading</p>
          <h2 className="v1-headline" style={{ fontSize: 'clamp(32px,4vw,48px)', color: '#111110', marginBottom: 32 }}>
            Related articles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}/`}
                style={{ textDecoration: 'none', display: 'block', padding: '28px 32px', border: '1px solid #ddd', marginTop: -1, marginLeft: -1, background: '#f7f5f0', transition: 'background .15s' }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e85d26', marginBottom: 8 }}>
                  {r.category}
                </div>
                <div className="v1-headline" style={{ fontSize: 22, color: '#111110', lineHeight: 1.1, marginBottom: 8, textTransform: 'uppercase' }}>
                  {r.title}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888' }}>
                  {r.readingTime} min read →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        title="Want results like this?"
        description="Get a free SEO audit and see exactly where you stand — and where the opportunity is."
        buttonText="Get Your Free Audit →"
        buttonLink="/contact/"
      />
    </>
  );
}
