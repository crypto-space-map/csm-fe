import { memo } from 'react';

import moment from 'moment';

import { Grid, CryptoLogo } from 'app/components';
import { AnnLink } from 'app/components/detail-common-components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import { cutLink, getTransformedPrice } from 'utils/detail-info';

import { headerNames, products } from './constants';
import { PartnerWrapper } from './styles';
import { PartnersProps } from './types';

const decorateMcap = (row: PartnersProps) => {
  const { mcap } = row;
  if (!mcap) return null;
  return getTransformedPrice(mcap, false, 1);
};

const decorateDate = (row: PartnersProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMM YYYY');
};

const decorateAnn = (row: PartnersProps) => {
  const value = row.ann;
  if (!value) return null;
  return <AnnLink link={value} />;
};

const decoratePartner = (row: PartnersProps) => {
  const { partner: partnerName, imgSrc } = row;
  if (!partnerName) return null;
  return (
    <PartnerWrapper>
      <CryptoLogo path={imgSrc} />
      <span>{cutLink(partnerName)}</span>
    </PartnerWrapper>
  );
};

const columns: ColumnProps<PartnersProps>[] = [
  {
    field: 'id',
    headerName: headerNames.id,
    width: 30,
    sortable: false,
  },
  {
    field: 'partner',
    headerName: headerNames.partner,
    width: 150,
    renderCell: decoratePartner,
  },
  {
    field: 'mcap',
    headerName: headerNames.mcap,
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
    field: 'ann',
    headerName: headerNames.ann,
    sortable: false,
    width: 100,
    renderCell: decorateAnn,
  },
];

export const Partners = memo(() => {
  const loadData = () => {};
  return <Grid columns={columns} rows={products} fetchData={loadData} />;
});
