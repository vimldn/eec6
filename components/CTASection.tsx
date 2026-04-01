import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = 'Ready to get your edge?',
  description = 'Get a free, no-obligation SEO audit and see exactly where you stand.',
  buttonText = 'Get Your Free Audit →',
  buttonLink = '/contact/',
}: CTASectionProps) {
  return (
    <section
      className="flex items-center justify-between flex-wrap gap-10 px-14 py-20"
      style={{ borderTop: '3px solid var(--ink)', borderBottom: '3px solid var(--ink)', background: '#fff' }}
    >
      <div>
        <h2
          className="leading-[0.95] tracking-[0.02em]"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 84px)', color: 'var(--ink)' }}
        >
          {title.split(' ').slice(0, -1).join(' ')}{' '}
          <span style={{ color: 'var(--brand)' }}>{title.split(' ').slice(-1)}</span>
        </h2>
        {description && (
          <p className="mt-4 max-w-md" style={{ color: 'var(--mid)', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6 }}>
            {description}
          </p>
        )}
      </div>
      <Link href={buttonLink} className="btn-fill" style={{ fontSize: 16, padding: '18px 48px' }}>
        {buttonText}
      </Link>
    </section>
  );
}
