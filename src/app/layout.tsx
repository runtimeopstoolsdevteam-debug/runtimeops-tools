import type { Metadata } from 'next';
import { SidebarNav, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'RuntimeOps - Production Debugging Utilities',
  description: 'Production debugging utilities for engineers. Validate cron expressions, convert epochs, inspect tokens.',
  openGraph: {
    title: 'RuntimeOps',
    description: 'Production debugging utilities for engineers.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 dark:bg-neutral-950">
        <div className="flex">
          {/* Sidebar */}
          <SidebarNav />

          {/* Main Content */}
          <div className="ml-64 flex-1 flex flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
