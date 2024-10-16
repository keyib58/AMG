'use client';

import { useState, useEffect, useCallback } from 'react';
import AmgGameFilter from './AmgGameFilter';
import AmgGameList from './AmgGameList';
import AmgSearch from './AmgSearch';
import AmgSort from './AmgSort';
import { Game, GameFilter } from 'types/amg';
import { games } from '@/lib/gameData';

const AmgGamePageContainer = () => {
  const [filteredGames, setFilteredGames] = useState<Game[]>(games); // Set default to all games
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(['All']);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['All']);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['All']);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [sortType, setSortType] = useState(''); // State for sorting
  const [isSearchComplete, setIsSearchComplete] = useState(true); // Track if search is complete

  // Function to filter games based on selected filters and search query
  const filterGames = useCallback((filters: GameFilter, searchQuery: string): Game[] => {
    return games
      .filter((game) => {
        const matchesMarket = filters.market.includes('All')
          ? true
          : filters.market.some((market) => game.market.includes(market));

        const matchesLanguage = filters.language.includes('All')
          ? true
          : filters.language.some((language) => game.language.includes(language));

        const matchesGenre = filters.genre.includes('All')
          ? true
          : filters.genre.some((genre) => game.genre.includes(genre));

        const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesMarket && matchesLanguage && matchesGenre && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortType) {
          case 'date':
            return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
          case 'popularity':
            return b.popularRank - a.popularRank;
          case 'alpha':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [sortType]);

  // Apply filters whenever selected filters, search query, or sort type change
  const handleFilterChange = useCallback((filters: GameFilter) => {
    const filtered = filterGames(filters, searchQuery);
    setFilteredGames(filtered);
    setIsSearchComplete(true); // Set search complete once filtering is done
  }, [filterGames, searchQuery]);

  // Update filtered games when the selected filters change or when sorting is applied
  useEffect(() => {
    const filters: GameFilter = {
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    };
    handleFilterChange(filters);
  }, [selectedMarkets, selectedLanguages, selectedGenres, handleFilterChange]);

  // Handle search
  const handleSearch = (query: string) => {
    setIsSearchComplete(false); // Start searching, spinner shows
    setSearchQuery(query);
    const filters: GameFilter = {
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    };
    const filtered = filterGames(filters, query);
    setFilteredGames(filtered);
    setIsSearchComplete(true); // Stop searching, hide spinner
  };

  // Handle sorting
  const handleSort = (sortType: string) => {
    setSortType(sortType);
    const filters: GameFilter = {
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    };
    const filtered = filterGames(filters, searchQuery);
    setFilteredGames(filtered);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="z-5 mx-5 flex flex-col lg:flex-row max-w-[1320px] w-full">
        {/* Left section: Sort and Filter Components */}
        <div className="hidden lg:block lg:w-1/4 p-4 mt-10">
          <AmgSort onSort={handleSort} /> {/* Sort Component */}
          <AmgGameFilter
            onFilterChange={handleFilterChange}
            selectedMarkets={selectedMarkets}
            setSelectedMarkets={setSelectedMarkets}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </div>

        {/* Right section: Search and Game List Components */}
        <div className="lg:w-3/4 p-4 lg:mt-10 w-full">
          <AmgSearch onSearch={handleSearch} isSearchComplete={isSearchComplete} /> {/* Search Component */}
          {filteredGames.length ? (
            <AmgGameList games={filteredGames} />
          ) : (
            <p>No games found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmgGamePageContainer;
