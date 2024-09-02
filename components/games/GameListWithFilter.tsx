'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { GameListWithFilterProps } from 'types/type';
import { LoadingSpinner } from '../shared/icons';
import GameSlider from './GameSlider';
import { setGames } from '@/app/slices/gameSlice';
import { setGenres, setLanguages, setMarkets, setFiltering, setSelectedGenres, setSelectedLanguages, setSelectedMarkets } from '@/app/slices/filterSlice';
import { setSortOption } from '@/app/slices/sortSlice';
import { setSearchTerm } from '@/app/slices/searchSlice';
import { useSearchParams, useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { ChevronDownIcon } from 'lucide-react';
const localStorageKey = 'filterState';

export default function GameListWithFilter({
  genres,
  languages,
  markets,
  initialGames,
  initialGenres,
  initialLanguages,
  initialMarkets,
  initialSort = 'latest',
  initialSearch,
  currentSort,
}: GameListWithFilterProps) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const dispatch = useAppDispatch();
  const isFiltering = useAppSelector((state) => state.filter.isFiltering);
  const filteredGames = useAppSelector((state) => state.game.games);
  const currentSortState = useAppSelector((state) => state.sort.sortOption);
  const currentSearchState = useAppSelector((state) => state.search.searchTerm);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    dispatch(setGames(initialGames));
    dispatch(setGenres(initialGenres));
    dispatch(setLanguages(initialLanguages));
    dispatch(setMarkets(initialMarkets));
    dispatch(setSortOption(initialSort));
    dispatch(setSearchTerm(initialSearch || ''));

    const savedFilterState = localStorage.getItem(localStorageKey);
    if (savedFilterState) {
      const { genres, languages, markets, sort, search } = JSON.parse(savedFilterState);
      dispatch(setSelectedGenres(genres));
      dispatch(setSelectedLanguages(languages));
      dispatch(setSelectedMarkets(markets));
      dispatch(setSortOption(sort));
      dispatch(setSearchTerm(search));
    }

    const genreParam = searchParams.get('genre');
    const languageParam = searchParams.get('language');
    const marketParam = searchParams.get('market');
    const sortParam = searchParams.get('sort');
    const searchParam = searchParams.get('search');

    if (genreParam) {
      dispatch(setSelectedGenres(genreParam.split(',')));
    }
    if (languageParam) {
      dispatch(setSelectedLanguages(languageParam.split(',')));
    }
    if (marketParam) {
      dispatch(setSelectedMarkets(marketParam.split(',')));
    }
    if (sortParam) {
      dispatch(setSortOption(sortParam));
    }
    if (searchParam) {
      dispatch(setSearchTerm(searchParam));
    }
    dispatch(setFiltering(false));
  }, [dispatch, initialGames, initialGenres, initialLanguages, initialMarkets, searchParams]);

  const selectedGenres = useAppSelector((state) => state.filter.selectedGenres);
  const selectedLanguages = useAppSelector((state) => state.filter.selectedLanguages);
  const selectedMarkets = useAppSelector((state) => state.filter.selectedMarkets);

  useEffect(() => {
    const filterState = {
      genres: selectedGenres,
      languages: selectedLanguages,
      markets: selectedMarkets,
      sort: currentSortState,
      search: currentSearchState,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(filterState));

    const params = new URLSearchParams();
    if (selectedGenres.length > 0) params.set('genre', selectedGenres.join(','));
    if (selectedLanguages.length > 0) params.set('language', selectedLanguages.join(','));
    if (selectedMarkets.length > 0) params.set('market', selectedMarkets.join(','));
    if (currentSortState) params.set('sort', currentSortState);
    if (currentSearchState) params.set('search', currentSearchState);
    router.replace(`/games?${params.toString()}`, { scroll: false });

    dispatch(setFiltering(false));
  }, [selectedGenres, selectedLanguages, selectedMarkets, currentSortState, currentSearchState, router, dispatch]);

  return (
    <>
      <div className='flex w-full flex-col items-center'>
        <GameSlider />
        <div className="z-5 mx-5 flex flex-col lg:flex-row max-w-[1320px] w-full">
          {/* Filter Component - visible on desktop */}
          <div className="hidden lg:block lg:w-1/4 p-4 mt-10">
            <SortComponent currentSort={currentSortState} />
            <FilterComponent
              genres={genres}
              languages={languages}
              markets={markets}
              currentGenres={selectedGenres}
              currentLanguages={selectedLanguages}
              currentMarkets={selectedMarkets}
              setFiltering={(value) => dispatch(setFiltering(value))}
              setIsFilterVisible={setIsFilterVisible} // Pass setIsFilterVisible to FilterComponent
              isFilterVisible={false}
            />
          </div>
          <div className="lg:w-3/4 p-4 lg:mt-10 w-full">
            {/* Search Component */}
            <SearchComponent currentSearch={currentSearchState} />

            {/* Filter and Sort Buttons for Mobile/Tablet - Below Search */}
            <div className="lg:hidden flex justify-between w-full mt-4">
              <button
                onClick={() => setIsFilterVisible(true)}
                className="px-4 py-2 bg-white text-black flex flex-row items-center justify-center rounded-md w-1/2 mr-2"
              >
                FILTER BY
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </button>
              <div className="w-1/2">
                <SortComponent currentSort={currentSortState} />
              </div>
            </div>

            {isFiltering ? (
              <div className="mt-10 text-center">
                <LoadingSpinner />
              </div>
            ) : (
              <GameListing
                games={filteredGames}
                filters={{ selectedGenres, selectedLanguages, selectedMarkets }} // Pass filters object
                searchQuery={currentSearchState} // Pass search query
              />
            )}
          </div>

          {/* Filter Modal for Mobile/Tablet */}
          <AnimatePresence>
            {isFilterVisible && (
              <motion.div
                className="fixed inset-0 z-50 bg-[#151515] flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">FILTER BY</h3>
                  <X className="w-6 h-6 ml-2 text-white" onClick={() => setIsFilterVisible(false)} />
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <FilterComponent
                    genres={genres}
                    languages={languages}
                    markets={markets}
                    currentGenres={selectedGenres}
                    currentLanguages={selectedLanguages}
                    currentMarkets={selectedMarkets}
                    setFiltering={(value) => dispatch(setFiltering(value))}
                    setIsFilterVisible={setIsFilterVisible} // Pass setIsFilterVisible to FilterComponent
                    isFilterVisible={isFilterVisible}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
