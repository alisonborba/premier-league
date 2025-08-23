import { useMemo } from 'react';
import { calculateStandings } from '../lib/aggregators';
import { sortTableRows, addPositions } from '../lib/sorting';
import { useMatchesState } from '../app/providers/MatchesProvider';
import { Club } from '../lib/types';

// Hook to calculate standings table from global matches state
export const useStandings = (clubsMap: Map<string, Club>) => {
  const { matches, totalMatches, lastUpdate } = useMatchesState();

  return useMemo(() => {
    if (matches.length === 0) {
      return {
        tableRows: [],
        totalMatches: 0,
        lastUpdate: null,
      };
    }

    // Calculate table statistics
    const tableRows = calculateStandings(matches, clubsMap);

    // Sort according to specified rules
    const sortedRows = sortTableRows(tableRows);

    // Add positions
    const rowsWithPositions = addPositions(sortedRows);
    
    return {
      tableRows: rowsWithPositions,
      totalMatches,
      lastUpdate,
    };
  }, [matches, totalMatches, lastUpdate, clubsMap]);
};
