import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  selectedGenres: ["All"],
  selectedLanguages: ["All"],
  selectedMarkets: ["All"],
  isFiltering: false,
};

// Creating the filter slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Set available genres
    setGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
    // Set available languages
    setLanguages(state, action: PayloadAction<string[]>) {
      state.languages = action.payload;
    },
    // Set available markets
    setMarkets(state, action: PayloadAction<string[]>) {
      state.markets = action.payload;
    },
    // Set selected genres
    setSelectedGenres(state, action: PayloadAction<string[]>) {
      state.selectedGenres = action.payload;
    },
    // Set selected languages
    setSelectedLanguages(state, action: PayloadAction<string[]>) {
      state.selectedLanguages = action.payload;
    },
    // Set selected markets
    setSelectedMarkets(state, action: PayloadAction<string[]>) {
      state.selectedMarkets = action.payload;
    },
    // Set the filtering status
    setFiltering(state, action: PayloadAction<boolean>) {
      state.isFiltering = action.payload;
    },
    // Reset all filters to default ('All')
    resetFilters(state) {
      state.selectedGenres = ["All"];
      state.selectedLanguages = ["All"];
      state.selectedMarkets = ["All"];
    },
  },
});

// Export the actions to be used in components
export const {
  setGenres,
  setLanguages,
  setMarkets,
  setSelectedGenres,
  setSelectedLanguages,
  setSelectedMarkets,
  setFiltering,
  resetFilters,
} = filterSlice.actions;

// Export the reducer to be combined in the store
export default filterSlice.reducer;
