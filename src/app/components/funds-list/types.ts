export interface FundItemDTO {
  id: string;
  name: string;
  website: string;
  twitter: string;
  linkedIn: string;
  email: string;
  logo: string;
  yearFunded: number;
  containsInActiveFundPortfoliosView: boolean;
  type: string;
  location: string;
  activelyInvestingStatus: string;
  aum: string;
  investmentStages: string;
  isOnMap: boolean;
  projects: string[];
}
