import { Link } from 'react-router-dom';
import { TeamHistory } from '../../lib/types';
import { getClubImage, getPositionColor, addPositionSuffix } from '../../lib/utils';
import { CircleChevronLeft } from 'lucide-react';

interface TeamHeaderProps {
  teamHistory: TeamHistory;
}

export const TeamHeader = ({ teamHistory }: TeamHeaderProps) => {
  const { club, summary, position } = teamHistory;

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
          {position && (
            <div className="team-position-header" style={{ color: getPositionColor(position) }}>
              {position}
              {addPositionSuffix(position)}
            </div>
          )}
          <div className="team-points-header">{summary.points} Points</div>
        </div>
      </div>
    </header>
  );
};
