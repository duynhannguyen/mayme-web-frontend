import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_TYPES } from "../../constant/constant";

const initialState = {
  isAuthenticated: false,
  error: null,
  currentUser: {},
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem(TOKEN_TYPES.ACCESS_TOKEN);
      state.isAuthenticated = false;
      state.currentUser = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
