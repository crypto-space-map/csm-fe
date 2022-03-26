import { memo, useEffect, useCallback } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { ProjectCell, InvestorsBlock, StyledLoader, AnnLink } from 'app/components/detail-common-components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { selectedFundName } from 'store/pageStore/selectors';
import { getTransformedPrice } from 'utils/detail-info';

import { selectedEnrichedInvestorsData, selectedInvestorsDataLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { TransformedInvestorDTO } from '../../types';
import { headerNames } from './constants';

interface EnrichedInvestorsProps extends TransformedInvestorDTO {
  id: string;
}

const decorateAmount = (row: EnrichedInvestorsProps) => {
  const { amount } = row;
  if (!amount) return null;
  return getTransformedPrice(amount, true);
};

const decorateDate = (row: EnrichedInvestorsProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMM YYYY');
};

const decorateAnn = (row: EnrichedInvestorsProps) => {
  const value = row.announcement;
  if (!value) return null;
  return <AnnLink link={value} width={70} />;
};

const decorateProject = (row: EnrichedInvestorsProps) => {
  const { projectId, projectLogo, projectName, isOnMap } = row;
  if (!projectName) return null;
  return <ProjectCell id={projectId} name={projectName} icon={projectLogo} isOnMap={isOnMap} />;
};

const decorateInvestors = (row: EnrichedInvestorsProps) => {
  const value = row.investors;
  if (!value) return null;
  return <InvestorsBlock investors={value} />;
};

const columns: ColumnProps<EnrichedInvestorsProps>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 20,
    sortable: false,
  },
  {
    field: 'type',
    headerName: headerNames.type,
    width: 70,
    sortable: false,
  },
  {
    field: 'projectName',
    headerName: headerNames.projectName,
    width: 105,
    renderCell: decorateProject,
  },
  {
    field: 'amount',
    headerName: headerNames.amount,
    width: 90,
    valueFormatter: decorateAmount,
    type: SortingTypes.NUMBER,
  },
  {
    field: 'investors',
    headerName: headerNames.investors,
    width: 140,
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
    field: 'announcement',
    headerName: headerNames.announcement,
    sortable: false,
    width: 80,
    renderCell: decorateAnn,
  },
];

export const Investments = memo(() => {
  const fundName = useSelector(selectedFundName);
  const investorsDataLoading = useSelector(selectedInvestorsDataLoading);
  const investorsData = useSelector(selectedEnrichedInvestorsData);
  const { fetchInvestorsData } = useDispatchAction();

  const loadData = useCallback(() => {
    if (fundName && !investorsData) fetchInvestorsData(fundName);
  }, [fundName, investorsData, fetchInvestorsData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (investorsDataLoading) return <StyledLoader />;
  return <Grid columns={columns} rows={investorsData} fetchData={loadData} startedSortedField="amount" />;
});
