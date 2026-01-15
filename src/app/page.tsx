import { InfoCard, ButtonLink } from '@/components';
import { Clock, Lock, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 px-6 py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">RuntimeOps</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Production debugging utilities for engineers.
          </p>
          <ButtonLink href="/tools" size="lg">
            Explore Tools
          </ButtonLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-1 px-6 py-12">
        <div className="max-w-5xl">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              title="Cron Dialect Validator"
              description="Validate and simulate cron expressions across Azure, Quartz, Unix, AWS, and Vercel dialects."
              badge="Live"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Clock size={16} />
                <span>Multi-dialect support</span>
              </div>
            </InfoCard>

            <InfoCard
              title="Time & Timezone Utilities"
              description="Convert epochs, handle DST changes, and manage timezone offsets with precision."
              badge="Coming Soon"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Zap size={16} />
                <span>Instant conversions</span>
              </div>
            </InfoCard>

            <InfoCard
              title="Token & Runtime Inspectors"
              description="Decode and inspect JWT tokens, view expiry times, and analyze runtime metadata."
              badge="Coming Soon"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Lock size={16} />
                <span>Secure inspection</span>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
