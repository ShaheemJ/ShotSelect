'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { ShotChart } from '@/components/ShotChart';
import { PlayerStats } from '@/components/PlayerStats';
import Header from '@/components/Header';

import { getPlayerStats, getPlayerShotChart, Player, ShotChartData } from '@/utils/api';


export default function Home() {
  const [playerStats, setPlayerStats] = useState<Player | null>(null);
  const [shotChartData, setShotChartData] = useState<ShotChartData[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Map for pre-known player name mappings
  const nameMapping: Record<string, string> = {
    "Alperen Şengün": "Alperen Sengun",
    "A.J. Green": "AJ Green",
  };

  // Helper function to normalize names
  const normalizeName = (name: string): string =>
    name
      .normalize("NFD") // Normalize to Unicode NFD form
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (e.g., Ş -> S)
      .replace(/\./g, "") // Remove dots (e.g., "A.J." -> "AJ")
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim(); // Trim leading/trailing spaces

  const handleSearch = async (query: string) => {
    setLoading(true); // Set loading to true when the search starts
    try {
      

      // Step 1: Fetch player stats using mapped/original name
      const stats = await getPlayerStats(query);
      setPlayerStats(stats);

      // Step 2: Check if name exists in the mapping or use original query
      const mappedName = nameMapping[query] || query;

      // Step 3: Fetch shot chart using mapped/original name
      let shotChart = await getPlayerShotChart(mappedName);

      // Step 4: If no data is found, normalize the name and retry
      if (!shotChart || shotChart.length === 0) {
        const normalizedName = normalizeName(query);
        console.log(`No data found for '${query}'. Retrying with normalized name: '${normalizedName}'`);

        // Fetch shot chart with normalized name
        shotChart = await getPlayerShotChart(normalizedName);

        // Step 5: Add the new mapping if the normalized name works
        if (shotChart && shotChart.length > 0) {
          nameMapping[query] = normalizedName; // Dynamically add the mapping
          console.log(`Mapping added: '${query}' → '${normalizedName}'`);
        }
      }

      // Step 6: Update shot chart data or show a message if empty
      setShotChartData(shotChart || []);
      setErrorMessage(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching player data:', error);
      setErrorMessage('Failed to fetch player data. Please try again.');
    } finally {
      setLoading(false); // Set loading to false when the search is complete
    }
  };

  return (
    <>
      <Header />
      <title>Shot Select</title>
      <main className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl mb-6 mt-4 text-center font-extrabold dm-serif-text-regular">
            NBA Player Shot Chart and Stats
          </h1>
          <div className="flex justify-center w-full mb-6">
            <SearchBar onSearch={handleSearch} />
          </div>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {loading && <p className="text-center">Loading...</p>} {/* Show loading message */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {/* Shot Chart Section */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Shot Chart (2023-2024 Regular Season)</h3>
              {shotChartData.length > 0 ? (
                <div className="flex-grow">
                  <ShotChart data={shotChartData} />
                </div>
              ) : (
                <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-center h-96">
                  <p className="text-gray-500">No data available. Search for a player to display their shot chart.</p>
                </div>
              )}
            </div>

            {/* Player Stats Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Player Statistics (Current Season)</h3>
              {playerStats ? (
                <PlayerStats stats={playerStats} />
              ) : (
                <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-center h-96">
                  <p className="text-gray-500">No player statistics available. Search for a player to display their stats.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
