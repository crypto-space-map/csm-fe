import { memo } from 'react';

import moment from 'moment';

import { Grid } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import LinkIcon from 'assets/link.svg';
import { cutLink } from 'utils/detail-info';

import { InvestorsCell } from './components/investors-cell';
import { headerNames, products } from './constants';
import { InvestorsWrapper, AnnLink } from './styles';
import { FundsProps } from './types';

const decorateAmount = (row: FundsProps) => {
  const value = row.amount;
  if (!value) return null;
  return `$ ${value.toLocaleString()}`;
};

const decorateDate = (row: FundsProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMMM YYYY');
};

const decorateInvestors = (row: FundsProps) => {
  const value = row.investors;
  if (!value) return null;

  return (
    <InvestorsWrapper>
      {value.map((item, i, array) => (
        <InvestorsCell
          key={`investorLinkWrapper ${item.title}`}
          isLastElement={array.length - 1 !== i}
          {...item}
        />
      ))}
    </InvestorsWrapper>
  );
};

const decorateAnn = (row: FundsProps) => {
  const value = row.ann;
  if (!value) return null;
  return (
    <AnnLink target="_blank" href={value}>
      <LinkIcon /> <span>{cutLink(value)}</span>
    </AnnLink>
  );
};

const columns: ColumnProps<FundsProps>[] = [
  {
    field: 'fundrasingRound',
    headerName: headerNames.fundrasingRound,
    width: 95,
  },
  {
    field: 'investors',
    headerName: headerNames.investors,
    width: 200,
    sortable: false,
    renderCell: decorateInvestors,
  },
  {
    field: 'amount',
    headerName: headerNames.amount,
    width: 90,
    type: SortingTypes.NUMBER,
    valueFormatter: decorateAmount,
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 110,
    type: SortingTypes.DATE,
    valueFormatter: decorateDate,
  },
  {
    field: 'ann',
    headerName: headerNames.ann,
    sortable: false,
    width: 100,
    renderCell: decorateAnn,
  },
];

export const Funds = memo(() => {
  const loadData = () => {};
  return <Grid columns={columns} rows={products} fetchData={loadData} />;
});
