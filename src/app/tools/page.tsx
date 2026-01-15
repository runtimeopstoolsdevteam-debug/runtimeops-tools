import { PageContainer, InfoCard, ButtonLink } from '@/components';
import { ArrowRight, Clock, Zap, Lock, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Tools - RuntimeOps',
  description: 'Production debugging tools for engineers.',
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'Cron Dialect Validator',
      description: 'Validate and simulate cron expressions across multiple dialects.',
      href: '/tools/cron',
      icon: Clock,
      status: 'Live',
      features: ['Azure', 'Quartz', 'Unix', 'AWS', 'Vercel'],
    },
    {
      title: 'Epoch/Ticks Converter',
      description: 'Convert between Unix timestamps, milliseconds, and human-readable dates.',
      href: '#',
      icon: Zap,
      status: 'Coming Soon',
      features: ['Unix time', 'JavaScript ticks', 'ISO 8601'],
    },
    {
      title: 'Timezone/DST Simulator',
      description: 'Understand timezone offsets, DST changes, and scheduling across regions.',
      href: '#',
      icon: BarChart3,
      status: 'Coming Soon',
      features: ['DST handling', 'Multi-region', 'Schedule preview'],
    },
    {
      title: 'JWT Expiry Inspector',
      description: 'Decode JWT tokens and inspect expiry times, claims, and signature.',
      href: '#',
      icon: Lock,
      status: 'Coming Soon',
      features: ['Token decode', 'Expiry time', 'Claim inspection'],
    },
  ];

  return (
    <PageContainer
      title="Tools"
      description="Production debugging utilities to help you diagnose and fix runtime issues."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.title}>
              <InfoCard
                title={tool.title}
                description={tool.description}
                href={tool.status === 'Live' ? tool.href : undefined}
                badge={tool.status}
              >
                <div className="space-y-3 pt-2">
                  <div className="flex gap-2 flex-wrap">
                    {tool.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block px-2 py-1 rounded text-xs bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  {tool.status === 'Live' && (
                    <ButtonLink href={tool.href} variant="secondary" size="sm">
                      Open Tool <ArrowRight size={14} />
                    </ButtonLink>
                  )}
                </div>
              </InfoCard>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">More tools coming soon</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We're constantly adding new debugging utilities. Check back regularly for updates.
        </p>
      </div>
    </PageContainer>
  );
}
