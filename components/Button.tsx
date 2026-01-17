import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  icon 
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#6D28D9] to-[#2563EB] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white text-[#6D28D9] border-2 border-[#6D28D9] hover:bg-[#6D28D9] hover:text-white',
    outline: 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-white hover:border-[#6D28D9] hover:text-[#6D28D9]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BA5A] hover:shadow-lg',
    call: 'bg-white text-[#6D28D9] border-2 border-[#6D28D9] hover:bg-[#6D28D9] hover:text-white'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-xl',
    medium: 'px-6 py-3 text-base rounded-2xl',
    large: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
