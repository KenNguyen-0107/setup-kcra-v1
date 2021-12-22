import { RootStateKeyType } from 'types/config/injector-typings';
import {
  createSlice as createSliceOriginal,
  SliceCaseReducers,
  CreateSliceOptions,
} from '@reduxjs/toolkit';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */
export const createSlice = <
  Name extends RootStateKeyType,
  State,
  CaseReducers extends SliceCaseReducers<State>,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  return createSliceOriginal(options);
};
