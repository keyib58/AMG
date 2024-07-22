// types.ts

import { Dispatch, SetStateAction } from "react";

export interface Genre {
    genre: string;
  }
  
  export interface Language {
    language: string;
  }
  
  export interface Country {
    country: string;
  }
  
  export interface FilterComponentProps {
    genres: Genre[];
    languages: Language[];
    countries: Country[];
    currentGenres: string[];
    currentLanguages: string[];
    currentCountries: string[];
    setFiltering: Dispatch<SetStateAction<boolean>>;
  }
  
  export interface Tag {
    id: string;
    name: string;
  }
  
  export interface LanguageInfo {
    id: string;
    language: string;
    trailerLink: string;
    demoLink: string;
  }
  
  export interface Game {
    id: string;
    name: string;
    slug: string;
    thumbnailUrl: string;
    tags: Tag[];
    languageInfo: LanguageInfo[];
  }
  
  export interface GameListingProps {
    games: Game[];
  }
  

  export interface GameListWithFilterProps {
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

  export interface SearchComponentProps {
    currentSearch: string | null;
  }