import React from 'react';

interface FloatingIconProps {
  children: React.ReactNode;
  className: string;
}

export default function FloatingIcon({ children, className }: FloatingIconProps) {
  return (
    <div className={`absolute animate-float ${className}`}>
      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-glow">
        {children}
      </div>
    </div>
  );
}