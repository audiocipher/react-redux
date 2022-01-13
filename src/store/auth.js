import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};

// a "slice" of the central data store for the authentication state
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  // reducer functions which can change the state
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
