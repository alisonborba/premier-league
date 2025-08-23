import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'medium',
  className = '' 
}) => {
  const sizeClass = `spinner--${size}`;
  
  return (
    <div className={`spinner ${sizeClass} ${className}`.trim()}>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
    </div>
  );
};
