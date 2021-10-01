import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentScreen: 'Home',
};

const pageNavigationSlice = createSlice({
  name: 'pageNavigation',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentScreen: (state, { payload: screen }) => ({
      ...state,
      currentScreen: screen,
    }),
  },
});

export const { setCurrentScreen } = pageNavigationSlice.actions;

export default pageNavigationSlice.reducer;
