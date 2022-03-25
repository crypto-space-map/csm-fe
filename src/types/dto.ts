export interface InvestorsProps {
  id: string;
  name: string;
  website: string;
  isOnMap: boolean;
}

export interface FundsDTO {
  type: string;
  investors: InvestorsProps[];
  amount: number;
  date: string;
  announcement: string;
}
