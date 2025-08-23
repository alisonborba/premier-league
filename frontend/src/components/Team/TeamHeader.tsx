/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { TeamHistory, TeamSummary } from '../../lib/types';
import { formatGoalDifference } from '../../lib/format';
import { getClubImage } from '../../lib/utils';
import { CircleChevronLeft, Check, Minus, X, TrendingUp, TrendingDown, Target } from 'lucide-react';

interface TeamHeaderProps {
  teamHistory: TeamHistory;
  className?: string;
}

export const TeamHeader: React.FC<TeamHeaderProps> = ({ teamHistory, className = '' }) => {
  const { club, summary } = teamHistory;

  return (
    <header className={`team-header ${className}`.trim()}>
      <div className="team-header-content">
        <Link to="/">
          <CircleChevronLeft size={32} color="white" />
        </Link>
        <div className="team-info-header">
          <img src={getClubImage(club.code)} alt={club.name} className="team-logo--header" />
          <h1 className="team-name-header">{club.name}</h1>
        </div>
        <div className="team-points-header">{summary.points} Points</div>
      </div>
    </header>
  );
};

export const TeamPointsHeader: React.FC<{ summary: TeamSummary }> = ({ summary }) => {
  return (
    <div className="team-stats">
      <div className="stat-card stat-card--form">
        <div>Matches Summary</div>
        <div className="form-summary">
          <div className="form-item">
            <span className="form-pill form-pill--win">
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="form-count">{summary.wins}</span>
            <span className="form-label">Wins</span>
          </div>
          <div className="form-item">
            <span className="form-pill form-pill--draw">
              <Minus size={12} strokeWidth={3} />
            </span>
            <span className="form-count">{summary.draws}</span>
            <span className="form-label">Draws</span>
          </div>
          <div className="form-item">
            <span className="form-pill form-pill--loss">
              <X size={12} strokeWidth={3} />
            </span>
            <span className="form-count">{summary.losses}</span>
            <span className="form-label">Losses</span>
          </div>
        </div>
      </div>

      {/* Goals summary */}
      <div className="stat-card stat-card--goals">
        <div className="goals-summary">
          <div>Goals Summary</div>
          <div className="goals-item goals-item--for">
            <TrendingUp size={16} />
            <span className="goals-value">{summary.gf}</span>
            <span className="goals-label">For</span>
          </div>
          <div className="goals-item goals-item--against">
            <Target size={16} />
            <span className="goals-value">{summary.ga}</span>
            <span className="goals-label">Against</span>
          </div>
          <div className="goals-item goals-item--difference">
            <TrendingDown size={16} />
            <span className="goals-value">{formatGoalDifference(summary.gd)}</span>
            <span className="goals-label">Diff</span>
          </div>
        </div>
      </div>
    </div>
  );
};
