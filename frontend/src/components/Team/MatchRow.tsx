import React from 'react';
import { Match } from '../../lib/types';
import { formatDate, formatScore } from '../../lib/format';

interface MatchRowProps {
  match: Match;
  teamCode: string;
  className?: string;
}

export const MatchRow: React.FC<MatchRowProps> = ({ 
  match, 
  teamCode, 
  className = '' 
}) => {
  const isHome = match.home === teamCode;
  const [homeGoals, awayGoals] = match.score;
  
  // Determines result for the team
  const getResult = () => {
    if (isHome) {
      if (homeGoals > awayGoals) return 'win';
      if (homeGoals < awayGoals) return 'loss';
      return 'draw';
    } else {
      if (awayGoals > homeGoals) return 'win';
      if (awayGoals < homeGoals) return 'loss';
      return 'draw';
    }
  };

  const result = getResult();
  const opponentCode = isHome ? match.away : match.home;
  const opponentName = opponentCode; // Will be enriched by hook

  return (
    <div className={`match-row match-row--${result} ${className}`.trim()}>
      <div className="match-date">
        {formatDate(match.date)}
      </div>
      
      <div className="match-info">
        <div className="match-venue">
          <span className={`venue-indicator venue-indicator--${isHome ? 'home' : 'away'}`}>
            {isHome ? 'H' : 'A'}
          </span>
        </div>
        
        <div className="match-teams">
          <span className="team-name team-name--current">
            {isHome ? 'Us' : opponentName}
          </span>
          <span className="match-score">
            {formatScore(match.score)}
          </span>
          <span className="team-name team-name--opponent">
            {isHome ? opponentName : 'Us'}
          </span>
        </div>
        
        <div className="match-competition">
          {match.competition || 'Premier League'}
        </div>
      </div>
    </div>
  );
};
