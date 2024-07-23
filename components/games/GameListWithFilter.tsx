'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { GameListWithFilterProps } from 'types/type';
import { LoadingSpinner } from '../shared/icons';
import TopSlider from './TopSlider';
import { setGames } from '@/app/slices/gameSlice';
import { setGenres, setLanguages, setMarkets, setFiltering, setSelectedGenres, setSelectedLanguages, setSelectedMarkets } from '@/app/slices/filterSlice';
import { useSearchParams, useRouter } from 'next/navigation';

const localStorageKey = 'filterState';

// Component to manage game list with filters
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
}: GameListWithFilterProps) {
  const dispatch = useAppDispatch();
  const isFiltering = useAppSelector((state) => state.filter.isFiltering);
  const filteredGames = useAppSelector((state) => state.game.games);

  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize state from localStorage and URL parameters on mount
  useEffect(() => {
    dispatch(setGames(initialGames));
    dispatch(setGenres(initialGenres));
    dispatch(setLanguages(initialLanguages));
    dispatch(setMarkets(initialMarkets));

    const savedFilterState = localStorage.getItem(localStorageKey);
    if (savedFilterState) {
      const { genres, languages, markets } = JSON.parse(savedFilterState);
      dispatch(setSelectedGenres(genres));
      dispatch(setSelectedLanguages(languages));
      dispatch(setSelectedMarkets(markets));
    }

    const genreParam = searchParams.get('genre');
    const languageParam = searchParams.get('language');
    const marketParam = searchParams.get('market');

    if (genreParam) {
      dispatch(setSelectedGenres(genreParam.split(',')));
    }
    if (languageParam) {
      dispatch(setSelectedLanguages(languageParam.split(',')));
    }
    if (marketParam) {
      dispatch(setSelectedMarkets(marketParam.split(',')));
    }
  }, [dispatch, initialGames, initialGenres, initialLanguages, initialMarkets, searchParams]);

  // Save filter state to localStorage whenever it changes
  const selectedGenres = useAppSelector((state) => state.filter.selectedGenres);
  const selectedLanguages = useAppSelector((state) => state.filter.selectedLanguages);
  const selectedMarkets = useAppSelector((state) => state.filter.selectedMarkets);

  useEffect(() => {
    const filterState = {
      genres: selectedGenres,
      languages: selectedLanguages,
      markets: selectedMarkets,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(filterState));

    const params = new URLSearchParams();
    if (selectedGenres.length > 0) params.set('genre', selectedGenres.join(','));
    if (selectedLanguages.length > 0) params.set('language', selectedLanguages.join(','));
    if (selectedMarkets.length > 0) params.set('market', selectedMarkets.join(','));
    router.replace(`/games?${params.toString()}`, { scroll: false });
  }, [selectedGenres, selectedLanguages, selectedMarkets, router]);

  return (
    <>
      <TopSlider />
      <div className="z-5 mx-5 flex flex-col lg:flex-row max-w-[1320px] w-full mb-[200px]">
        <div className="lg:w-1/4 p-4 mt-10">
          <SortComponent currentSort={initialSort} />
          <FilterComponent
            genres={genres}
            languages={languages}
            markets={markets}
            currentGenres={selectedGenres}
            currentLanguages={selectedLanguages}
            currentMarkets={selectedMarkets}
            setFiltering={(value) => dispatch(setFiltering(value))}
          />
        </div>
        <div className="lg:w-3/4 p-4 mt-10">
          <SearchComponent currentSearch={initialSearch} />
          {isFiltering ? (
            <div className="mt-10 text-center">
              <LoadingSpinner />
            </div>
          ) : (
            <GameListing games={filteredGames} />
          )}
        </div>
      </div>
    </>
  );
}
