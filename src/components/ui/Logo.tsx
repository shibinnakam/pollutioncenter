import React from 'react';
import { Car } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center">
      <div className="bg-primary-600 dark:bg-primary-500 p-1.5 rounded-full">
        <Car size={22} className="text-white" />
      </div>
      <span className="sr-only">VEOTA Kerala</span>
    </div>
  );
};

export default Logo;