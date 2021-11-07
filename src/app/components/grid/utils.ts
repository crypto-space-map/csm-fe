import moment from 'moment';

export enum SortingValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export const dateSortFunc = ({ a, b, fieldName, sortDirection }) =>
  sortDirection === SortingValues.Desc
    ? moment(a[fieldName]).valueOf() - moment(b[fieldName]).valueOf()
    : moment(b[fieldName]).valueOf() - moment(a[fieldName]).valueOf();
