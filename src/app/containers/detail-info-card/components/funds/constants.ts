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
    fundrasingRound: 'Round A',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: 'http://www.bluesmobil.ru',
  },

  {
    fundrasingRound: 'Round C',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 10000000,
    date: '2021-10-18T19:20:42+03:00',
    ann: 'https://www.drive2.com',
  },
  {
    fundrasingRound: 'Round B',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1420000,
    date: '2021-10-17T19:20:42+03:00',
    ann: 'https://www.google.com',
  },
  {
    fundrasingRound: 'Round D',
    investors: [{ link: 'http://www.bluesmobil.ru', title: 'Framework capital' }],
    amount: 34000000,
    date: '2021-10-25T19:20:42+03:00',
    ann: 'http://www.bluesmobil.ru',
  },
];
