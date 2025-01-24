'use client';

import { useState, useEffect } from 'react';

interface Player {
  playerid: string;
  player: string;
}

export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');

  // Fetch all players on component mount
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        if (!API_BASE_URL) {
          console.error('API_BASE_URL is not defined');
          return;
        }

        const response = await fetch(`${API_BASE_URL}/api/v1/player`);
        if (!response.ok) throw new Error('Failed to fetch players');
        const data: Player[] = await response.json();

        // Sort players alphabetically and set state
        const sortedPlayers = data.sort((a, b) => a.player.localeCompare(b.player));
        setPlayers(sortedPlayers);
        setFilteredPlayers(sortedPlayers); // Initialize filtered players
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  // Handle search query input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter players based on the query
    const filtered = players.filter((player) =>
      player.player.toLowerCase().includes(query)
    );
    setFilteredPlayers(filtered);
  };

  // Handle player selection
  const handlePlayerSelect = (playerName: string) => {
    setSelectedPlayer(playerName);
    setSearchQuery(playerName); // Update the input field with the selected player
    setFilteredPlayers([]); // Clear the dropdown
    onSearch(playerName); // Trigger the search for the selected player
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Searchable input field */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a player"
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* Dropdown list */}
      {filteredPlayers.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-md max-h-60 overflow-y-auto">
          {filteredPlayers.map((player) => (
            <li
              key={player.playerid}
              onClick={() => handlePlayerSelect(player.player)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {player.player}
            </li>
          ))}
        </ul>
      )}
      {/* Hide the "No players found" message if a player is selected */}
      {filteredPlayers.length === 0 && searchQuery && !selectedPlayer && (
        <p className="absolute z-10 w-full px-4 py-2 bg-white border rounded-lg shadow-md">
          No players found
        </p>
      )}
    </div>
  );
};
