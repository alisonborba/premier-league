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
