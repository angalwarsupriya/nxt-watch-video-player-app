import { createSlice } from '@reduxjs/toolkit';

const savedVideosListSlice = createSlice({
  name: 'savedVideos',
  initialState: { savedVideosList: [] },
  reducers: {
    addVideoToList: (state, action) => {
      state.savedVideosList = [...state.savedVideosList, action.payload];
    },
    removeVideoFromList: (state, action) => {
      const videoIdToRemove = action.payload;
      state.savedVideosList = state.savedVideosList.filter(
        (video) => video.id !== videoIdToRemove,
      );
    },
  },
});
export default savedVideosListSlice;
