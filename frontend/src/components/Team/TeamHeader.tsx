/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { TeamHistory } from '../../lib/types';
import { getClubImage } from '../../lib/utils';
import { CircleChevronLeft } from 'lucide-react';

interface TeamHeaderProps {
  teamHistory: TeamHistory;
}

export const TeamHeader: React.FC<TeamHeaderProps> = ({ teamHistory }) => {
  const { club, summary, position } = teamHistory;

  const addSuffix = (position: number) => {
    switch (position) {
      case 1 || 21:
        return 'st';
      case 2 || 22:
        return 'nd';
      case 3 || 23:
        return 'rd';
      default:
        return 'th';
    }
  };

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1 || 2 || 3 || 4:
        return 'var(--champions-league-color)';
      case 5:
        return 'var(--europa-league-color)';
      case 6:
        return 'var(--europa-qualifiers-color)';
      case 18 || 19 || 20:
        return 'var(--relegation-color)';
      default:
        return 'var(--secondary-color)';
    }
  };

  return (
    <header className="team-header">
      <div className="team-header-content">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <CircleChevronLeft size={32} color="white" />
        </Link>
        <div className="team-info-header">
          <img src={getClubImage(club.code)} alt={club.name} className="team-logo--header" />
          <h1 className="team-name-header">{club.name}</h1>
        </div>
        <div className="team-stats-header">
          <div className="team-position-header" style={{ color: getPositionColor(position) }}>
            {position}
            {addSuffix(position)}
          </div>
          <div className="team-points-header">{summary.points} Points</div>
        </div>
      </div>
    </header>
  );
};
