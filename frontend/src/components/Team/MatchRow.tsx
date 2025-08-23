/** @format */

import React from 'react';
import { Match } from '../../lib/types';
import { formatDate, formatScore } from '../../lib/format';
import { extractGoals } from '../../lib/utils';

interface MatchRowProps {
  match: Match;
  teamCode: string;
  className?: string;
}

export const MatchRow = ({ match, teamCode, className = '' }: MatchRowProps) => {
  const isHome = match.home === teamCode;
  const [homeGoals, awayGoals] = extractGoals(match.score);

  const opponentCode = isHome ? match.away : match.home;
  const opponentName = opponentCode; // Will be enriched by hook

  return (
    <div className={`match-row ${className}`.trim()}>
      <div className="match-date">{formatDate(match.date)}</div>

      <div className="match-info">
        <div className="match-teams">
          <span className="team-name team-name--current">{isHome ? teamCode : opponentName}</span>
          <span className="match-score">{formatScore(match.score)}</span>
          <span className="team-name team-name--opponent">{isHome ? opponentName : teamCode}</span>
        </div>

        <div className="match-competition">{match.competition || 'Premier League'}</div>
      </div>
    </div>
  );
};
