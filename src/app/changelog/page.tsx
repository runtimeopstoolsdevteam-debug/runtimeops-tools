import { PageContainer } from '@/components';

export const metadata = {
  title: 'Changelog - RuntimeOps',
  description: 'RuntimeOps changelog and release notes.',
};

export default function ChangelogPage() {
  return (
    <PageContainer
      title="Changelog"
      description="Release notes and updates"
    >
      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            v0.1.0 - Foundation Release
          </h2>
          <div className="text-neutral-700 dark:text-neutral-300 space-y-2">
            <p className="text-sm">
              <span className="font-semibold">January 15, 2026</span>
            </p>
            <ul className="space-y-2 ml-4">
              <li>✨ Site foundation and layout architecture</li>
              <li>✨ Home, Tools, About, Privacy, Terms, and Contact pages</li>
              <li>✨ Status page for system health</li>
              <li>✨ Professional enterprise-style UI design</li>
              <li>🔧 Tailwind CSS and responsive layout</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Upcoming Features
          </h2>
          <div className="text-neutral-700 dark:text-neutral-300 space-y-3">
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">Cron Dialect Validator</p>
              <p className="text-sm">Validate and simulate cron expressions across multiple platforms</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">Epoch/Ticks Converter</p>
              <p className="text-sm">Convert between Unix timestamps, milliseconds, and human-readable dates</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">Timezone/DST Simulator</p>
              <p className="text-sm">Understand timezone offsets and DST changes across regions</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">JWT Expiry Inspector</p>
              <p className="text-sm">Decode JWT tokens and inspect expiry times and claims</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Documentation
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            For the latest updates and development information, visit our{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              GitHub repository
            </a>
            .
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
