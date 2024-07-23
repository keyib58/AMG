// slices/gameSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the game slice
const initialState = {
  games: [],
};

// Creating the game slice
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Reducer to set games
    setGames(state, action) {
      state.games = action.payload;
    },
  },
});

// Export the action to be used in components
export const { setGames } = gameSlice.actions;
// Export the reducer to be combined in the store
export default gameSlice.reducer;
