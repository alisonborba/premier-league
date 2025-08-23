export interface Club {
  code: string;
  name: string;
  country?: string;
  imgUrl?: string;
}

// Score can be either direct array or object with ft property
export type Score = [number, number] | { ft: [number, number] };

export interface Match {
  round: number | string;
  competition?: string;
  date: string;
  home: string;
  away: string;
  score: Score;
}

export interface TableRow {
  code: string;
  name: string;
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

export interface WebSocketMessage {
  type?: string;
  payload?: Match | Match[];
}

export interface StandingsState {
  tableRows: TableRow[];
  totalMatches: number;
  lastUpdate: Date;
}

export interface TeamHistory {
  club: Club;
  matches: Match[];
  summary: {
    played: number;
    wins: number;
    draws: number;
    losses: number;
    gf: number;
    ga: number;
    gd: number;
    points: number;
  };
}
