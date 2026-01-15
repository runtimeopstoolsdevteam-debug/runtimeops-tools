import { PageContainer } from '@/components';

export const metadata = {
  title: 'Privacy Policy - RuntimeOps',
  description: 'Privacy Policy for RuntimeOps.',
};

export default function PrivacyPage() {
  return (
    <PageContainer
      title="Privacy Policy"
      description="How we handle your data"
    >
      <div className="space-y-8 max-w-3xl prose prose-neutral dark:prose-invert">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Summary</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            RuntimeOps is designed with privacy first. We do not store or sell your personal data. We collect minimal analytics to improve our tools. You can use RuntimeOps knowing your input data is safe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">What We Collect</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            RuntimeOps uses analytics to understand how our tools are used and where to focus development efforts.
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 mb-4">
            <li><strong>Page views and navigation:</strong> Which tools you access and how long you spend on each page</li>
            <li><strong>Feature usage:</strong> Which cron dialects are validated, which tools are most helpful</li>
            <li><strong>Error patterns:</strong> Anonymous error rates and common mistakes to improve validation</li>
            <li><strong>Device information:</strong> Browser type, OS, screen resolution for compatibility</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300">
            This data is anonymized and does not identify you personally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">What We Do NOT Collect</h2>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>✓ <strong>Your cron expressions</strong> - Never stored or transmitted</li>
            <li>✓ <strong>Your tokens or credentials</strong> - Never stored or transmitted</li>
            <li>✓ <strong>Your timestamps or personal data</strong> - Never stored or transmitted</li>
            <li>✓ <strong>Personal information</strong> - Email, name, address, or any identifying data unless you contact us</li>
            <li>✓ <strong>User accounts</strong> - We don't require or maintain user accounts</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4">
            All tool operations happen in your browser. Your input never reaches our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Cookies & Analytics</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            We use Google Analytics to measure site performance and usage. Google Analytics may set cookies to track your activity across our site.
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>• Analytics are anonymized - no personal identification</li>
            <li>• We do not share analytics data with third parties for advertising</li>
            <li>• You can disable cookies in your browser settings</li>
            <li>• We use a GDPR-compliant analytics configuration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Third Parties</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            RuntimeOps is hosted and operated by third parties. Here's how your data is handled:
          </p>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <li>
              <strong>Hosting (Vercel):</strong> Your requests to our website are routed through Vercel infrastructure. Vercel may log request metadata (IP, user agent, timestamps) for uptime and debugging.
            </li>
            <li>
              <strong>Analytics (Google Analytics):</strong> Anonymous analytics data is sent to Google. See Google's privacy policy for details.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Your Rights</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            You have the right to:
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>• Request what data we have about you (if any)</li>
            <li>• Ask us to delete your data</li>
            <li>• Disable cookies and analytics in your browser</li>
            <li>• Contact us with privacy questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Changes to This Policy</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            We may update this policy periodically. We will post changes here with an updated date. Your continued use of RuntimeOps means you accept the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Contact</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Questions about privacy? Contact us:
          </p>
          <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              <a href="mailto:security@runtimeops.dev" className="underline hover:no-underline">security@runtimeops.dev</a> - Security and privacy concerns
            </li>
            <li>
              <a href="mailto:admin@runtimeops.dev" className="underline hover:no-underline">admin@runtimeops.dev</a> - General inquiries
            </li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4">
            We respond within 7 business days.
          </p>
        </section>

        <div className="text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-8">
          <p>Last updated: January 2026</p>
        </div>
      </div>
    </PageContainer>
  );
}
