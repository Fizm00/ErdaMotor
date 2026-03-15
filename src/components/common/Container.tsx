import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  id,
  as: Tag = 'section',
}) => {
  // Use bg-white as default ONLY if no other background class is provided
  const bgClass = className.includes('bg-') ? '' : 'bg-white';
  
  return (
    <Tag
      id={id}
      className={`${bgClass} py-16 md:py-24 px-4 md:px-8 lg:px-16 w-full ${className}`}
    >
      <div className="w-full flex flex-col">
        {children}
      </div>
    </Tag>
  );
};

export default Container;
