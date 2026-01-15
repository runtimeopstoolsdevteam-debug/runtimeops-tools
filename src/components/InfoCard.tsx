import React from 'react';

interface InfoCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  href?: string;
  badge?: string;
}

export function InfoCard({ title, description, children, href, badge }: InfoCardProps) {
  const content = (
    <div className="p-6 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors dark:border-neutral-800 dark:hover:border-neutral-700">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{title}</h3>
        {badge && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
      {description && <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:shadow-md transition-shadow">
        {content}
      </a>
    );
  }

  return content;
}
