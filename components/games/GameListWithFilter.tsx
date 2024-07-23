'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { GameListWithFilterProps } from 'types/type';
import { LoadingSpinner } from '../shared/icons';
import TopSlider from './topSlider';
import { setGames } from '@/app/slices/gameSlice';
import { setGenres, setLanguages, setCountries, setFiltering } from '@/app/slices/filterSlice';

// Component to manage game list with filters
export default function GameListWithFilter({
  genres,
  languages,
  countries,
  initialGames,
  initialGenres,
  initialLanguages,
  initialCountries,
  initialSort = 'latest',
  initialSearch,
}: GameListWithFilterProps) {
  const dispatch = useAppDispatch(); // Get the dispatch function from Redux
  const isFiltering = useAppSelector((state) => state.filter.isFiltering); // Get filtering state from Redux
  const filteredGames = useAppSelector((state) => state.game.games); // Get filtered games from Redux

  useEffect(() => {
    // Initialize Redux state with initial values
    dispatch(setGames(initialGames));
    dispatch(setGenres(initialGenres));
    dispatch(setLanguages(initialLanguages));
    dispatch(setCountries(initialCountries));
  }, [dispatch, initialGames, initialGenres, initialLanguages, initialCountries]);

  return (
    <>
      <TopSlider />
      <div className="z-5 mx-5 flex flex-col lg:flex-row max-w-[1320px] w-full mb-[200px]">
        <div className="lg:w-1/4 p-4 mt-10">
          <SortComponent currentSort={initialSort} />
          <FilterComponent
            genres={genres}
            languages={languages}
            countries={countries}
            currentGenres={initialGenres}
            currentLanguages={initialLanguages}
            currentCountries={initialCountries}
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
