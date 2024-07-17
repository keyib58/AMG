'use client';

import { useState, useEffect } from 'react';
import GameListing from './GameListing';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';
import SearchComponent from './SearchComponent';
import { Game } from '@prisma/client';

interface GameListWithFilterProps {
  genres: { genre: string }[];
  languages: { language: string }[];
  countries: { country: string }[];
  initialGames: (Game & {
    tags: { id: string; name: string }[];
    languageInfo: { id: string; language: string; trailerLink: string; demoLink: string }[];
    targetCountriesByIP: { id: string; country: string }[];
  })[];
  initialGenres: string[];
  initialLanguages: string[];
  initialCountries: string[];
  initialSort: string | null;
  initialSearch: string | null;
}

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
  const [isLoading, setIsLoading] = useState(false);
  const [filteredGames, setFilteredGames] = useState(initialGames);

  useEffect(() => {
    setFilteredGames(initialGames);
  }, [initialGames]);

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
          setLoading={setIsLoading} // Pass setLoading to FilterComponent
        />
      </div>
      <div className="w-3/4 p-4">
        <SearchComponent currentSearch={initialSearch} />
        {isLoading ? <div>Loading...</div> : <GameListing games={filteredGames} />}
      </div>
    </div>
  );
}