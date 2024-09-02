import {configureStore} from '@reduxjs/toolkit';
import {podCastReducer, authorReducer} from './Redux/createSlice';

export const store = configureStore({
  reducer: {
    podcastData: podCastReducer,
    authorData: authorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
