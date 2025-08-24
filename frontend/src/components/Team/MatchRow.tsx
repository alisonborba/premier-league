import { Match } from '../../lib/types';
import { formatDate, formatScore } from '../../lib/format';
import { extractGoals } from '../../lib/utils';
import { getClubImage, getClubName } from '../../lib/utils';
import { ChevronLeft } from 'lucide-react';

interface MatchRowProps {
  match: Match;
  teamCode: string;
  className?: string;
}

export const MatchRow = ({ match, teamCode, className = '' }: MatchRowProps) => {
  const [homeGoals, awayGoals] = extractGoals(match.score);
  const homeTeamCode = match.home;
  const awayTeamCode = match.away;
  const isHomeTeamSelected = homeTeamCode === teamCode;
  const isAwayTeamSelected = awayTeamCode === teamCode;

  return (
    <div className={`match-card ${className}`.trim()}>
      <div className="match-header">
        {match.competition} - {match.round} ({formatDate(match.date)})
      </div>

      <div className="match-teams">
        {/* Home Team - Always on top */}
        <div className="team-row">
          <div className="team-info">
            <img
              src={getClubImage(homeTeamCode)}
              alt={getClubName(homeTeamCode)}
              className="team-logo"
            />
            <span className="team-name">{getClubName(homeTeamCode)}</span>
          </div>
          <div className="team-goals">
            <span className="goals-number">{homeGoals}</span>
            {isHomeTeamSelected && <ChevronLeft size={16} className="selection-indicator" />}
          </div>
        </div>

        {/* Away Team - Always below */}
        <div className="team-row">
          <div className="team-info">
            <img
              src={getClubImage(awayTeamCode)}
              alt={getClubName(awayTeamCode)}
              className="team-logo"
            />
            <span className="team-name">{getClubName(awayTeamCode)}</span>
          </div>
          <div className="team-goals">
            <span className="goals-number">{awayGoals}</span>
            {isAwayTeamSelected && <ChevronLeft size={16} className="selection-indicator" />}
          </div>
        </div>
      </div>
    </div>
  );
};
