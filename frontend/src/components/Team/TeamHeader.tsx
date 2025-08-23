import React from 'react';
import { Link } from 'react-router-dom';
import { TeamHistory } from '../../lib/types';
import { formatGoalDifference } from '../../lib/format';

interface TeamHeaderProps {
  teamHistory: TeamHistory;
  className?: string;
}

export const TeamHeader: React.FC<TeamHeaderProps> = ({ 
  teamHistory, 
  className = '' 
}) => {
  const { club, summary } = teamHistory;

  return (
    <header className={`team-header ${className}`.trim()}>
      <div className="team-header-content">
        <div className="team-info">
          <Link to="/" className="back-link">
            ← Back to Table
          </Link>
          
          <h1 className="team-name">{club.name}</h1>
          
          {club.country && (
            <p className="team-country">{club.country}</p>
          )}
          
          <p className="team-code">Code: {club.code}</p>
        </div>
        
        <div className="team-stats">
          <div className="stat-card">
            <span className="stat-value">{summary.played}</span>
            <span className="stat-label">Played</span>
          </div>
          
          <div className="stat-card stat-card--wins">
            <span className="stat-value">{summary.wins}</span>
            <span className="stat-label">Wins</span>
          </div>
          
          <div className="stat-card stat-card--draws">
            <span className="stat-value">{summary.draws}</span>
            <span className="stat-label">Draws</span>
          </div>
          
          <div className="stat-card stat-card--losses">
            <span className="stat-value">{summary.losses}</span>
            <span className="stat-label">Losses</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-value">{summary.gf}</span>
            <span className="stat-label">Goals For</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-value">{summary.ga}</span>
            <span className="stat-label">Goals Against</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-value">{formatGoalDifference(summary.gd)}</span>
            <span className="stat-label">Goal Difference</span>
          </div>
          
          <div className="stat-card stat-card--points">
            <span className="stat-value">{summary.points}</span>
            <span className="stat-label">Points</span>
          </div>
        </div>
      </div>
    </header>
  );
};
