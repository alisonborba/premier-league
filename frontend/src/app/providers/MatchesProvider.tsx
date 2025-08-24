import React, { useEffect, useRef, useState } from 'react';
import { WebSocketService } from '../../services/websocket';
import { Match } from '../../lib/types';
import { WS_STATUS } from '../../lib/constants';
import { ReactNode } from 'react';

// State interface
interface MatchesState {
  matches: Match[];
  seasonFinished: boolean;
  error: Error | null;
  status: string;
  totalMatches: number;
  lastUpdate: Date | null;
}

// Context interface
interface MatchesContextType {
  state: MatchesState;
  reconnect: () => void;
  clearMatches: () => void;
  resetSeason: () => void;
}

// Create context
const MatchesContext = React.createContext<MatchesContextType | undefined>(undefined);

// Initial state
const initialState: MatchesState = {
  matches: [],
  seasonFinished: false,
  error: null,
  status: WS_STATUS.DISCONNECTED,
  totalMatches: 0,
  lastUpdate: null,
};

// Provider component
interface MatchesProviderProps {
  children: ReactNode;
}

export const MatchesProvider = ({ children }: MatchesProviderProps) => {
  console.log('MatchesProvider: Initializing...');

  const [state, setState] = useState<MatchesState>(initialState);
  const wsServiceRef = useRef<WebSocketService | null>(null);

  useEffect(() => {
    // Initialize WebSocket service
    wsServiceRef.current = new WebSocketService();

    // Set up callbacks
    wsServiceRef.current.setCallbacks({
      onMessage: (matches: Match[]) => {
        console.log('MatchesProvider: Received matches:', matches);
        setState((prev) => ({
          ...prev,
          matches: [...prev.matches, ...matches],
          totalMatches: prev.totalMatches + matches.length,
          lastUpdate: new Date(),
          error: null,
        }));
      },
      onSeasonFinished: () => {
        console.log('MatchesProvider: Season finished');
        setState((prev) => ({
          ...prev,
          seasonFinished: true,
          status: WS_STATUS.DISCONNECTED,
        }));
      },
      onError: (error: Error) => {
        console.error('MatchesProvider: WebSocket error:', error);
        setState((prev) => ({
          ...prev,
          error,
          status: WS_STATUS.ERROR,
        }));
      },
      onStatusChange: (status: string) => {
        console.log('MatchesProvider: Status changed to:', status);
        setState((prev) => ({
          ...prev,
          status,
        }));
      },
    });

    // Connect to WebSocket
    wsServiceRef.current.connect();

    // Cleanup on unmount
    return () => {
      if (wsServiceRef.current) {
        wsServiceRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array since we only want to run this once

  const reconnect = () => {
    console.log('MatchesProvider: Reconnecting...');
    if (wsServiceRef.current) {
      wsServiceRef.current.reset();
      wsServiceRef.current.connect();
      setState((prev) => ({
        ...prev,
        error: null,
        status: WS_STATUS.CONNECTING,
      }));
    }
  };

  const clearMatches = () => {
    console.log('MatchesProvider: Clearing matches');
    setState((prev) => ({
      ...prev,
      matches: [],
      totalMatches: 0,
      lastUpdate: null,
    }));
  };

  const resetSeason = () => {
    console.log('MatchesProvider: Resetting season');
    if (wsServiceRef.current) {
      wsServiceRef.current.reset();
      wsServiceRef.current.connect();
    }
    setState(initialState);
  };

  const contextValue: MatchesContextType = {
    state,
    reconnect,
    clearMatches,
    resetSeason,
  };

  console.log('MatchesProvider: Rendering with context value:', contextValue);

  return <MatchesContext.Provider value={contextValue}>{children}</MatchesContext.Provider>;
};

// Custom hook to use matches context
export const useMatches = (): MatchesContextType => {
  const context = React.useContext(MatchesContext);
  if (context === undefined) {
    throw new Error('useMatches must be used within a MatchesProvider');
  }
  return context;
};

// Custom hook to get just the matches state
export const useMatchesState = (): MatchesState => {
  const { state } = useMatches();
  return state;
};
