import { createSlice as createSliceOriginal } from '@reduxjs/toolkit';
import type {
  SliceCaseReducers,
  CreateSliceOptions,
  Slice,
  PayloadAction as PayloadActionOriginal,
} from '@reduxjs/toolkit';

import type { RootStateKeyType } from '../types/injector-typings';

/* Wrap createSlice with stricter Name options */

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
): Slice<State, CaseReducers, Name> => createSliceOriginal(options);

export type PayloadAction<T> = PayloadActionOriginal<T>;
export { createAction } from '@reduxjs/toolkit';
