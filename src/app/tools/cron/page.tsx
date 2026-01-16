import { PageContainer, Callout } from '@/components';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Cron Dialect Validator - RuntimeOps',
  description: 'Validate and simulate cron expressions across multiple dialects.',
};

export default function CronPage() {
  return (
    <PageContainer
      title="Cron Dialect Validator & Simulator"
      description="Validate and test cron expressions across multiple platforms."
    >
      <div className="space-y-8">
        {/* Coming Soon Notice */}
        <Callout type="info" title="Coming Soon">
          This tool is under active development. It will be available soon.
        </Callout>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            What it will do
          </h2>
          <ul className="space-y-3">
            {[
              'Validate cron expressions for Azure, Quartz, Unix, AWS, and Vercel dialects',
              'Simulate cron schedules and show upcoming trigger times',
              'Highlight syntax errors with helpful error messages',
              'Compare cron expressions across different platforms',
              'Export cron schedules in various formats',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                <Check size={20} className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Privacy Notice */}
        <Callout type="success" title="Your data is safe">
          This tool will never store your cron expressions server-side. All validation and simulation happens in your browser.
        </Callout>

        {/* Get Updates */}
        <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Stay updated</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Bookmark this page or check our <a href="/changelog" className="underline hover:no-underline">Changelog</a> for launch announcements.
          </p>
        </div>

        {/* Supported Dialects */}
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Supported Cron Dialects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Unix/Linux', desc: 'Standard 5-field format' },
              { name: 'Quartz', desc: '6-7 field with seconds' },
              { name: 'Azure Logic Apps', desc: 'Custom proprietary format' },
              { name: 'AWS Events', desc: 'CloudWatch cron format' },
              { name: 'Vercel Cron', desc: 'Vercel deployment cron' },
              { name: 'Spring Scheduler', desc: '@Scheduled annotations' },
            ].map((dialect) => (
              <div
                key={dialect.name}
                className="border border-neutral-200 rounded-lg p-4 dark:border-neutral-800"
              >
                <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-1">
                  {dialect.name}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{dialect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
