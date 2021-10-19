export interface InvestorsProps {
  link: string;
  title: string;
}

export interface FundsProps {
  fundrasingRound: string;
  investors: InvestorsProps[];
  amount: number;
  date: string;
  ann: string;
}
