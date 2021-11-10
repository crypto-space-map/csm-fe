import { memo } from 'react';

import moment from 'moment';

import { Grid, CryptoLogo } from 'app/components';
import { ColumnProps, SortingTypes } from 'app/components/grid/types';
import LinkIcon from 'assets/link.svg';

import { headerNames, products } from './constants';
import { AnnLink, PartnerWrapper } from './styles';
import { PartnersProps } from './types';
import { cutLink } from './utils';

const decorateMcap = (row: PartnersProps) => {
  const { mcap, mcapInit } = row;
  if (!mcap) return null;
  return `${mcap} ${mcapInit}`;
};

const decorateDate = (row: PartnersProps) => {
  const value = row.date;
  if (!value) return null;
  return moment(value).format('DD MMMM YYYY');
};

const decorateAnn = (row: PartnersProps) => {
  const value = row.ann;
  if (!value) return null;
  return (
    <>
      <AnnLink target="_blank" href={value}>
        <LinkIcon /> <span>{cutLink(value)}</span>
      </AnnLink>
    </>
  );
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
    width: 110,
    type: SortingTypes.Number,
    valueFormatter: decorateMcap,
  },
  {
    field: 'date',
    headerName: headerNames.date,
    width: 130,
    type: SortingTypes.Date,
    valueFormatter: decorateDate,
  },
  {
    field: 'ann',
    headerName: headerNames.ann,
    sortable: false,
    width: 184,
    renderCell: decorateAnn,
  },
];

export const Partners = memo(() => <Grid columns={columns} rows={products} />);
