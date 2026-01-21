import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition-all"
        >
          Go Back Home
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
