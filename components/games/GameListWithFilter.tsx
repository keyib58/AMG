'use client';

import { useState, useEffect, SetStateAction } from 'react';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { GameListWithFilterProps } from 'types/type';
import { LoadingSpinner } from '../shared/icons';
import TopSlider from './topSlider';

export default function GameListWithFilter({
  genres,
  languages,
  countries,
  initialGames,
  initialGenres,
  initialLanguages,
  initialCountries,
  initialSort,
  initialSearch,
}: GameListWithFilterProps) {
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [filteredGames, setFilteredGames] = useState(initialGames);

  useEffect(() => {
    setFilteredGames(initialGames);
  }, [initialGames]);

  return (
    <>
      <TopSlider />
      <div className="z-5 mx-5 flex max-w-[1320px] w-full mb-[200px]">
        <div className="w-1/4 p-4 mt-10">
          <SortComponent currentSort={initialSort} />
          <FilterComponent
            genres={genres}
            languages={languages}
            countries={countries}
            currentGenres={initialGenres}
            currentLanguages={initialLanguages}
            currentCountries={initialCountries}
            setFiltering={(value: SetStateAction<boolean>) => {
              setIsFiltering(value);
            }}
          />
        </div>
        <div className="w-3/4 p-4 mt-10">
          <SearchComponent currentSearch={initialSearch} />
          {isFiltering ? <div className="mt-10 text-center"><LoadingSpinner /></div> : <GameListing games={filteredGames} />}
        </div>
      </div>
    </>
  );
}
