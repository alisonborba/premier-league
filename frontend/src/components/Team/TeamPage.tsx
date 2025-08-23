/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { TeamHeader } from './TeamHeader';
import { MatchList } from './MatchList';
import { Spinner } from '../UI/Spinner';
import { ErrorBanner } from '../UI/ErrorBanner';
import { useTeamHistory } from '../../hooks/useTeamHistory';
import { useClubsMap } from '../../hooks/useClubs';
import { useMatches } from '../../app/providers/MatchesProvider';

export const TeamPage = () => {
  const { code } = useParams<{ code: string }>();
  const {
    state: { error: wsError },
  } = useMatches();
  const { clubsMap, isLoading: clubsLoading, error: clubsError } = useClubsMap();
  const teamHistory = useTeamHistory(code || '', clubsMap);

  const isLoading = clubsLoading && !teamHistory;
  const hasError = wsError || clubsError;

  if (isLoading) {
    return (
      <div className="team-page-container">
        <div className="loading-container">
          <Spinner size="large" />
          <p>Loading team data...</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="team-page-container">
        <ErrorBanner error={hasError} />
        <div className="error-fallback">
          <p>Unable to load team data. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!teamHistory) {
    return (
      <div className="team-page-container">
        <div className="not-found">
          <h1>Team Not Found</h1>
          <p>No data available for team code: {code}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="team-page-container">
      <TeamHeader teamHistory={teamHistory} />
      <MatchList matches={teamHistory.matches} teamCode={code || ''} />
    </div>
  );
};
