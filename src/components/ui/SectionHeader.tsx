import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  description, 
  align = 'left', 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center mx-auto' : ''} ${className}`}>
      {label && (
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase leading-none">
            {label}
          </span>
        </div>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-gray-900`}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
