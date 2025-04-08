import React from 'react';
import { Code2, Cpu, Database, Globe2 } from 'lucide-react';
import ResumeButton from './ResumeButton';
import FloatingIcon from './FloatingIcon';
import Stats from './Stats';
import QuickLinks from './QuickLinks';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-indigo-950 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating icons */}
      <FloatingIcon className="top-1/4 left-1/4">
        <Code2 className="w-6 h-6 text-cyan-400" />
      </FloatingIcon>
      <FloatingIcon className="top-1/3 right-1/4">
        <Database className="w-6 h-6 text-purple-400" />
      </FloatingIcon>
      <FloatingIcon className="bottom-1/3 left-1/3">
        <Globe2 className="w-6 h-6 text-blue-400" />
      </FloatingIcon>
      <FloatingIcon className="bottom-1/4 right-1/3">
        <Cpu className="w-6 h-6 text-pink-400" />
      </FloatingIcon>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Harish Karthik D
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Technology Enthusiast & Innovator
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Crafting Ideas into Reality with Technology
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all shadow-glow"
            >
              Explore My Work
            </a>
            <ResumeButton />
          </div>
          <QuickLinks />
        </div>
        <Stats />
      </div>
    </div>
  );
}