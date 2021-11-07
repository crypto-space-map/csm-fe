import { memo } from 'react';

import moment from 'moment';

import { Grid } from 'app/components/grid';
import { ColumnProps } from 'app/components/grid/types';
import LinkIcon from 'assets/link.svg';

import { headerNames, fieldNames, products } from './constants';
import { StyledLink, AnnLink, InvestorsWrapper, InvestorLinkWrapper } from './styles';
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
        <InvestorLinkWrapper>
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
  const value = row.ann;
  if (!value) return null;
  return (
    <>
      <AnnLink target="_blank" href={value}>
        <LinkIcon /> <span>Link</span>
      </AnnLink>
    </>
  );
};

const columns: ColumnProps[] = [
  {
    field: fieldNames.fundrasingRound,
    headerName: headerNames.fundrasingRound,
    width: 105,
  },
  {
    field: fieldNames.investors,
    headerName: headerNames.investors,
    width: 233,
    sortable: false,
    renderCell: decorateInvestors,
  },
  {
    field: fieldNames.amount,
    headerName: headerNames.amount,
    width: 100,
    type: 'number',
    valueFormatter: decorateAmount,
  },
  {
    field: fieldNames.date,
    headerName: headerNames.date,
    width: 120,
    type: 'date',
    valueFormatter: decorateDate,
  },
  {
    field: fieldNames.ann,
    headerName: headerNames.ann,
    sortable: false,
    width: 70,
    renderCell: decorateAnn,
  },
];

export const Overview = memo(() => <Grid columns={columns} rows={products} />);
