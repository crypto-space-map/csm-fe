import { memo, useEffect, useCallback } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { InvestorsCell, StyledLoader, AnnLink } from 'app/components/detail-common-components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { selectedProjectName } from 'store/pageStore/selectors';
import { getTransformedPrice } from 'utils/detail-info';

import { selectedEnrichedFundsData, selectedFundsDataLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { FundsDTO } from '../../types';
import { headerNames } from './constants';
import { InvestorsWrapper } from './styles';

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

const decorateInvestors = (row: EnrichedFundsProps) => {
  const value = row.investors;
  if (!value?.length) return null;

  return (
    <InvestorsWrapper>
      {value.map((item, i, array) => (
        <InvestorsCell
          key={`investorLinkWrapper ${item.id}`}
          isLastElement={array.length - 1 !== i}
          {...item}
        />
      ))}
    </InvestorsWrapper>
  );
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
    width: 100,
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
