import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "pages/login/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

// when using combine reducer
// import { combineReducers } from '@reduxjs/toolkit'
// const rootReducer = combineReducers({})
// export type RootState = ReturnType<typeof rootReducer>
