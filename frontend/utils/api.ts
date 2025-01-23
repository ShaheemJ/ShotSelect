const API_BASE_URL = 'http://localhost:8080';

/**
 * Utility function to build query parameters from an object.
 */
function buildQueryParams(params: Record<string, string | number | undefined>): string {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined) // Filter out undefined values
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
}

// Define interfaces for type safety
interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  age: number;
}

interface ShotChartData {
  id: number;
  grid_type: string;
  game_id: number;
  game_event_id: number;
  player_id: number;
  playername: string;
  team_id: number;
  team_name: string;
  period: number;
  minutes_remaining: number;
  seconds_remaining: number;
  event_type: string;
  action_type: string;
  shot_type: string;
  shot_zone_basic: string;
  shot_zone_area: string;
  shot_zone_range: string;
  shot_distance: number;
  loc_x: number;
  loc_y: number;
  shot_attempted_flag: number;
  shot_made_flag: number;
  game_date: number;
  htm: string;
  vtm: string;
}

/**
 * Function to search for players by name.
 */
export async function searchPlayer(name: string): Promise<Player[] | null> {
  try {
    const query = buildQueryParams({ name });
    const response = await fetch(`${API_BASE_URL}/api/v1/player?${query}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch player data: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error searching player:', error);
    return null;
  }
}

/**
 * Function to fetch player stats by name.
 */
export async function getPlayerStats(name: string): Promise<Player | null> {
  try {
    const query = buildQueryParams({ name });
    const response = await fetch(`${API_BASE_URL}/api/v1/player?${query}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch player stats: ${response.status} ${response.statusText}`);
    }

    const data: Player[] = await response.json();
    return data[0] || null; // Return the first player or null if not found
  } catch (error) {
    console.error('Error fetching player stats:', error);
    throw error;
  }
}

/**
 * Function to fetch player shot chart by player name.
 */
export async function getPlayerShotChart(playerName: string): Promise<ShotChartData[] | null> {
  if (!playerName.trim()) {
    console.warn('Player name is empty');
    return null;
  }

  try {
    const query = buildQueryParams({ name: playerName });
    const response = await fetch(`${API_BASE_URL}/shotcharts?${query}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch shot chart data: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response as an array of ShotChartData
    const data: ShotChartData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player shot chart:', error);
    return null;
  }
}
