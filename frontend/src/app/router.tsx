import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LeagueTable } from '../components/LeagueTable/LeagueTable';
import { TeamPage } from '../components/Team/TeamPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeagueTable />} />
        <Route path="/team/:code" element={<TeamPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
