import {createSlice} from '@reduxjs/toolkit';

const podcastData = createSlice({
  name: 'podcastData',
  initialState: {
    data: [],
  },
  reducers: {
    setPodcastData: (state, action) => {
      state.data = action.payload;
    },
  },
});

const AuthorData = createSlice({
  name: 'authorData',
  initialState: {
    data: [],
  },
  reducers: {
    setAuthorData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setPodcastData} = podcastData.actions;
export const {setAuthorData} = AuthorData.actions;
export const podCastReducer = podcastData.reducer;
export const authorReducer = AuthorData.reducer;
