import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'gradient';
  className?: string;
  padding?: 'small' | 'medium' | 'large';
}

export function Card({ children, variant = 'default', className = '', padding = 'medium' }: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-200';
  
  const variants = {
    default: 'bg-white shadow-md hover:shadow-lg',
    highlighted: 'bg-gradient-to-br from-white to-purple-50 shadow-lg border-2 border-purple-200',
    gradient: 'bg-gradient-to-r from-[#6D28D9] to-[#2563EB] text-white shadow-lg'
  };
  
  const paddings = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}
