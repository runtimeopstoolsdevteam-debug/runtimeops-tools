import { PageContainer } from '@/components';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'System Status - RuntimeOps',
  description: 'Real-time system status and uptime information.',
};

export default function StatusPage() {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%' },
    { name: 'Tools API', status: 'operational', uptime: '99.95%' },
    { name: 'Analytics', status: 'operational', uptime: '99.8%' },
  ];

  const incidents: Array<{ id: string; title: string; description: string; date: string }> = [];

  return (
    <PageContainer
      title="System Status"
      description="Real-time status of RuntimeOps services"
    >
      <div className="max-w-3xl space-y-8">
        {/* Overall Status */}
        <div className="border border-green-200 rounded-lg p-6 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 size={24} className="text-green-600 dark:text-green-400" />
            <h2 className="text-xl font-bold text-green-900 dark:text-green-200">All Systems Operational</h2>
          </div>
          <p className="text-green-800 dark:text-green-300">
            All RuntimeOps services are running normally. No incidents or degradation detected.
          </p>
        </div>

        {/* Service Status */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Service Status</h2>
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{service.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Uptime: {service.uptime}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {service.status === 'operational' ? 'Operational' : 'Degraded'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Recent Incidents</h2>
          {incidents.length === 0 ? (
            <p className="text-neutral-600 dark:text-neutral-400">
              No recent incidents. Last 30 days have been incident-free.
            </p>
          ) : (
            <div className="space-y-4">
              {incidents.map((incident: any) => (
                <div key={incident.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{incident.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{incident.description}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">{incident.date}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Status Page Info */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Uptime Information</h2>
          <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800 space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-neutral-700 dark:text-neutral-300">Last 7 days</span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-50">99.95%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-700 dark:text-neutral-300">Last 30 days</span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-50">99.92%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-700 dark:text-neutral-300">Last 90 days</span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-50">99.90%</span>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Reporting Issues</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            If you notice any issues not listed above, please{' '}
            <a href="/contact" className="underline hover:no-underline">
              contact us
            </a>{' '}
            immediately.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
