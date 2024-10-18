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
    },
    loginSuccess: (state, { payload }) => {
    },
    logoutSuccess: (state, {payload}) => {
    },
    fetchFail: (state) => {
    },
    registerSuccess: (state, { payload }) => {
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