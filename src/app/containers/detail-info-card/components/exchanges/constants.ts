import { ExchangesProps } from './types';

export const fieldNames = {
  id: 'id',
  exchange: 'exchange',
  pairLink: 'pairLink',
  pairName: 'pairName',
  price: 'price',
  volume: 'volume',
  persentVolume: 'persentVolume',
  updated: 'updated',
};

export const headerNames = {
  id: '#',
  exchange: fieldNames.exchange,
  pairName: fieldNames.pairName,
  price: fieldNames.price,
  volume: fieldNames.volume,
  persentVolume: 'volume %',
  updated: fieldNames.updated,
};

export const products: ExchangesProps[] = [
  {
    exchange: 'Huobi Global',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pairName: 'XRT/USDT',
    price: '13.24',
    volume: '15634578',
    persentVolume: '22.10',
    updated: 'Recently',
  },

  {
    exchange: 'Huobi Global',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pairName: 'XRT/BTC',
    price: '13.20',
    volume: '16634578',
    persentVolume: '19.10',
    updated: 'Recently',
  },

  {
    exchange: 'Hoo.com',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pairName: 'XRT/ETH',
    price: '13.20',
    volume: '19634578',
    persentVolume: '19.10',
    updated: '2h ago',
  },

  {
    exchange: 'Bancor Networld',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pairName: 'XRT/ETH',
    price: '13.20',
    volume: '15634578',
    persentVolume: '99.10',
    updated: 'Recently',
  },
];
