// slices/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  genres: string[];
  languages: string[];
  countries: string[];
  selectedGenres: string[];
  selectedLanguages: string[];
  selectedCountries: string[];
  isFiltering: boolean;
}

const initialState: FilterState = {
  genres: [],
  languages: [],
  countries: [],
  selectedGenres: [],
  selectedLanguages: [],
  selectedCountries: ['All'],
  isFiltering: false,
};

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
    setCountries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
    setSelectedGenres(state, action: PayloadAction<string[]>) {
      state.selectedGenres = action.payload;
    },
    setSelectedLanguages(state, action: PayloadAction<string[]>) {
      state.selectedLanguages = action.payload;
    },
    setSelectedCountries(state, action: PayloadAction<string[]>) {
      state.selectedCountries = action.payload;
    },
    setFiltering(state, action: PayloadAction<boolean>) {
      state.isFiltering = action.payload;
    },
  },
});

export const {
  setGenres,
  setLanguages,
  setCountries,
  setSelectedGenres,
  setSelectedLanguages,
  setSelectedCountries,
  setFiltering,
} = filterSlice.actions;

export default filterSlice.reducer;
