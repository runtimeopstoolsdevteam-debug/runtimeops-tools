import { PageContainer } from '@/components';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact - RuntimeOps',
  description: 'Get in touch with RuntimeOps.',
};

export default function ContactPage() {
  return (
    <PageContainer
      title="Contact"
      description="Get in touch with the RuntimeOps team"
    >
      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {/* General Inquiries */}
            <div className="border border-neutral-200 rounded-lg p-6 dark:border-neutral-800">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">General Inquiries</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Questions about RuntimeOps, feature requests, or general feedback</p>
                  <a
                    href="mailto:admin@runtimeops.dev"
                    className="inline-flex items-center gap-2 font-medium text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300"
                  >
                    admin@runtimeops.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="border border-neutral-200 rounded-lg p-6 dark:border-neutral-800">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Security Issues</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Report security vulnerabilities or privacy concerns</p>
                  <a
                    href="mailto:security@runtimeops.dev"
                    className="inline-flex items-center gap-2 font-medium text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300"
                  >
                    security@runtimeops.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Response Time</h2>
          <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-300">
              We respond to all inquiries within <strong>7 business days</strong>. Security issues are prioritized and may receive faster responses.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Ways to Reach Us</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <li><strong>Email:</strong> Preferred method for general inquiries and feedback</li>
            <li><strong>Security reports:</strong> Use security@runtimeops.dev for responsible disclosure</li>
            <li><strong>Social:</strong> Follow us on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Twitter</a> for updates</li>
            <li><strong>GitHub:</strong> Check our <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a> for source code and issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Is RuntimeOps free?</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Yes, RuntimeOps is free to use for debugging and non-commercial purposes.</p>
            </div>
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Do you store my data?</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">No. All data stays in your browser. We never store cron expressions, tokens, or personal inputs.</p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Can I use this for production?</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">RuntimeOps is designed for debugging and testing. For critical production use, thoroughly test results independently.</p>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
