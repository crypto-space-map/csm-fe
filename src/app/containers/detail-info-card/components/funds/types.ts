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
  ann: string;
}
