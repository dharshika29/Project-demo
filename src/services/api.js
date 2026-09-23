/**
 * Central API Client Service
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export async function fetchFromApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Sample endpoints
export const api = {
  getProfile: () => fetchFromApi('/profile'),
  getData: () => fetchFromApi('/data')
};
