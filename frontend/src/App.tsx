/** @format */

import React from 'react';
import { QueryProvider } from './app/providers/QueryProvider';
import { AppRouter } from './app/router';
import './styles/globals.css';

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <div className="app">
        <AppRouter />
      </div>
    </QueryProvider>
  );
};
