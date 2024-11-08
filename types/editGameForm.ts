// types/editGameForm.ts

export type LanguageInfo = {
  language: string;
  trailerLink: string;
  demoLink: string;
};

export type Tag = {
  name: string;
};

export type TargetMarket = {
  market: string;
};

export type TargetCountryByIP = {
  country: string;
};

export type FormData = {
  id?: string;
  name: string;
  thumbnailUrl: string;
  description: string;
  gameBackgroundUrl: string;
  gameGifUrl: string;
  assetUrl: string;
  gameType: string;
  RTP: string;
  genre: string;
  volatility: string;
  maxWin: number;
  placeHolderUrl: string;
  popularRank: number;
  releaseDate: string;
  status: string;
  slug: string;
  weight: string;
  languageInfo: LanguageInfo[];
  tags: Tag[];
  targetMarkets: TargetMarket[];
  targetCountriesByIP: TargetCountryByIP[];
};
