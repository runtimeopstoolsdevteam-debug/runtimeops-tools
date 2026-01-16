import React from 'react';
import Link from 'next/link';
import { Home, Wrench, AlertCircle, Clock, Mail, Activity, BookOpen } from 'lucide-react';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/tools', label: 'Tools', icon: Wrench },
  { href: '/tools/cron', label: 'Cron Validator', icon: Clock },
  { href: '/about', label: 'About', icon: AlertCircle },
  { href: '/status', label: 'Status', icon: Activity },
  { href: '/changelog', label: 'Changelog', icon: BookOpen },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function SidebarNav() {
  return (
    <nav className="fixed left-0 top-0 w-64 h-screen border-r border-neutral-200 bg-neutral-50 overflow-y-auto flex flex-col dark:bg-neutral-900 dark:border-neutral-800">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">RuntimeOps</h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Production debugging utilities</p>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors dark:text-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-800"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Built for production debugging
        </p>
      </div>
    </nav>
  );
}
