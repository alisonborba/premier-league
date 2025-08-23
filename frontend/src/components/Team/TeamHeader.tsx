/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { TeamHistory } from '../../lib/types';
import { formatGoalDifference } from '../../lib/format';
import { getClubImage } from '../../lib/utils';
import {
  CircleChevronLeft,
  Check,
  Minus,
  X,
  TrendingUp,
  TrendingDown,
  Target,
  Hash,
} from 'lucide-react';

interface TeamHeaderProps {
  teamHistory: TeamHistory;
  className?: string;
}

export const TeamHeader: React.FC<TeamHeaderProps> = ({ teamHistory, className = '' }) => {
  const { club, summary } = teamHistory;

  return (
    <header className={`team-header ${className}`.trim()}>
      <div className="team-header-content">
        <Link to="/" className="back-link">
          <CircleChevronLeft size={32} />
        </Link>
        <div className="team-info">
          <img src={getClubImage(club.code)} alt={club.name} className="team-logo" />
          <h1 className="team-name">{club.name}</h1>
        </div>

        <div className="team-stats">
          {/* Points - Destaque principal */}
          <div className="stat-card stat-card--points stat-card--main">
            <div className="stat-main">
              <span className="stat-value">{summary.points}</span>
              <span className="stat-label">Points</span>
            </div>
          </div>

          {/* Matches played - Menos destacado */}
          <div className="stat-card stat-card--played">
            <Hash size={16} />
            <span className="stat-value">{summary.played}</span>
            <span className="stat-label">Played</span>
          </div>

          {/* Form results - Wins, Draws, Losses */}
          <div className="stat-card stat-card--form">
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
      </div>
    </header>
  );
};
