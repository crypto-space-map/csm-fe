import { FundsDTO } from 'types/dto';
import { FetchDataState } from 'utils/@reduxjs/fetchData';

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

export interface PointCoords {
  x: number;
  y: number;
}

interface TopFundsData extends FetchDataState {
  data: FundItemDTO[] | null;
}

interface FundsData extends FetchDataState {
  data: FundsDTO[] | null;
}

export interface PageTypesState {
  projectName: string | null;
  fundName: string | null;
  topFunds: TopFundsData;
  fundBlockItemsIdList: string[];
  isShowLines: boolean;
  pointsCoords: PointCoords[];
  fundsData: FundsData;
}

export type ContainerState = PageTypesState;
