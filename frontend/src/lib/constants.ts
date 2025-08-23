// Application configuration
export const APP_CONFIG = {
  BACKEND_URL: 'http://localhost:65000',
  WEBSOCKET_URL: 'ws://localhost:65000/matches/ws',
  POINTS: {
    WIN: 3,
    DRAW: 1,
    LOSS: 0,
  },
  TABLE_SIZE: 20, // Number of teams in Premier League
  FORM_HISTORY: 5, // Last 5 results to show in table
} as const;

// WebSocket connection states
export const WS_STATUS = {
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  ERROR: 'error',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  FETCH_CLUBS_FAILED: 'Failed to load clubs data',
  WEBSOCKET_CONNECTION_FAILED: 'WebSocket connection failed',
  INVALID_MATCH_DATA: 'Invalid match data received',
  SEASON_FINISHED: 'Season finished',
} as const;

// Table sorting rules (documented in code)
export const SORTING_RULES = {
  // 1. Points (desc) - highest points first
  // 2. Goal Difference (desc) - highest goal difference first
  // 3. Goals For (desc) - most goals scored first
  // 4. Name (asc) - alphabetical order of name
  PRIORITIES: ['points', 'gd', 'gf', 'name'] as const,
} as const;
