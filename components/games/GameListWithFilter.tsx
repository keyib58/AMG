'use client';

import { useState, useEffect, SetStateAction } from 'react';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { GameListWithFilterProps } from 'types/type';

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
  
  console.log('initialsort:' + initialSort);

  return (
    <div className="z-5 mx-5 flex max-w-[1320px] w-full">
      <div className="w-1/4 p-4">
        <SortComponent currentSort={initialSort} />
        <FilterComponent
          genres={genres}
          languages={languages}
          countries={countries}
          currentGenres={initialGenres}
          currentLanguages={initialLanguages}
          currentCountries={initialCountries}
          setFiltering={(value: SetStateAction<boolean>) => {
            console.log('Filtering state:', value);
            setIsFiltering(value);
          }}
        />
      </div>
      <div className="w-3/4 p-4">
        <SearchComponent currentSearch={initialSearch} />
        {isFiltering ? <div>Loading...</div> : <GameListing games={filteredGames} />}
      </div>
    </div>
  );
}
