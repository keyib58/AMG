import { createSlice } from '@reduxjs/toolkit';

// Initial state for the sort slice
const initialState = {
  sortOption: 'popular', // Default sort option
};

// Creating the sort slice
const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    // Reducer to set the sort option
    setSortOption(state, action) {
      state.sortOption = action.payload;
      localStorage.setItem('sortOption', action.payload); // Persist sort option to localStorage
    },
    // Reducer to reset the sort option to 'popular'
    resetSortOption(state) {
      state.sortOption = 'popular';
      localStorage.setItem('sortOption', 'popular'); // Persist sort option to localStorage
    },
  },
});

// Export the actions to be used in components
export const { setSortOption, resetSortOption } = sortSlice.actions;
// Export the reducer to be combined in the store
export default sortSlice.reducer;
