import { memo } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { Grid } from 'app/components';
import { AnnLink, StyledLoader, ProjectCell } from 'app/components/detail-common-components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { selectPartnerships } from 'app/containers/space-map/selectors';
import { Partnership } from 'app/containers/space-map/types';
import { getTransformedPrice } from 'utils/detail-info';

import { selectedEnrichedPartnerships } from '../../selectors';
import { headerNames } from './constants';

interface EnrichedPartnership extends Partnership {
  id: string;
}

const decorateMcap = (row: EnrichedPartnership) => {
  const { marketCap } = row;
  if (!marketCap) return null;
  return getTransformedPrice(marketCap, true);
};

const decorateDate = (row: EnrichedPartnership) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMM YYYY');
};

const decorateAnn = (row: EnrichedPartnership) => {
  const value = row.announcement;
  if (!value) return null;
  return <AnnLink link={value} />;
};

const decoratePartner = (row: EnrichedPartnership) => {
  const { name, icon, projectId } = row;
  if (!name) return null;

  return <ProjectCell id={projectId} name={name} icon={icon} />;
};

const columns: ColumnProps<EnrichedPartnership>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 30,
    sortable: false,
  },
  {
    field: 'name',
    headerName: headerNames.name,
    width: 150,
    renderCell: decoratePartner,
  },
  {
    field: 'marketCap',
    headerName: headerNames.marketCap,
    width: 90,
    type: SortingTypes.NUMBER,
    valueFormatter: decorateMcap,
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 100,
    type: SortingTypes.DATE,
    valueFormatter: decorateDate,
  },
  {
    field: 'announcement',
    headerName: headerNames.announcement,
    sortable: false,
    width: 210,
    renderCell: decorateAnn,
  },
];

export const Partners = memo(() => {
  const { projectPartnershipsLoading } = useSelector(selectPartnerships);
  const enrichedPartnerships = useSelector(selectedEnrichedPartnerships);

  const loadData = () => {};

  if (projectPartnershipsLoading) return <StyledLoader />;
  return (
    <Grid
      columns={columns}
      rows={enrichedPartnerships}
      fetchData={loadData}
      startedSortedField="marketCap"
    />
  );
});
