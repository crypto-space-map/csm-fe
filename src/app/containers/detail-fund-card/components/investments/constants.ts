import { InvestmentsProps } from './types';

export const fieldNames = {
  id: 'id',
  fundrasingRound: 'fundrasingRound',
  project: 'project',
  amount: 'amount',
  investors: 'investors',
  date: 'date',
  ann: 'ann',
  imgSrc: 'imgSrc',
};

export const headerNames = {
  id: '#',
  fundrasingRound: 'Fundrasing Round',
  project: 'Project',
  amount: 'Investment Amout',
  investors: 'Investors',
  date: 'Date',
  ann: 'Ann.',
};

export const products: InvestmentsProps[] = [
  {
    id: '1',
    fundrasingRound: 'Round A',
    project: 'BitDao',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYZPDQVIqIgehcwk1NuZ7OMFzIMTc26H1dg&usqp=CAU',
  },
  {
    id: '2',
    fundrasingRound: 'Round A',
    project: 'Biao',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYZPDQVIqIgehcwk1NuZ7OMFzIMTc26H1dg&usqp=CAU',
  },
  {
    id: '3',
    fundrasingRound: 'Round A',
    project: 'Bao',
    investors: [
      { link: 'http://www.bluesmobil.ru', title: 'Coinbase' },
      { link: 'http://www.bluesmobil.ru', title: 'Binance labs' },
      { link: 'http://www.bluesmobil.ru', title: 'Multicoin' },
      { link: 'http://www.bluesmobil.ru', title: 'Framework capital' },
    ],
    amount: 1920000,
    date: '2021-10-16T19:20:42+03:00',
    ann: 'http://www.bluesmobifsdfsdfdsfl.ru',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYZPDQVIqIgehcwk1NuZ7OMFzIMTc26H1dg&usqp=CAU',
  },
];
