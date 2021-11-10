import moment from 'moment';

import { SortingValues, SortingTypes, CompareFuncProps } from './types';

export const dateSortFunc = <R>({ a, b, fieldName, sortDirection }: CompareFuncProps<R>): number =>
  sortDirection === SortingValues.Asc
    ? moment(a[fieldName]).valueOf() - moment(b[fieldName]).valueOf()
    : moment(b[fieldName]).valueOf() - moment(a[fieldName]).valueOf();

export const numberSortFunc = <R>({ a, b, fieldName, sortDirection }: CompareFuncProps<R>): number =>
  sortDirection === SortingValues.Asc
    ? Number(a[fieldName]) - Number(b[fieldName])
    : Number(b[fieldName]) - Number(a[fieldName]);

export const stringSortFunc = <R extends Record<string, string>>({
  a,
  b,
  fieldName,
  sortDirection,
}: CompareFuncProps<R>): number =>
  sortDirection === SortingValues.Asc
    ? a[fieldName].localeCompare(b[fieldName])
    : b[fieldName].localeCompare(a[fieldName]);

export const getCompareFunc = (type = '') => {
  if (type === SortingTypes.Date) return dateSortFunc;
  if (type === SortingTypes.Number) return numberSortFunc;
  return stringSortFunc;
};
