import { useState, useEffect, useCallback, useRef } from 'react';
import { WebSocketService, WebSocketStatus } from '../services/websocket';
import { Match } from '../lib/types';
import { generateMatchId } from '../lib/aggregators';

// Hook to manage WebSocket and real-time matches
export const useWebSocketMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [seasonFinished, setSeasonFinished] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<WebSocketStatus>('disconnected');

  const wsServiceRef = useRef<WebSocketService | null>(null);
  const processedMatchIds = useRef<Set<string>>(new Set());

  // Initialises WebSocket service
  useEffect(() => {
    wsServiceRef.current = new WebSocketService();

    // Configures callbacks
    wsServiceRef.current.setCallbacks({
      onMessage: (newMatches) => {
        setMatches(prevMatches => {
          const updatedMatches = [...prevMatches];

          newMatches.forEach(match => {
            const matchId = generateMatchId(match);

            // Avoids duplicates
            if (!processedMatchIds.current.has(matchId)) {
              processedMatchIds.current.add(matchId);
              updatedMatches.push(match);
            }
          });

          return updatedMatches;
        });

        // Clears error if present
        if (error) {
          setError(null);
        }
      },

      onSeasonFinished: () => {
        setSeasonFinished(true);
        setStatus('disconnected');
      },

      onError: (wsError) => {
        setError(wsError);
        setStatus('error');
      },

      onStatusChange: (newStatus) => {
        setStatus(newStatus);
      },
    });

    // Connects automatically
    wsServiceRef.current.connect();

    // Cleanup
    return () => {
      if (wsServiceRef.current) {
        wsServiceRef.current.disconnect();
      }
    };
  }, []);

  // Function to manually reconnect
  const reconnect = useCallback(() => {
    if (wsServiceRef.current) {
      wsServiceRef.current.connect();
    }
  }, []);

  // Function to clear matches
  const clearMatches = useCallback(() => {
    setMatches([]);
    processedMatchIds.current.clear();
  }, []);

  // Function to reset season
  const resetSeason = useCallback(() => {
    setSeasonFinished(false);
    setError(null);
    setStatus('disconnected');
    clearMatches();

    if (wsServiceRef.current) {
      wsServiceRef.current.reset();
      wsServiceRef.current.connect();
    }
  }, [clearMatches]);

  return {
    matches,
    seasonFinished,
    error,
    status,
    reconnect,
    clearMatches,
    resetSeason,
  };
};
