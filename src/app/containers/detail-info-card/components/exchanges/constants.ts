import { ExchangesProps } from './types';

export const fieldNames = {
  id: 'id',
  exchange: 'Exchange',
  pairLink: 'PairLink',
  pair: 'Pair',
  price: 'Price',
  volume: 'Volume',
  persentVolume: 'PersentVolume',
  updated: 'Updated',
};

export const headerNames = {
  id: '#',
  exchange: fieldNames.exchange,
  pair: fieldNames.pair,
  price: fieldNames.price,
  volume: fieldNames.volume,
  persentVolume: 'Volume %',
  updated: fieldNames.updated,
};

export const products: ExchangesProps[] = [
  {
    id: '1',
    exchange: 'Huobi Global',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pair: 'XRT/USDT',
    price: '13.24',
    volume: '15634578',
    persentVolume: '22.10',
    updated: 'Recently',
  },
  {
    id: '2',
    exchange: 'Huobi Global',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pair: 'XRT/BTC',
    price: '13.20',
    volume: '16634578',
    persentVolume: '19.10',
    updated: 'Recently',
  },
  {
    id: '3',
    exchange: 'Hoo.com',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pair: 'XRT/ETH',
    price: '13.20',
    volume: '19634578',
    persentVolume: '19.10',
    updated: '2h ago',
  },
  {
    id: '4',
    exchange: 'Bancor Networld',
    pairLink: 'https://www.figma.com/file/vWZHmI3yQ6I24BZA2TyaeA/Crypto-Space-Map?node-id=1%3A4272',
    pair: 'XRT/ETH',
    price: '13.20',
    volume: '15634578',
    persentVolume: '99.10',
    updated: 'Recently',
  },
];
