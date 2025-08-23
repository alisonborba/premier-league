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

  const teamName = isHome ? teamCode : opponentName;

  return (
    <div className={`match-row ${className}`.trim()}>
      <div className="match-info">
        <div className="match-competition">
          {match.competition} - {match.round} ({formatDate(match.date)})
        </div>
        <div className="match-teams">
          <div className="team-name">{isHome ? teamCode : opponentName}</div>
          <div className="match-score">{formatScore(match.score)}</div>
          <div className="team-name">{isHome ? opponentName : teamCode}</div>
        </div>
      </div>
    </div>
  );
};
