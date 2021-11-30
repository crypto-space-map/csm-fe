import { FundsProps } from './types';

export const fieldNames = {
  fundrasingRound: 'fundrasingRound',
  investors: 'investors',
  amount: 'amount',
  date: 'date',
  ann: 'ann',
};

export const headerNames = {
  fundrasingRound: 'Fundrasing Round',
  investors: 'Investors',
  amount: 'Investment amount',
  date: 'Date',
  ann: 'Ann.',
};

const options = [
  { id: '1', link: 'https://codesandbox.io/s/react-custom-select-bpsi7' },
  { id: '2', link: 'https://developer.mozilla.org/' },
  { id: '3', link: 'https://developer.mozilla.org/' },
  { id: '4', link: 'https://developer.mozilla.org/' },
];

export const products: FundsProps[] = [
  {
    id: '1',
    fundrasingRound: 'Round A',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: options,
  },

  {
    id: '2',
    fundrasingRound: 'Round C',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 10000000,
    date: '2021-10-18T19:20:42+03:00',
    ann: options,
  },
  {
    id: '3',
    fundrasingRound: 'Round B',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1420000,
    date: '2021-10-17T19:20:42+03:00',
    ann: options,
  },
  {
    id: '4',
    fundrasingRound: 'Round D',
    investors: [{ link: 'http://www.bluesmobil.ru', title: 'Framework capital' }],
    amount: 34000000,
    date: '2021-10-25T19:20:42+03:00',
    ann: options,
  },
];
