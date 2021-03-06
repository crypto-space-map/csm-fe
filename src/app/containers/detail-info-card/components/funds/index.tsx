import { memo, useEffect, useCallback } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { InvestorsBlock, StyledLoader, AnnLink, TextWithCut } from 'app/components/detail-common-components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import {
  selectedProjectName,
  selectedEnrichedFundsData,
  selectedFundsDataLoading,
} from 'store/pageStore/selectors';
import { useDispatchAction } from 'store/pageStore/slice';
import { FundsDTO } from 'types/dto';
import { getTransformedPrice } from 'utils/detail-info';

import { headerNames } from './constants';

interface EnrichedFundsProps extends FundsDTO {
  id: string;
}

const decorateAmount = (row: EnrichedFundsProps) => {
  const value = row.amount;
  if (!value) return null;
  return getTransformedPrice(value, true);
};

const decorateDate = (row: EnrichedFundsProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMM YYYY');
};

const decorateType = (row: EnrichedFundsProps) => {
  const { id, type } = row;
  if (!type) return null;
  return <TextWithCut id={id} text={type} />;
};

const decorateInvestors = (row: EnrichedFundsProps) => {
  const value = row.investors;
  if (!value?.length) return null;

  return <InvestorsBlock investors={value} />;
};

const decorateAnn = (row: EnrichedFundsProps) => {
  const value = row.announcement;
  if (!value) return null;
  return <AnnLink link={value} width={75} />;
};

const columns: ColumnProps<EnrichedFundsProps>[] = [
  {
    field: 'type',
    headerName: headerNames.type,
    width: 95,
    renderCell: decorateType,
  },
  {
    field: 'investors',
    headerName: headerNames.investors,
    width: 190,
    sortable: false,
    renderCell: decorateInvestors,
  },
  {
    field: 'amount',
    headerName: headerNames.amount,
    width: 80,
    type: SortingTypes.NUMBER,
    valueFormatter: decorateAmount,
    textAlign: 'right',
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 100,
    type: SortingTypes.DATE,
    valueFormatter: decorateDate,
    textAlign: 'right',
  },
  {
    field: 'announcement',
    headerName: headerNames.announcement,
    sortable: false,
    width: 100,
    renderCell: decorateAnn,
    textAlign: 'right',
  },
];

export const Funds = memo(() => {
  const projectName = useSelector(selectedProjectName);
  const fundsDataLoading = useSelector(selectedFundsDataLoading);
  const fundsData = useSelector(selectedEnrichedFundsData);
  const { fetchFundsData } = useDispatchAction();

  const loadData = useCallback(() => {
    if (projectName && !fundsData) fetchFundsData(projectName);
  }, [projectName, fundsData, fetchFundsData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (fundsDataLoading) return <StyledLoader />;

  return <Grid columns={columns} rows={fundsData} fetchData={loadData} />;
});
