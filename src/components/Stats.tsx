import React from 'react';
import { Code, Coffee, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
}

const StatItem = ({ icon: Icon, value, label }: StatItemProps) => (
  <div className="flex flex-col items-center p-4">
    <Icon className="w-8 h-8 mb-2 text-cyan-400 dark:text-cyan-400" />
    <span className="text-2xl font-bold text-gray-800 dark:text-white">{value}</span>
    <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
  </div>
);

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 bg-white/50 dark:bg-indigo-900/30 rounded-2xl backdrop-blur-sm p-4">
      <StatItem icon={Code} value="50+" label="Projects Completed" />
      <StatItem icon={Users} value="30+" label="Happy Clients" />
      <StatItem icon={Coffee} value="1000+" label="Cups of Coffee" />
      <StatItem icon={Award} value="15+" label="Awards Won" />
    </div>
  );
}