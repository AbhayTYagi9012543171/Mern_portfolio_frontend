import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import type {
  RootState,
  AppDispatch,
} from "./store";

/* =========================================================
   TYPED REDUX HOOKS
========================================================= */

/**
 * Typed version of useDispatch.
 *
 * Provides the correct AppDispatch type so async thunks
 * and regular Redux actions are fully type-safe.
 */
export const useAppDispatch = () =>
  useDispatch<AppDispatch>();

/**
 * Typed version of useSelector.
 *
 * Provides autocomplete and type safety for the complete
 * Redux RootState.
 */
export const useAppSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

/* =========================================================
   TYPES
========================================================= */

export type {
  RootState,
  AppDispatch,
};