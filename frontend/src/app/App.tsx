import React from 'react';
import { QueryProvider } from './providers/QueryProvider';
import { AppRouter } from './router';
import './styles/globals.css';

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
};
