import React from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success';
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const typeStyles = {
    info: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 text-blue-900 dark:text-blue-200',
    warning: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-900 dark:text-amber-200',
    success: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-900 dark:text-green-200',
  };

  const iconStyles = {
    info: 'text-blue-600 dark:text-blue-400',
    warning: 'text-amber-600 dark:text-amber-400',
    success: 'text-green-600 dark:text-green-400',
  };

  const Icon = type === 'success' ? CheckCircle2 : type === 'warning' ? AlertCircle : Info;

  return (
    <div className={`border rounded-lg p-4 ${typeStyles[type]}`}>
      <div className="flex gap-3">
        <Icon size={20} className={`flex-shrink-0 mt-0.5 ${iconStyles[type]}`} />
        <div>
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
