import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 ml-64">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertCircle size={48} className="text-neutral-400 dark:text-neutral-600" />
        </div>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-neutral-50 rounded-lg font-medium hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
