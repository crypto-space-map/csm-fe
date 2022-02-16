import { memo } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { Grid, CryptoLogo } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { selectPartnerships } from 'app/containers/space-map/selectors';
import { Partnership } from 'app/containers/space-map/types';
import LinkIcon from 'assets/link.svg';
import { cutLink, getTransformedPrice } from 'utils/detail-info';

import { selectedEnrichedPartnerships } from '../../selectors';
import { headerNames } from './constants';
import { AnnLink, PartnerWrapper } from './styles';

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
  // TODO перейти на общий компонент для ссылок
  if (!value) return null;
  return (
    <AnnLink target="_blank" href={value}>
      <LinkIcon /> <span>{cutLink(value)}</span>
    </AnnLink>
  );
};

const decoratePartner = (row: EnrichedPartnership) => {
  const { name, icon } = row;
  if (!name) return null;
  // TODO что тут вообще должно быть, куда должно вести?
  return (
    <PartnerWrapper>
      <CryptoLogo path={icon} />
      <span>{name}</span>
    </PartnerWrapper>
  );
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
    width: 130,
    type: SortingTypes.DATE,
    valueFormatter: decorateDate,
  },
  {
    field: 'announcement',
    headerName: headerNames.announcement,
    sortable: false,
    width: 184,
    renderCell: decorateAnn,
  },
];

export const Partners = memo(() => {
  const { projectPartnershipsLoading } = useSelector(selectPartnerships);
  const enrichedPartnerships = useSelector(selectedEnrichedPartnerships);

  const loadData = () => {};

  // TODO добавить лоадер из 110-й ветки
  if (projectPartnershipsLoading) return <div>fff</div>;

  return (
    <Grid
      columns={columns}
      rows={enrichedPartnerships}
      fetchData={loadData}
      startedSortedField="marketCap"
    />
  );
});
