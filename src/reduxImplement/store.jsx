import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import savedVideosListSlice from './savedVideosListSlice';
const store = configureStore({
  reducer: {
    themeStatus: themeSlice.reducer,
    savedVideosListStatus: savedVideosListSlice.reducer,
  },
});

export default store;
