import { PageContainer, Callout } from '@/components';

export const metadata = {
  title: 'About - RuntimeOps',
  description: 'About RuntimeOps and our mission.',
};

export default function AboutPage() {
  return (
    <PageContainer
      title="About RuntimeOps"
      description="Built by engineers, for engineers debugging production."
    >
      <div className="space-y-8 max-w-3xl">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Our Mission</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            RuntimeOps exists to solve a specific problem: production debugging is hard. When your scheduled job doesn't run at 2 AM, when a token expires at an unexpected time, or when a cron expression works in one environment but fails in another, you need answers fast.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            We're building tools that eliminate guesswork. Our focus is on correctness, clarity, and speed. Every feature is designed with production debugging in mind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Data Philosophy</h2>
          <Callout type="success" title="Your privacy matters">
            <p>
              We do not store, log, or analyze the data you input into our tools. Your cron expressions, tokens, timestamps—they stay on your machine. All validation and computation happens in your browser.
            </p>
          </Callout>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">What We Collect</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            We use minimal analytics to understand which tools are helpful and which features matter most. This helps us prioritize development.
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>• <strong>Page views</strong> - Which tools you visit</li>
            <li>• <strong>Feature usage</strong> - Which cron dialects are validated most</li>
            <li>• <strong>Error patterns</strong> - Common syntax errors to improve error messages</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4">
            See our <a href="/privacy" className="underline hover:no-underline">Privacy Policy</a> for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Why We Built This</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            The founders spent years debugging production issues across different platforms. We built RuntimeOps because we needed it ourselves. Now we're sharing it with the engineering community.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
