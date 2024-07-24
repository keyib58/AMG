import { createSlice } from '@reduxjs/toolkit';

// Initial state for the search slice
const initialState = {
  searchTerm: '', // Default search term
};

// Creating the search slice
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Reducer to set the search term
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      localStorage.setItem('searchTerm', action.payload); // Persist search term to localStorage
    },
    // Reducer to reset the search term to an empty string
    resetSearchTerm(state) {
      state.searchTerm = '';
      localStorage.setItem('searchTerm', ''); // Persist search term to localStorage
    },
  },
});

// Export the actions to be used in components
export const { setSearchTerm, resetSearchTerm } = searchSlice.actions;
// Export the reducer to be combined in the store
export default searchSlice.reducer;
