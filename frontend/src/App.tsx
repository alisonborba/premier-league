import { QueryProvider } from './app/providers/QueryProvider';
import { MatchesProvider } from './app/providers/MatchesProvider';
import { AppRouter } from './app/router';
import './styles/globals.css';

export const App = () => {
  console.log('App: Rendering...');

  return (
    <QueryProvider>
      <MatchesProvider>
        <div className="app">
          <AppRouter />
        </div>
      </MatchesProvider>
    </QueryProvider>
  );
};
