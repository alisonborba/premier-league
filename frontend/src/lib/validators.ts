import { z } from 'zod';
import { Match } from './types';

// Validator for Club
export const ClubSchema = z.object({
  code: z.string(),
  name: z.string(),
  country: z.string().optional(),
});

// Validator for Score - accepts both direct array and object with ft property
export const ScoreSchema = z.union([
  z.tuple([z.number(), z.number()]), // Direct array: [3, 1]
  z.object({ ft: z.tuple([z.number(), z.number()]) }), // Object: {"ft": [3, 1]}
]);

// Validator for Match
export const MatchSchema = z.object({
  round: z.union([z.string(), z.number()]),
  competition: z.string().optional(),
  date: z.string(),
  home: z.string(),
  away: z.string(),
  score: ScoreSchema,
});

// Validator for array of matches
export const MatchesArraySchema = z.array(MatchSchema);

// Validator for WebSocket message
export const WebSocketMessageSchema = z.union([
  MatchesArraySchema, // Direct array of matches
  z.object({
    type: z.string().optional(),
    payload: z.union([MatchSchema, MatchesArraySchema]).optional(),
  }),
]);

// Validator for clubs API response
export const ClubsResponseSchema = z.array(ClubSchema);

// Helper function to validate individual match
export const isValidMatch = (data: unknown): data is Match => {
  return MatchSchema.safeParse(data).success;
};

// Helper function to validate array of matches
export const isValidMatchesArray = (data: unknown): data is Match[] => {
  return MatchesArraySchema.safeParse(data).success;
};

// Helper function to validate WebSocket message
export const parseWebSocketMessage = (data: unknown): Match[] | null => {
  console.log('Validating WebSocket message:', data);

  // If it's already an array, validate it directly
  if (Array.isArray(data)) {
    console.log('Data is array, validating directly');
    const result = MatchesArraySchema.safeParse(data);
    if (result.success) {
      console.log('Array validation successful:', result.data.length, 'matches');
      return result.data;
    }
    // If validation fails, log but don't reject - try to extract valid matches
    console.warn('Some matches in array failed validation, attempting to extract valid ones');
    console.warn('Validation errors:', result.error);
    const validMatches: Match[] = [];
    for (const item of data) {
      if (isValidMatch(item)) {
        validMatches.push(item);
      } else {
        console.warn('Invalid match item:', item);
      }
    }
    console.log('Extracted valid matches:', validMatches.length);
    return validMatches.length > 0 ? validMatches : null;
  }

  // If it's an object, try to parse it
  if (typeof data === 'object' && data !== null) {
    console.log('Data is object, trying to parse');
    const result = WebSocketMessageSchema.safeParse(data);
    if (result.success) {
      const parsed = result.data;

      // If it's object with payload
      if (parsed.payload) {
        if (Array.isArray(parsed.payload)) {
          console.log('Object with array payload:', parsed.payload.length, 'matches');
          return parsed.payload;
        } else {
          console.log('Object with single match payload');
          return [parsed.payload];
        }
      }
    } else {
      console.warn('Object validation failed:', result.error);
    }
  }

  // If we get here, the data format is unexpected
  console.warn('Unexpected WebSocket message format:', data);
  return null;
};
