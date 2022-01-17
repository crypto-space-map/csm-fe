export interface InvestorsProps {
  link: string;
  title: string;
}

export interface InvestmentsProps {
  id: string;
  fundrasingRound: string;
  project: string;
  amount: number;
  investors: InvestorsProps[];
  date: string;
  ann: string;
  imgSrc: string;
}
