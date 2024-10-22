'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AmgGameFilter from './AmgGameFilter';
import AmgGameList from './AmgGameList';
import AmgSearch from './AmgSearch';
import AmgSort from './AmgSort';
import { Game, GameFilter } from 'types/amg';
import { games } from '@/lib/gameData';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Pagination from './Pagination';

const AmgGamePageContainer = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filteredGames, setFilteredGames] = useState<Game[]>([]); // Initialize with an empty array
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(['All']);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['All']);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['All']);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [sortType, setSortType] = useState('popularity'); // Default sort is popularity
  const [isSearchComplete, setIsSearchComplete] = useState(true); // Track if search is complete
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle the filter in mobile/tablet
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const [totalPages, setTotalPages] = useState(1); // New state for total pages
  const itemsPerPage = 9; // Number of items per page

  // Parse the searchParams and set the initial state for filters, search, and sorting
  useEffect(() => {
    const market = searchParams.get('market') || 'All';
    const language = searchParams.get('language') || 'All';
    const genre = searchParams.get('genre') || 'All';
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || 'popularity';

    setSelectedMarkets([market]);
    setSelectedLanguages([language]);
    setSelectedGenres([genre]);
    setSearchQuery(search);
    setSortType(sort);

    setIsLoading(true);

    const filters: GameFilter = { market: [market], language: [language], genre: [genre] };
    const filtered = filterGames(filters, search);
    setFilteredGames(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage)); // Calculate total pages
    setIsLoading(false);
  }, [searchParams]);

  // Function to filter games based on selected filters, search query, and status

  const filterGames = useCallback(
    (filters: GameFilter, searchQuery: string): Game[] => {
      return games
        .filter((game) => {
          const isPublished = game.status === 'Published';
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

          return isPublished && matchesMarket && matchesLanguage && matchesGenre && matchesSearch;
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
    },
    [sortType]
  );

  // Update URL whenever filters, search, or sort change
  const updateSearchParams = useCallback(
    (filters: GameFilter, search: string, sort: string) => {
      const params = new URLSearchParams();
      if (filters.market[0] !== 'All') params.set('market', filters.market[0]);
      if (filters.language[0] !== 'All') params.set('language', filters.language[0]);
      if (filters.genre[0] !== 'All') params.set('genre', filters.genre[0]);
      if (search) params.set('search', search);
      if (sort) params.set('sort', sort);
      router.push(`?${params.toString()}`);
    },
    [router]
  );

  // Pagination function
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const paginatedGames = filteredGames.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Apply filters whenever selected filters, search query, or sort type change
  const handleFilterChange = useCallback(
    (filters: GameFilter) => {
      setIsLoading(true); // Set loading to true while filtering
      updateSearchParams(filters, searchQuery, sortType);
      const filtered = filterGames(filters, searchQuery);
      setFilteredGames(filtered);
      setIsLoading(false); // Stop loading once filtering is done
      setIsSearchComplete(true); // Set search complete once filtering is done
    },
    [filterGames, searchQuery, sortType, updateSearchParams]
  );

  // Handle search
  const handleSearch = (query: string) => {
    setIsLoading(true); // Set loading to true while searching
    setIsSearchComplete(false); // Start searching
    setSearchQuery(query); // Update the search query state

    const filters: GameFilter = {
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    };

    updateSearchParams(filters, query, sortType);
    const filtered = filterGames(filters, query);
    setFilteredGames(filtered); // Set the filtered games
    setIsLoading(false); // Stop loading once search is complete
  };

  // Handle sorting
  const handleSort = (sort: string) => {
    setIsLoading(true); // Set loading to true while sorting
    setSortType(sort);
    const filters: GameFilter = {
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    };

    updateSearchParams(filters, searchQuery, sort);
    const filtered = filterGames(filters, searchQuery);
    setFilteredGames(filtered);
    setIsLoading(false); // Stop loading once sorting is complete
  };

  // Reset filter function
  const handleResetFilters = () => {
    setIsLoading(true); // Set loading to true while resetting filters
    setSelectedMarkets(['All']);
    setSelectedLanguages(['All']);
    setSelectedGenres(['All']);
    updateSearchParams({ market: ['All'], language: ['All'], genre: ['All'] }, '', 'popularity');
    setIsLoading(false); // Stop loading once reset is complete
  };

  return (
    <>
      <div className="flex flex-row lg:hidden space-x-4 px-6">
        <div className="w-full flex-1">
          <button
            className="w-full bg-white text-black border-2 border-black px-4 py-2 rounded-lg whitespace-nowrap"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? 'Close Filter' : 'Open Filter'}
          </button>
        </div>

        <div className="w-full flex-1">
          <AmgSort onSort={handleSort} />
        </div>
      </div>

      {/* Sliding Filter Panel for Mobile/Tablet */}
      <motion.div
        className="fixed inset-0 z-40 bg-neutral-800 px-6 lg:hidden"
        initial={{ x: '-100%' }}
        animate={{ x: isFilterOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mt-4 mb-10">
          <h2 className="text-xl font-semibold text-white">Filter By:</h2>
          <button onClick={() => setIsFilterOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <AmgGameFilter
          onFilterChange={handleFilterChange}
          selectedMarkets={selectedMarkets}
          setSelectedMarkets={setSelectedMarkets}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres} />
        <div className="flex gap-4 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsFilterOpen(false)}
          >
            Apply Filter
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded-lg"
            onClick={handleResetFilters}
          >
            Reset Filter
          </button>
        </div>
      </motion.div>

      {/* Overlay for Filter Panel */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsFilterOpen(false)} />
      )}

      <div className="flex w-full flex-col items-center px-6">
        {/* Top row: Toggle Filter and Sort (50/50 width) */}
        <div className="z-5 mx-5 flex flex-col lg:flex-row max-w-[1320px] w-full gap-10">
          {/* Left section: Sort and Filter Components for Desktop */}
          <div className="hidden lg:block lg:w-1/4 mt-10">
            <AmgSort onSort={handleSort} /> {/* Sort Component */}
            <AmgGameFilter
              onFilterChange={handleFilterChange}
              selectedMarkets={selectedMarkets}
              setSelectedMarkets={setSelectedMarkets}
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres} />
          </div>

          {/* Right section: Search and Game List Components */}
          <div className="lg:w-3/4 lg:mt-10 w-full">
            <AmgSearch onSearch={handleSearch} isSearchComplete={isSearchComplete} />
            {isLoading ? (
              <div className="mt-10 text-center text-white">
                <p>Loading...</p>
              </div>
            ) : paginatedGames.length ? (
              <>
                <AmgGameList games={paginatedGames} />
                <Pagination
                  currentPage={currentPage}
                  totalPage={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="mt-10 text-center text-white">
                <p>No games found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmgGamePageContainer;
