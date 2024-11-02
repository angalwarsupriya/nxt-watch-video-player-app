import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themeStatus',
  initialState: { isThemeLight: true },
  reducers: {
    changeTheme: (state) => {
      state.isThemeLight = !state.isThemeLight;
    },
  },
});

export default themeSlice;
