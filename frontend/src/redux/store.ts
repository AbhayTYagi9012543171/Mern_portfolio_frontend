import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice";

/* =========================================================
   REDUX STORE
========================================================= */

/**
 * Central Redux store.
 *
 * Add new reducers here as the application grows:
 *
 * auth
 * projects
 * github
 * admin
 * analytics
 * etc.
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },

  /*
   * Redux Toolkit automatically configures:
   *
   * - Redux DevTools
   * - thunk middleware
   * - immutable state checks
   * - serializable state checks
   *
   * DevTools are enabled only during development.
   */
  devTools: import.meta.env.DEV,
});

/* =========================================================
   ROOT STATE
========================================================= */

/**
 * Represents the complete Redux state tree.
 */
export type RootState = ReturnType<
  typeof store.getState
>;

/* =========================================================
   APP DISPATCH
========================================================= */

/**
 * Typed Redux dispatch.
 *
 * Supports both normal actions and async thunks.
 */
export type AppDispatch = typeof store.dispatch;

/* =========================================================
   STORE INSTANCE TYPE
========================================================= */

/**
 * Useful when the store itself needs to be passed
 * around in testing or advanced application setups.
 */
export type AppStore = typeof store;

export default store;