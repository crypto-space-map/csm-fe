import { memo } from 'react';

import moment from 'moment';

import { Grid, CryptoLogo } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import LinkIcon from 'assets/link.svg';
import { cutLink } from 'utils/detail-info';

import { headerNames, products } from './constants';
import { AnnLink, ProjectWrapper, StyledLink, InvestorLinkWrapper, InvestorsWrapper } from './styles';
import { InvestmentsProps } from './types';

const decorateAmount = (row: InvestmentsProps) => {
  const { amount } = row;
  if (!amount) return null;
  return `$${amount}`;
};

const decorateDate = (row: InvestmentsProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMMM YYYY');
};

const decorateAnn = (row: InvestmentsProps) => {
  const value = row.ann;
  if (!value) return null;
  return (
    <AnnLink target="_blank" href={value}>
      <LinkIcon /> <span>{cutLink(value)}</span>
    </AnnLink>
  );
};

const decorateProject = (row: InvestmentsProps) => {
  const { project: projectName, imgSrc } = row;
  if (!projectName) return null;
  return (
    <ProjectWrapper>
      <CryptoLogo path={imgSrc} />
      <span>{projectName}</span>
    </ProjectWrapper>
  );
};

const decorateInvestors = (row: InvestmentsProps) => {
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

const columns: ColumnProps<InvestmentsProps>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 20,
    sortable: false,
  },
  {
    field: 'fundrasingRound',
    headerName: headerNames.fundrasingRound,
    width: 80,
    sortable: false,
  },
  {
    field: 'project',
    headerName: headerNames.project,
    width: 90,
    renderCell: decorateProject,
  },
  {
    field: 'amount',
    headerName: headerNames.amount,
    width: 80,
    valueFormatter: decorateAmount,
    sortable: false,
  },
  {
    field: 'investors',
    headerName: headerNames.investors,
    width: 130,
    renderCell: decorateInvestors,
    sortable: false,
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 70,
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

export const Investments = memo(() => {
  const loadData = () => {};
  return <Grid columns={columns} rows={products} fetchData={loadData} />;
});
