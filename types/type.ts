// types.ts
import { Dispatch, SetStateAction } from "react";

export interface Genre {
  genre: string;
}

export interface Language {
  language: string;
}

export interface Market {
  market: string;
}

export interface FilterComponentProps {
  genres: Genre[];
  languages: Language[];
  markets: Market[];
  currentGenres: string[];
  currentLanguages: string[];
  currentMarkets: string[];
  setFiltering: (value: boolean) => void;
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
  description: string; // Added this line
  gameBackgroundUrl: string; // Added this line
  gameGifUrl: string; // Added this line
  gameType: string; // Added this line
  RTP: number; // Added this line
  genre: string; // Added this line
  volatility: string; // Added this line
  maxWin: number; // Added this line
  placeHolderUrl: string; // Added this line
  popularRank: number; // Added this line
  releaseDate: string; // Added this line
  status: string; // Added this line
  assetUrl: string; // Added this line
  tags: Tag[];
  languageInfo: LanguageInfo[];
}

export interface GameListingProps {
  games: Game[];
}

export interface GameListWithFilterProps {
  genres: { genre: string }[];
  languages: { language: string }[];
  markets: { market: string }[];
  initialGames: Game[]; // Updated to use Game type
  initialGenres: string[];
  initialLanguages: string[];
  initialMarkets: string[];
  initialSort: string;
  initialSearch: string;
  currentSort: string;
}

export interface SearchComponentProps {
  currentSearch: string | null;
}

export interface FilterSectionProps<T> {
  title: string;
  items: T[];
  type: string;
  isOpen: boolean;
  toggleOpen: () => void;
  toggleFilter: (type: string, value: string) => void;
  isChecked: (type: string, value: string) => boolean;
}
