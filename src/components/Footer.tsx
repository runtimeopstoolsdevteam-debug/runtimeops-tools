import React from 'react';
import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-neutral-50 mb-2">RuntimeOps</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Production debugging utilities for engineers
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 flex items-center gap-2">
                  <Shield size={14} />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 flex items-center gap-2">
                  <Lock size={14} />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
                  About
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p>&copy; {new Date().getFullYear()} RuntimeOps. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-50">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-50">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
