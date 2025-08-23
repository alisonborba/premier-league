import { Match, TableRow, Club } from './types';
import { APP_CONFIG } from './constants';
import { extractGoals } from './utils';

// Partial interface for table construction
interface TableRowPartial {
  code: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: Array<'W' | 'D' | 'L'>;
}



// Generates unique ID for match (for deduplication)
export const generateMatchId = (match: Match): string => {
  return `${match.date}|${match.home}|${match.away}`;
};

// Calculates match result for a specific team
const calculateMatchResult = (
  match: Match,
  teamCode: string
): 'W' | 'D' | 'L' => {
  const [homeGoals, awayGoals] = extractGoals(match.score);

  if (match.home === teamCode) {
    if (homeGoals > awayGoals) return 'W';
    if (homeGoals < awayGoals) return 'L';
    return 'D';
  } else {
    if (awayGoals > homeGoals) return 'W';
    if (awayGoals < homeGoals) return 'L';
    return 'D';
  }
};

// Updates team statistics based on a match
const updateTeamStats = (
  stats: TableRowPartial,
  match: Match,
  teamCode: string
): TableRowPartial => {
  const [homeGoals, awayGoals] = extractGoals(match.score);
  const isHome = match.home === teamCode;
  const goalsFor = isHome ? homeGoals : awayGoals;
  const goalsAgainst = isHome ? awayGoals : homeGoals;
  const result = calculateMatchResult(match, teamCode);

  const newStats = { ...stats };

  // Updates basic statistics
  newStats.played += 1;
  newStats.gf += goalsFor;
  newStats.ga += goalsAgainst;
  newStats.gd = newStats.gf - newStats.ga;

  // Updates wins/draws/losses
  switch (result) {
    case 'W':
      newStats.wins += 1;
      newStats.points += APP_CONFIG.POINTS.WIN;
      break;
    case 'D':
      newStats.draws += 1;
      newStats.points += APP_CONFIG.POINTS.DRAW;
      break;
    case 'L':
      newStats.losses += 1;
      newStats.points += APP_CONFIG.POINTS.LOSS;
      break;
  }

  // Updates form (last 5 results)
  newStats.form.push(result);
  if (newStats.form.length > APP_CONFIG.FORM_HISTORY) {
    newStats.form.shift();
  }

  return newStats;
};

// Initialises empty statistics for a team
const initializeTeamStats = (code: string): TableRowPartial => ({
  code,
  played: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  gf: 0,
  ga: 0,
  gd: 0,
  points: 0,
  form: [],
});

// Main function to calculate standings
export const calculateStandings = (
  matches: Match[],
  clubsMap: Map<string, Club>
): TableRow[] => {
  // Return empty array if clubsMap is not available
  if (!clubsMap || clubsMap.size === 0) {
    return [];
  }

  // Map to store partial statistics for each team
  const teamStatsMap = new Map<string, TableRowPartial>();

  // Initialises statistics for all known clubs
  clubsMap.forEach((club) => {
    teamStatsMap.set(club.code, initializeTeamStats(club.code));
  });

  // Processes each match
  matches.forEach((match) => {
    // Validates if match has valid score using the helper function
    try {
      const [homeGoals, awayGoals] = extractGoals(match.score);
      if (typeof homeGoals !== 'number' || typeof awayGoals !== 'number' ||
        isNaN(homeGoals) || isNaN(awayGoals)) {
        console.warn('Invalid score values:', match);
        return;
      }
    } catch (error) {
      console.warn('Invalid match score format:', match, error);
      return;
    }

    // Initialises statistics for teams not seen before
    if (!teamStatsMap.has(match.home)) {
      teamStatsMap.set(match.home, initializeTeamStats(match.home));
    }
    if (!teamStatsMap.has(match.away)) {
      teamStatsMap.set(match.away, initializeTeamStats(match.away));
    }

    // Updates statistics for both teams
    const homeStats = teamStatsMap.get(match.home)!;
    const awayStats = teamStatsMap.get(match.away)!;

    teamStatsMap.set(match.home, updateTeamStats(homeStats, match, match.home));
    teamStatsMap.set(match.away, updateTeamStats(awayStats, match, match.away));
  });

  // Converts Map to array and enriches with club names
  const tableRows: TableRow[] = Array.from(teamStatsMap.values()).map((stats) => {
    const club = clubsMap.get(stats.code);
    return {
      ...stats,
      name: club?.name || stats.code, // Fallback to code if name not available
    };
  });

  return tableRows;
};
