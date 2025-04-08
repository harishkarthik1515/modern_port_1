import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-indigo-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Harish Karthik D. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-indigo-900/50 rounded-full hover:bg-indigo-900 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}