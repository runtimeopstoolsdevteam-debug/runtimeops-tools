import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 focus:ring-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-400 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700',
    ghost: 'text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function ButtonLink({ href, variant = 'primary', size = 'md', children }: ButtonLinkProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 focus:ring-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-400 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700',
    ghost: 'text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </Link>
  );
}
