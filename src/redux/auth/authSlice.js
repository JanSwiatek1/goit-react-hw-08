import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    clearCredentials: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    setRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setRefreshing } = authSlice.actions;
export const authReducer = authSlice.reducer;