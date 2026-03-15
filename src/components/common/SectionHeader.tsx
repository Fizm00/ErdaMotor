import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({ label, title, description, align = 'left', className = '' }: SectionHeaderProps) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'justify-between items-end md:items-start'} gap-6 ${className}`}>
      <div className={`max-w-2xl ${isCenter ? 'flex flex-col items-center' : ''}`}>
        {label && (
          <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            {label}
          </div>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
          {title}
        </h2>
      </div>
      {description && (
        <p className={`text-gray-500 mt-6 max-w-2xl text-lg ${isCenter ? '' : 'md:mt-12'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
