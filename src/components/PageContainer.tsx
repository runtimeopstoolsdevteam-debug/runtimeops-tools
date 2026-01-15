import React from 'react';

interface PageContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Page Header */}
        <div className="border-b border-neutral-200 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
          <div className="px-6 py-8 max-w-5xl">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">{title}</h1>
            {description && <p className="text-neutral-600 dark:text-neutral-400">{description}</p>}
          </div>
        </div>

        {/* Page Content */}
        <div className="px-6 py-8 max-w-5xl mx-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
