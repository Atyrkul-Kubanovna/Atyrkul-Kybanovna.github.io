import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm ${className}`}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}
