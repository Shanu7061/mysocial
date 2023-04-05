import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "store";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export const selectCurrentToken = (
  state: RootState,
) => state.auth.token;
export const { setCredentials, logOut } =
  authSlice.actions;

export default authSlice.reducer;
