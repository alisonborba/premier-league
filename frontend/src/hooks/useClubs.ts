import { useQuery } from '@tanstack/react-query';
import { getClubs } from '../services/api';
import { Club } from '../lib/types';

// Hook to fetch clubs with React Query
export const useClubs = () => {
  return useQuery({
    queryKey: ['clubs'],
    queryFn: getClubs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook to get clubs map by code
export const useClubsMap = () => {
  const { data: clubs, isLoading, error } = useClubs();
  
  const clubsMap = new Map<string, Club>();
  
  if (clubs) {
    clubs.forEach((club) => {
      clubsMap.set(club.code, club);
    });
  }
  
  return {
    clubsMap,
    clubs,
    isLoading,
    error,
  };
};
