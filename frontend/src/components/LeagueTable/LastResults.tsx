import { Check, Minus, X } from 'lucide-react';

interface LastResultsProps {
  results: Array<'W' | 'D' | 'L'>;
  className?: string;
}

export const LastResults = ({ results, className = '' }: LastResultsProps) => {
  const getResultClass = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W':
        return 'result-pill--win';
      case 'D':
        return 'result-pill--draw';
      case 'L':
        return 'result-pill--loss';
      default:
        return '';
    }
  };

  const getResultIcon = (result: 'W' | 'D' | 'L') => {
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
    <div className={`last-results ${className}`.trim()}>
      {results.map((result, index) => (
        <span key={index} className={`result-pill ${getResultClass(result)}`}>
          {getResultIcon(result)}
        </span>
      ))}
    </div>
  );
};
