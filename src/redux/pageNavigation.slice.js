import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentScreen: 'Home',
  currentFilter: [],
  selectedActivity: null,
};

const pageNavigationSlice = createSlice({
  name: 'pageNavigation',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentScreen: (state, { payload: screen }) => ({
      ...state,
      currentScreen: screen,
    }),

    setCurrentFilter: (state, { payload }) => {
      const selectedItem = payload.items.find((i) => i.aba === payload.aba);
      // debugger;
      console.log('selectedItem', selectedItem);
      console.log('state', state.currentScreen);

      return {
        ...state,
        currentFilter: selectedItem.wfFilter,
        selectedActivity:
          selectedItem.aba !== state.currentScreen
            ? null
            : state.selectedActivity,
      };
    },

    setSelectedActivity: (state, { payload: activity }) => ({
      ...state,
      selectedActivity: activity,
    }),
  },
});

export const { setCurrentFilter, setCurrentScreen, setSelectedActivity } =
  pageNavigationSlice.actions;

export default pageNavigationSlice.reducer;
