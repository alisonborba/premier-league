import { z } from 'zod';
import { Match } from './types';
import { PREMIER_LEAGUE } from './constants';
import plClubs from './PL-clubs-19-20.json';

const plClubsCodes = plClubs.map((club: { code: string }) => club.code.toUpperCase());

// Validator for Club
export const ClubSchema = z.object({
  code: z.string(),
  name: z.string(),
  country: z.string(),
});

// Validator for Score - accepts both direct array and object with ft property
export const ScoreSchema = z.union([
  z.tuple([z.number(), z.number()]), // Direct array: [3, 1]
  z.object({ ft: z.tuple([z.number(), z.number()]) }), // Object: {"ft": [3, 1]}
]);

// Validator for Match
export const MatchSchema = z.object({
  round: z.union([z.string(), z.number()]),
  competition: z.string(),
  date: z.string(),
  home: z.string(),
  away: z.string(),
  score: ScoreSchema,
});

// Validator for array of matches
export const MatchesArraySchema = z.array(MatchSchema);

// Validator for clubs API response
export const ClubsResponseSchema = z.array(ClubSchema);

// Helper function to validate individual match
export const isValidMatch = (data: Match, league: string, validClubs: string[]): boolean => {
  if (data.competition === league && validClubs.includes(data.home.toUpperCase()) && validClubs.includes(data.away.toUpperCase())) {
    return true;
  }
  return false;
};

// Helper function to validate array of matches
export const isValidMatchesArray = (data: unknown): data is Match[] => {
  return MatchesArraySchema.safeParse(data).success;
};

// Helper function to validate WebSocket message
export const parseWebSocketMessage = (data: Match): Match[] | null => {
  console.log('Validating WebSocket message:', data);

  const validMatches: Match[] = [];

  // If it's already an array, validate it directly
  if (Array.isArray(data)) {
    console.log('Data is array, validating directly');
    for (const item of data) {
      if (isValidMatch(item, PREMIER_LEAGUE, plClubsCodes)) {
        validMatches.push(item);
      }
    }
    console.log('Extracted valid matches:', validMatches.length);
    return validMatches.length > 0 ? validMatches : null;
  }

  // If it's an object, try to parse it
  if (typeof data === 'object' && data !== null) {
    if (isValidMatch(data, PREMIER_LEAGUE, plClubsCodes)) {
      validMatches.push(data);
    }
    return validMatches.length > 0 ? validMatches : null;
  }

  // If we get here, the data format is unexpected
  console.warn('Unexpected WebSocket message format:', data);
  return null;
};
