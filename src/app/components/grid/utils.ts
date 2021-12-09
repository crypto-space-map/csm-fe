import moment from 'moment';

import { SortingValues, SortingTypes, CompareFuncProps, GetCompareValueFuncProps } from './types';

const maxLimitInfiniteScroll = 500;
const minLimitInfiniteScroll = 100;

export const infiniteScrollTarget = 'scrollableTarget';

const getMomentValue = (value: string) => moment(value).valueOf();

const getRowsValue = <R>({ a, b, fieldName }: GetCompareValueFuncProps<R>) => {
  const firstRowValue = a[fieldName] ?? '';
  const seconsRowValue = b[fieldName] ?? '';
  return [firstRowValue, seconsRowValue];
};

export const dateSortFunc = <R>({ a, b, fieldName, sortDirection }: CompareFuncProps<R>): number => {
  const [firstValue, secondValue] = getRowsValue({ a, b, fieldName }) as string[];
  return sortDirection === SortingValues.ASC
    ? getMomentValue(firstValue) - getMomentValue(secondValue)
    : getMomentValue(secondValue) - getMomentValue(firstValue);
};

export const numberSortFunc = <R>({ a, b, fieldName, sortDirection }: CompareFuncProps<R>): number => {
  const [firstValue, secondValue] = getRowsValue({ a, b, fieldName });
  return sortDirection === SortingValues.ASC
    ? Number(firstValue) - Number(secondValue)
    : Number(secondValue) - Number(firstValue);
};

export const stringSortFunc = <R extends Record<string, string>>({
  a,
  b,
  fieldName,
  sortDirection,
}: CompareFuncProps<R>): number => {
  const [firstValue, secondValue] = getRowsValue({ a, b, fieldName });
  return sortDirection === SortingValues.ASC
    ? firstValue.localeCompare(secondValue)
    : secondValue.localeCompare(firstValue);
};

export const getCompareFunc = (type = '') => {
  if (type === SortingTypes.DATE) return dateSortFunc;
  if (type === SortingTypes.NUMBER) return numberSortFunc;
  return stringSortFunc;
};

export const getHasMoreFlag = (rowsCount = 0, page = 1) =>
  rowsCount < maxLimitInfiniteScroll &&
  !(rowsCount % minLimitInfiniteScroll) &&
  rowsCount / page === minLimitInfiniteScroll;
