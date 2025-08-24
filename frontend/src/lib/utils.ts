import { PREMIER_LEAGUE_CLUBS_2019_2020 } from './constants';
import { Score } from './types';

// Helper function to extract goals from score (handles both formats)
export const extractGoals = (score: Score): [number, number] => {
  if (Array.isArray(score)) {
    return score;
  }
  return score.ft;
};

export const getClubImage = (code: string) => {
  const club = PREMIER_LEAGUE_CLUBS_2019_2020.find((club) => club.code === code);
  return club?.imgUrl;
};

export const getClubName = (code: string) => {
  const club = PREMIER_LEAGUE_CLUBS_2019_2020.find((club) => club.code === code);
  return club?.name || code;
};

// Unified position utilities
export const getPositionClass = (position: number): string => {
  if (position <= 4) return 'table-row--champions-league';
  if (position <= 5) return 'table-row--europa-league';
  if (position <= 6) return 'table-row--europa-qualifiers';
  if (position >= 18) return 'table-row--relegation';
  return '';
};

export const getPositionColor = (position: number): string => {
  if (position <= 4) return 'var(--champions-league-color)';
  if (position === 5) return 'var(--europa-league-color)';
  if (position === 6) return 'var(--europa-qualifiers-color)';
  if (position >= 18) return 'var(--relegation-color)';
  return 'var(--text-secondary)';
};

export const addPositionSuffix = (position: number): string => {
  if (position >= 11 && position <= 13) return 'th';
  switch (position % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};
