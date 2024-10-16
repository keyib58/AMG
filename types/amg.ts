// types/amg.ts

// Define the Game type
export type Game = {
    name: string;
    thumbnail: string;
    language: string[]; // Array of languages
    genre: string[]; // Array of genres
    market: string[]; // Array of markets
    redirectLink: string;
    popularRank: number;
    publishedDate: string;
    status: string; 
  };
  
  // Define the filter type to track market, language, and genre filters
  export type GameFilter = {
    market: string[];
    language: string[];
    genre: string[];
  };
  