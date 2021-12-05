import { Options } from 'app/components/select-with-link/types';

export interface InvestorsProps {
  link: string;
  title: string;
}

export interface FundsProps {
  id: string;
  fundrasingRound: string;
  investors: InvestorsProps[];
  amount: number;
  date: string;
  ann: Options[];
}
