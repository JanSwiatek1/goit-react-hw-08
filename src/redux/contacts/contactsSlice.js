import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Tutaj dodaj obsługę akcji asynchronicznych
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;