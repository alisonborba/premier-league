/** @format */

import React from 'react';
import { Check, Minus, X } from 'lucide-react';

interface FormPillsProps {
  form: Array<'W' | 'D' | 'L'>;
  className?: string;
}

export const FormPills: React.FC<FormPillsProps> = ({ form, className = '' }) => {
  const getResultClass = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W':
        return 'form-pill--win';
      case 'D':
        return 'form-pill--draw';
      case 'L':
        return 'form-pill--loss';
      default:
        return '';
    }
  };

  const getResult = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W':
        return <Check size={12} strokeWidth={3} />;
      case 'D':
        return <Minus size={12} strokeWidth={3} />;
      case 'L':
        return <X size={12} strokeWidth={3} />;
      default:
        return '';
    }
  };

  return (
    <div className={`form-pills ${className}`.trim()}>
      {form.map((result, index) => (
        <span key={index} className={`form-pill ${getResultClass(result)}`}>
          {getResult(result)}
        </span>
      ))}
    </div>
  );
};
