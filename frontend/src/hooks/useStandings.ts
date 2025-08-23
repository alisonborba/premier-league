import { useMemo } from 'react';
import { Match } from '../lib/types';
import { calculateStandings } from '../lib/aggregators';
import { sortTableRows, addPositions } from '../lib/sorting';

// Hook to calculate standings table
export const useStandings = (matches: Match[], clubsMap: Map<string, any>) => {
  return useMemo(() => {
    if (matches.length === 0) {
      return {
        tableRows: [],
        totalMatches: 0,
        lastUpdate: null,
      };
    }

    // Calculates table statistics
    const tableRows = calculateStandings(matches, clubsMap);

    // Sorts according to specified rules
    const sortedRows = sortTableRows(tableRows);

    // Adds positions
    const rowsWithPositions = addPositions(sortedRows);

    return {
      tableRows: rowsWithPositions,
      totalMatches: matches.length,
    };
  }, [matches, clubsMap]);
};
