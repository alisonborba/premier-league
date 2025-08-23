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

export const PREMIER_LEAGUE = 'Premier League';

export const ENGLAND = 'England';

export const PREMIER_LEAGUE_CLUBS_2019_2020 = [
  {
    name: "Watford FC",
    code: 'WAT',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/lHr1L31i7aJS-O8tUdHOIQ_48x48.png',
  },
  {
    name: 'AFC Bournemouth',
    code: 'BOU',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/IcOt-hrK04B-RlRwI3R0yA_48x48.png',
  },
  {
    name: 'Norwich City FC',
    code: 'NOR',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/rdYUHHFDGi3FoPorBG8o1w_48x48.png',
  },
  {
    name: 'Burnley FC',
    code: 'BUR',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/XC5UrPpuN5yzkgCiiz9yWg_48x48.png',
  },
  {
    name: 'Manchester United FC',
    code: 'MUN',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png',
  },
  {
    name: 'Manchester City FC',
    code: 'MCI',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png',
  },
  {
    name: 'Aston Villa FC',
    code: 'AVL',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_48x48.png',
  },
  {
    name: 'Arsenal FC',
    code: 'ARS',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png',
  },
  {
    name: 'Crystal Palace FC',
    code: 'CRY',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/8piQOzndGmApKYTcvyN9vA_48x48.png',
  },
  {
    name: 'Southampton FC',
    code: 'SOU',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/y1V4sm2SEBiWUPRIYl5rfg_48x48.png',
  },
  {
    name: 'Liverpool FC',
    code: 'LIV',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nGfV05dipbAc7zzojivKew_48x48.png',
  },
  {
    name: 'West Ham United FC',
    code: 'WHU',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png',
  },
  {
    name: 'Newcastle United FC',
    code: 'NEW',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/96CcNNQ0AYDAbssP0V9LuQ_48x48.png',
  },
  {
    name: 'Leicester City FC',
    code: 'LEI',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png',
  },
  {
    name: 'Tottenham Hotspur FC',
    code: 'TOT',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png',
  },
  {
    name: 'Everton FC',
    code: 'EVE',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png',
  },
  {
    name: 'Sheffield United FC',
    code: 'SHU',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/wF8AgQsssfy3_GLyVR3dSg_48x48.png',
  },
  {
    name: 'Wolverhampton Wanderers FC',
    code: 'WOL',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_48x48.png',
  },
  {
    name: 'Brighton & Hove Albion FC',
    code: 'BHA',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_48x48.png',
  },
  {
    name: 'Chelsea FC',
    code: 'CHE',
    country: 'England',
    imgUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png',
  },
];
