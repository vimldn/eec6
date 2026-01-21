import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'dark';
}

export default function CTASection({
  title = "Ready to get your edge?",
  description = "Get a free, no-obligation SEO audit and see exactly where you stand.",
  buttonText = "Get Your Free Audit",
  buttonLink = "/contact/",
  variant = 'default'
}: CTASectionProps) {
  return (
    <section className={`py-20 px-6 ${variant === 'dark' ? 'bg-dark-lighter' : ''}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          {description}
        </p>
        <Link 
          href={buttonLink}
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5"
        >
          {buttonText}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
