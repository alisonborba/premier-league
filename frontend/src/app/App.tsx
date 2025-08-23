/** @format */

import React from 'react';
import { QueryProvider } from './providers/QueryProvider';
import { MatchesProvider } from './providers/MatchesProvider';
import { AppRouter } from './router';
import './styles/globals.css';

export const App = () => {
  console.log('App: Rendering...');

  return (
    <QueryProvider>
      <MatchesProvider>
        <AppRouter />
      </MatchesProvider>
    </QueryProvider>
  );
};
