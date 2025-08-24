import { Match } from '../../lib/types';
import { MatchCard } from './MatchCard';
import { Spinner } from '../UI/Spinner';

interface MatchListProps {
  matches: Match[];
  teamCode: string;
  isLoading?: boolean;
  className?: string;
}

export const MatchList = ({
  matches,
  teamCode,
  isLoading = false,
  className = '',
}: MatchListProps) => {
  if (isLoading) {
    return (
      <div className={`match-list ${className}`.trim()}>
        <div className="loading-container">
          <Spinner size="medium" />
          <p>Loading matches...</p>
        </div>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className={`match-list ${className}`.trim()}>
        <div className="empty-state">
          <p>No matches found for this team.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`match-list ${className}`.trim()}>
      <h3 className="match-list-title">Match History ({matches.length})</h3>
      <div className="matches-container">
        {matches.map((match, index) => (
          <MatchCard
            key={`${match.date}-${match.home}-${match.away}`}
            match={match}
            teamCode={teamCode}
            className={''}
          />
        ))}
      </div>
    </div>
  );
};
