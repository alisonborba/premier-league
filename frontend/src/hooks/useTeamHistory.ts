import { useMemo } from 'react';
import { sortMatchesByDate, sortTableRows, addPositions } from '../lib/sorting';
import { calculateStandings } from '../lib/aggregators';
import { APP_CONFIG } from '../lib/constants';
import { useMatchesState } from '../app/providers/MatchesProvider';
import { Club } from '../lib/types';
import { extractGoals } from '../lib/utils';

// Hook to calculate team history and statistics from global matches state
export const useTeamHistory = (code: string, clubsMap: Map<string, Club>) => {
  const { matches } = useMatchesState();

  return useMemo(() => {
    if (!code || matches.length === 0) {
      return null;
    }

    // Filter team matches (home or away)
    const teamMatches = matches.filter((match) => {
      return match.home === code || match.away === code;
    });

    if (teamMatches.length === 0) {
      return null;
    }

    // Sort by date (most recent first)
    const sortedMatches = sortMatchesByDate(teamMatches);

    // Calculate statistics
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let gf = 0;
    let ga = 0;

    teamMatches.forEach((match) => {
      const [homeGoals, awayGoals] = extractGoals(match.score);
      const isHome = match.home === code;

      if (isHome) {
        gf += homeGoals;
        ga += awayGoals;
        if (homeGoals > awayGoals) wins++;
        else if (homeGoals < awayGoals) losses++;
        else draws++;
      } else {
        gf += awayGoals;
        ga += homeGoals;
        if (awayGoals > homeGoals) wins++;
        else if (awayGoals < homeGoals) losses++;
        else draws++;
      }
    });

    const played = wins + draws + losses;
    const points = wins * APP_CONFIG.POINTS.WIN + draws * APP_CONFIG.POINTS.DRAW;
    const gd = gf - ga;

    // Get club information from clubsMap
    const club = clubsMap.get(code) || {
      code: code,
      name: code, // Fallback to code if name not available
    };

    // Calculate current position
    const position = (() => {
      const tableRows = calculateStandings(matches, clubsMap);
      const sortedRows = sortTableRows(tableRows);
      const rowsWithPositions = addPositions(sortedRows);
      const teamRow = rowsWithPositions.find(row => row.code === code);
      return teamRow ? teamRow.position : null;
    })();

    return {
      club,
      matches: sortedMatches,
      position,
      summary: {
        played,
        wins,
        draws,
        losses,
        gf,
        ga,
        gd,
        points,
      },
    };
  }, [code, matches, clubsMap]);
};
