import { useMemo } from 'react';
import { Match, Club, TeamHistory } from '../lib/types';
import { sortMatchesByDate } from '../lib/sorting';
import { APP_CONFIG } from '../lib/constants';

// Hook to calculate team history and statistics
export const useTeamHistory = (
  code: string,
  matches: Match[],
  clubsMap: Map<string, Club>
): TeamHistory | null => {
  return useMemo(() => {
    if (!code || matches.length === 0) {
      return null;
    }

    // Filters team matches (home or away)
    const teamMatches = matches.filter(
      (match) => match.home === code || match.away === code
    );

    if (teamMatches.length === 0) {
      return null;
    }

    // Sorts by date (most recent first)
    const sortedMatches = sortMatchesByDate(teamMatches);

    // Calculates statistics
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let gf = 0;
    let ga = 0;

    teamMatches.forEach((match) => {
      const [homeGoals, awayGoals] = match.score;
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

    // Gets club information
    const club = clubsMap.get(code) || {
      code,
      name: code, // Fallback to code if name not available
    };

    return {
      club,
      matches: sortedMatches,
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
