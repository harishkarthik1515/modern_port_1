import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

export default function QuickLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 transition-all transform hover:scale-110"
          aria-label={label}
        >
          <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </a>
      ))}
    </div>
  );
}