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
  const { club, summary } = teamHistory;

  return (
    <header className="team-header">
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
