import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  genres: string[];
  languages: string[];
  markets: string[];
  selectedGenres: string[];
  selectedLanguages: string[];
  selectedMarkets: string[];
  isFiltering: boolean;
}

// Initial state for the filter slice
const initialState: FilterState = {
  genres: [],
  languages: [],
  markets: [],
  selectedGenres: [],
  selectedLanguages: [],
  selectedMarkets: ['All'],
  isFiltering: false,
};

// Creating the filter slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
    setLanguages(state, action: PayloadAction<string[]>) {
      state.languages = action.payload;
    },
    setMarkets(state, action: PayloadAction<string[]>) {
      state.markets = action.payload;
    },
    setSelectedGenres(state, action: PayloadAction<string[]>) {
      state.selectedGenres = action.payload;
    },
    setSelectedLanguages(state, action: PayloadAction<string[]>) {
      state.selectedLanguages = action.payload;
    },
    setSelectedMarkets(state, action: PayloadAction<string[]>) {
      state.selectedMarkets = action.payload;
    },
    setFiltering(state, action: PayloadAction<boolean>) {
      state.isFiltering = action.payload;
    },
  },
});

export const {
  setGenres,
  setLanguages,
  setMarkets,
  setSelectedGenres,
  setSelectedLanguages,
  setSelectedMarkets,
  setFiltering,
} = filterSlice.actions;

export default filterSlice.reducer;
