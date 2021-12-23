export interface InvestorsProps {
  id: string;
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
