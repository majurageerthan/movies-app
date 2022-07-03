import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    value: [],
  },
  reducers: {
    addToMovies: (state, action) => {
      const oldMovies = state.value || [];
      const newMovies = action.payload || [];
      const allMovies = [...oldMovies, ...newMovies];
      state.value = allMovies;
    },
    clearMovies: (state) => {
      state.value = [];
    },
    initMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToMovies, clearMovies, initMovies } = movieSlice.actions;

export default movieSlice.reducer;
