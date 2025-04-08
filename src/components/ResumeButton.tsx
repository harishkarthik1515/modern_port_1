import React from 'react';
import { FileDown } from 'lucide-react';

export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download="resume.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-glow"
    >
      <FileDown className="w-5 h-5" />
      Download Resume
    </a>
  );
}