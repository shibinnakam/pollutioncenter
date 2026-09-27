import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <div className="relative rounded-full overflow-hidden bg-white p-0.5 shadow-sm border border-neutral-200 dark:border-neutral-700/80 transition-transform duration-200 hover:scale-105">
        <img
          src="/logo.jpeg"
          alt="VETOA Kerala Logo"
          className={`${sizeClasses[size]} object-contain rounded-full`}
        />
      </div>
      <span className="sr-only">VETOA Kerala</span>
    </div>
  );
};

export default Logo;