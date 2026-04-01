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
  const words = title.split(' ');
  const lastWord = words.slice(-1)[0];
  const rest = words.slice(0, -1).join(' ');

  return (
    <section
      className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap gap-8 px-6 md:px-14 py-12 md:py-20"
      style={{ borderTop: '3px solid #111110', borderBottom: '3px solid #111110', background: '#ffffff' }}
    >
      <div>
        {/* CTA heading — Bebas Neue per spec */}
        <h2
          className="v1-headline"
          style={{ fontSize: 'clamp(48px, 7vw, 84px)', color: '#111110' }}
        >
          {rest} <span style={{ color: '#e85d26' }}>{lastWord}</span>
        </h2>
        {description && (
          // Body — Barlow 400
          <p className="v1-body mt-4 max-w-md" style={{ color: '#888888', fontSize: 16, lineHeight: 1.6 }}>
            {description}
          </p>
        )}
      </div>
      {/* Button — Barlow Condensed 700 via .btn-fill */}
      <Link href={buttonLink} className="btn-fill" style={{ fontSize: 16, padding: '18px 48px' }}>
        {buttonText}
      </Link>
    </section>
  );
}
