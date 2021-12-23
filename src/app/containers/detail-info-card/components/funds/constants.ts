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

export const products: FundsProps[] = [
  {
    id: '1',
    fundrasingRound: 'Round A',
    investors: [
      { id: 'power', title: 'Coinbase' },
      { id: 'power', title: 'Binance labs' },
      { id: 'power', title: 'Multicoin' },
      { id: 'power', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
  },

  {
    id: '2',
    fundrasingRound: 'Round C',
    investors: [
      { id: 'power', title: 'Coinbase' },
      { id: 'power', title: 'Binance labs' },
      { id: 'power', title: 'Multicoin' },
      { id: 'power', title: 'Framework capital' },
    ],
    amount: 10000000,
    date: '2021-10-18T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
  },
  {
    id: '3',
    fundrasingRound: 'Round B',
    investors: [
      { id: 'power', title: 'Multicoin' },
      { id: 'power', title: 'Framework capital' },
    ],
    amount: 1420000,
    date: '2021-10-17T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
  },
  {
    id: '4',
    fundrasingRound: 'Round D',
    investors: [{ id: 'power', title: 'Framework capital' }],
    amount: 34000000,
    date: '2021-10-25T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
  },
];
