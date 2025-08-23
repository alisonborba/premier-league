import { Club } from '../lib/types';
import { ClubsResponseSchema } from '../lib/validators';
import { APP_CONFIG } from '../lib/constants';

// Function to fetch clubs from API
export const getClubs = async (): Promise<Club[]> => {
  try {
    const response = await fetch(`${APP_CONFIG.BACKEND_URL}/clubs/`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Validates response with Zod
    const validationResult = ClubsResponseSchema.safeParse(data);

    if (!validationResult.success) {
      console.error('Invalid clubs data format:', validationResult.error);
      throw new Error('Invalid data format received from API');
    }

    return validationResult.data;
  } catch (error) {
    console.error('Failed to fetch clubs:', error);
    throw new Error('Failed to load clubs data');
  }
};

// Function to fetch specific club by code
export const getClubByCode = async (code: string): Promise<Club> => {
  try {
    const response = await fetch(`${APP_CONFIG.BACKEND_URL}/clubs/${code}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Club with code '${code}' not found`);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Validates response with Zod
    const validationResult = ClubsResponseSchema.element.safeParse(data);

    if (!validationResult.success) {
      console.error('Invalid club data format:', validationResult.error);
      throw new Error('Invalid data format received from API');
    }

    return validationResult.data;
  } catch (error) {
    console.error(`Failed to fetch club ${code}:`, error);
    throw error;
  }
};
