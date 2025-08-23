/** @format */

import React from 'react';
import { TableHeader } from './TableHeader';
import { LeagueRow } from './LeagueRow';
import { Spinner } from '../UI/Spinner';
import { ErrorBanner } from '../UI/ErrorBanner';
import { InfoBanner } from '../UI/InfoBanner';
import { useStandings } from '../../hooks/useStandings';
import { useClubsMap } from '../../hooks/useClubs';
import { useMatches } from '../../app/providers/MatchesProvider';

export const LeagueTable = () => {
  const {
    state: { seasonFinished, error },
    reconnect,
  } = useMatches();
  const { clubsMap, isLoading: clubsLoading, error: clubsError } = useClubsMap();
  const { tableRows, totalMatches } = useStandings(clubsMap);
  console.log('totalMatches', totalMatches);

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
            message="The 2019/2020 season has finished!"
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
      </div>

      {!isLoading && tableRows.length === 0 && (
        <div className="empty-state">
          <p>No matches found. Waiting for WebSocket data...</p>
        </div>
      )}

      <div className="table-legend">
        <div className="legend-item">
          <span className="legend-color legend-color--champions"></span>
          <span>Champions League (1st-4th)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--europa"></span>
          <span>Europa League (5th-6th)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--relegation"></span>
          <span>Relegation (18th-20th)</span>
        </div>
      </div>
    </div>
  );
};
