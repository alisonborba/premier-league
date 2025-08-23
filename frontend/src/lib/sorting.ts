import { TableRow } from './types';
import { SORTING_RULES } from './constants';

// Comparison function for table sorting
// Sorting rules (documented):
// 1. Points (desc) - highest points first
// 2. Goal Difference (desc) - highest goal difference first  
// 3. Goals For (desc) - most goals scored first
// 4. Name (asc) - alphabetical order of name
export const sortTableRows = (tableRows: TableRow[]): TableRow[] => {
  return [...tableRows].sort((a, b) => {
    // 1. Compare points (highest first)
    if (a.points !== b.points) {
      return b.points - a.points;
    }

    // 2. Compare goal difference (highest first)
    if (a.gd !== b.gd) {
      return b.gd - a.gd;
    }

    // 3. Compare goals for (highest first)
    if (a.gf !== b.gf) {
      return b.gf - a.gf;
    }

    // 4. Compare names (alphabetical order)
    return a.name.localeCompare(b.name);
  });
};

// Adds position (ranking) for each team in the table
export const addPositions = (tableRows: TableRow[]): (TableRow & { position: number })[] => {
  return tableRows.map((row, index) => ({
    ...row,
    position: index + 1,
  }));
};

// Helper function to sort matches by date (most recent first)
export const sortMatchesByDate = <T extends { date: string }>(matches: T[]): T[] => {
  return [...matches].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Helper function to sort matches by date (oldest first)
export const sortMatchesByDateAsc = <T extends { date: string }>(matches: T[]): T[] => {
  return [...matches].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
