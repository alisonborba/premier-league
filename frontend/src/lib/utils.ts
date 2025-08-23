import { Score } from './types';

// Helper function to extract goals from score (handles both formats)
export const extractGoals = (score: Score): [number, number] => {
  if (Array.isArray(score)) {
    return score;
  }
  return score.ft;
};
