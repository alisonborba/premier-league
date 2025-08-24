import { TableHeader } from './TableHeader';
import { LeagueRow } from './LeagueRow';
import { Spinner } from '../UI/Spinner';
import { ErrorBanner } from '../UI/ErrorBanner';
import { InfoBanner } from '../UI/InfoBanner';
import { useStandings } from '../../hooks/useStandings';
import { useClubsMap } from '../../hooks/useClubs';
import { useMatches } from '../../app/providers/MatchesProvider';
import { Check, Minus, X } from 'lucide-react';

export const LeagueTable = () => {
  const {
    state: { seasonFinished, error },
    reconnect,
  } = useMatches();
  const { clubsMap, isLoading: clubsLoading, error: clubsError } = useClubsMap();
  const { tableRows, totalMatches } = useStandings(clubsMap);

  const isLoading = clubsLoading && tableRows.length === 0;
  const hasError = error || clubsError;

  if (isLoading) {
    return (
      <div className="league-table-container">
        <div className="loading-container">
          <Spinner size="large" />
          <p>Loading Premier League data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="league-table-container">
      <header className="table-header-section">
        <h1 className="table-title">Premier League 2019/2020</h1>

        {seasonFinished && (
          <InfoBanner
            message="The Premier League 2019/2020 season has finished!"
            type="success"
            actionLabel="View Final Table"
          />
        )}
      </header>

      <ErrorBanner error={hasError} onRetry={reconnect} />

      <div className="table-wrapper">
        <table className="league-table" role="table" aria-label="Premier League standings table">
          <TableHeader />
          <tbody>
            {tableRows.map((row) => (
              <LeagueRow key={row.code} row={row} />
            ))}
          </tbody>
        </table>
        <Legend />
      </div>

      {!isLoading && tableRows.length === 0 && (
        <div className="empty-state">
          <p>No matches found. Waiting for WebSocket data...</p>
        </div>
      )}
    </div>
  );
};

export const Legend = () => {
  return (
    <div className="table-legend">
      <div>
        <h4>Qualification/Relegation</h4>
        <div className="legend-item">
          <span className="legend-color legend-color--champions"></span>
          <span>UEFA Champions League group stage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--europa-league"></span>
          <span>Europa League group stage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--europa-qualifiers"></span>
          <span>Europa League qualifiers</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--relegation"></span>
          <span>Relegation</span>
        </div>
      </div>
      <div>
        <h4>Last 5 matches</h4>
        <div className="legend-item">
          <span className="result-pill result-pill--win">
            <Check size={12} strokeWidth={3} />
          </span>{' '}
          Win
        </div>
        <div className="legend-item">
          <span className="result-pill result-pill--draw">
            <Minus size={12} strokeWidth={3} />
          </span>{' '}
          Draw
        </div>
        <div className="legend-item">
          <span className="result-pill result-pill--loss">
            <X size={12} strokeWidth={3} />
          </span>{' '}
          Loss
        </div>
      </div>
    </div>
  );
};
