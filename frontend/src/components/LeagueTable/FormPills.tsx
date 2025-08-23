/** @format */

import React from 'react';
import { formatForm } from '../../lib/format';

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

  const getResultLabel = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W':
        return 'Win';
      case 'D':
        return 'Draw';
      case 'L':
        return 'Loss';
      default:
        return '';
    }
  };

  const getResult = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W':
        return '✓';
      case 'D':
        return '-';
      case 'L':
        return 'x';
      default:
        return '';
    }
  };

  return (
    <div className={`form-pills ${className}`.trim()}>
      {form.map((result, index) => (
        <span
          key={index}
          className={`form-pill ${getResultClass(result)}`}
          title={getResultLabel(result)}
          aria-label={`${getResultLabel(result)} in match ${index + 1}`}
        >
          {getResult(result)}
        </span>
      ))}
    </div>
  );
};
