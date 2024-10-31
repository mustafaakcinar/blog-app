import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    username: "",
    loading: "",
    error: "",
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;

    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
    },
    logoutSuccess: (state, {payload}) => {
      state.loading = false;

    },
    fetchFail: (state) => {
      state.loading = false;

    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;

    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  fetchFail,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;