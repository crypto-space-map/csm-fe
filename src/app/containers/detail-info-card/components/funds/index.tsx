import { memo } from 'react';

import moment from 'moment';

import { Grid, SelectWithLink } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';

import { headerNames, products } from './constants';
import { StyledLink, InvestorsWrapper, InvestorLinkWrapper } from './styles';
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
        <InvestorLinkWrapper key={`investorLinkWrapper ${item.title}`}>
          <StyledLink target="_blank" href={item.link}>
            {item.title}
          </StyledLink>
          {array.length - 1 !== i ? <span>,</span> : null}
        </InvestorLinkWrapper>
      ))}
    </InvestorsWrapper>
  );
};

const decorateAnn = (row: FundsProps) => {
  const options = row.ann;
  if (!options) return null;
  return <SelectWithLink options={options} />;
};

const columns: ColumnProps<FundsProps>[] = [
  {
    field: 'fundrasingRound',
    headerName: headerNames.fundrasingRound,
    width: 105,
  },
  {
    field: 'investors',
    headerName: headerNames.investors,
    width: 233,
    sortable: false,
    renderCell: decorateInvestors,
  },
  {
    field: 'amount',
    headerName: headerNames.amount,
    width: 100,
    type: SortingTypes.NUMBER,
    valueFormatter: decorateAmount,
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 120,
    type: SortingTypes.DATE,
    valueFormatter: decorateDate,
  },
  {
    field: 'ann',
    headerName: headerNames.ann,
    sortable: false,
    width: 70,
    renderCell: decorateAnn,
  },
];

export const Funds = memo(() => <Grid columns={columns} rows={products} />);
