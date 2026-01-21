import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Extra Edge Club Ltd.',
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-text-secondary">
          <p><strong className="text-white">Last updated:</strong> January 2025</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p>
            Extra Edge Club Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect information you provide directly to us, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information</li>
            <li>Business information and website URL</li>
            <li>Communications you send to us</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your enquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            <strong className="text-white">Email:</strong> hello@extraedgeclub.com
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
