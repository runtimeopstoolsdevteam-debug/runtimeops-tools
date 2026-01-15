import { PageContainer } from '@/components';

export const metadata = {
  title: 'Terms of Service - RuntimeOps',
  description: 'Terms of Service for RuntimeOps.',
};

export default function TermsPage() {
  return (
    <PageContainer
      title="Terms of Service"
      description="Legal terms governing use of RuntimeOps"
    >
      <div className="space-y-8 max-w-3xl">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            By accessing and using RuntimeOps (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">2. As-Is Disclaimer</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            RuntimeOps is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, about the accuracy, reliability, or completeness of the tools or data provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">3. No Warranties</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            To the fullest extent permitted by law, RuntimeOps disclaims all warranties, including:
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 ml-4">
            <li>• Warranties of merchantability or fitness for a particular purpose</li>
            <li>• Warranties of non-infringement or title</li>
            <li>• Warranties that the Service will be error-free, uninterrupted, or secure</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3">
            The tools may contain errors, bugs, or inaccuracies. Use at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">4. Limitation of Liability</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            To the fullest extent permitted by law, RuntimeOps and its operators shall not be liable for:
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 ml-4">
            <li>• Any indirect, incidental, special, or consequential damages</li>
            <li>• Loss of profits, revenue, data, or use</li>
            <li>• Damage to systems or business interruption</li>
            <li>• Any claim arising from your use of the Service</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3">
            This applies even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">5. Acceptable Use</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            You agree not to use RuntimeOps for:
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 ml-4">
            <li>• Any illegal or harmful activity</li>
            <li>• Attacks, hacking, or attempting to disrupt the Service</li>
            <li>• Abuse, harassment, or threatening behavior</li>
            <li>• Reverse-engineering or attempting to access source code</li>
            <li>• Violating intellectual property rights of others</li>
            <li>• Commercial purposes without permission</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3">
            Violation may result in suspension or termination of access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">6. Intellectual Property</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            All content, code, design, and materials in RuntimeOps are owned or licensed by RuntimeOps. You may not copy, reproduce, or distribute them without permission. You may use the tools for personal, non-commercial debugging purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">7. Third-Party Links</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            RuntimeOps may contain links to third-party services. We are not responsible for their content, accuracy, or practices. Use them at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">8. Termination</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            We reserve the right to modify, suspend, or terminate access to RuntimeOps at any time, with or without notice, for any reason including violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">9. Changes to Terms</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            We may update these terms periodically. We will post changes here with an updated date. Your continued use of RuntimeOps means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">10. Contact</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Questions about these terms? Contact us:
          </p>
          <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              <a href="mailto:admin@runtimeops.dev" className="underline hover:no-underline">admin@runtimeops.dev</a>
            </li>
          </ul>
        </section>

        <div className="text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-8">
          <p>Last updated: January 2026</p>
        </div>
      </div>
    </PageContainer>
  );
}
