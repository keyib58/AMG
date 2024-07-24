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
  initialGames: {
    id: string;
    name: string;
    thumbnailUrl: string;
    description: string;
    gameBackgroundUrl: string;
    gameGifUrl: string;
    gameType: string;
    RTP: number;
    genre: string;
    volatility: string;
    maxWin: number;
    placeHolderUrl: string;
    popularRank: number;
    releaseDate: string;
    status: string;
    slug: string;
  }[];
  initialGenres: string[];
  initialLanguages: string[];
  initialMarkets: string[];
  initialSort: string;
  initialSearch: string;
  currentSort: string;  // Add this property
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
