/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import type { Reducer } from '@reduxjs/toolkit';

import { reducer as pageReducer, sliceKey as pageKey } from 'store/pageStore/slice';
import type { InjectedReducersType } from 'utils/types/injector-typings';

const storeReducers = {
  [pageKey]: pageReducer,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const defaultReducer: Reducer = state => state;

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(
  injectedReducers: InjectedReducersType = {}
): ReturnType<typeof combineReducers> | Reducer {
  const reducers = {
    ...storeReducers,
    ...injectedReducers,
  };
  // Initially we don't have any reducers, so returning identity function to avoid the error
  if (!Object.keys(reducers).length) {
    return defaultReducer;
  }
  return combineReducers(reducers);
}
