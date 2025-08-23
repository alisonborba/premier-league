import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { Score } from './types';
import { extractGoals } from './utils';

// Date formatting
export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'dd/MM/yyyy', { locale: enGB });
  } catch {
    return dateString; // Fallback to original string if parsing fails
  }
};

// Date formatting with day of week
export const formatDateWithDay = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'EEE, dd/MM/yyyy', { locale: enGB });
  } catch {
    return dateString;
  }
};

// Score formatting - handles both direct array and object with ft property
export const formatScore = (score: Score): string => {
  const [homeGoals, awayGoals] = extractGoals(score);
  return `${homeGoals}–${awayGoals}`;
};

// Goal difference formatting
export const formatGoalDifference = (gd: number): string => {
  if (gd > 0) return `+${gd}`;
  if (gd < 0) return `${gd}`;
  return '0';
};

// Form formatting (last results)
export const formatForm = (form: Array<'W' | 'D' | 'L'>): string => {
  return form.join('');
};

// String capitalisation
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// String truncation
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};
