import { FetchDataState } from 'utils/@reduxjs/fetchData';

export interface FundDataDTO {
  id: string;
  name: string;
  website: string;
  logo: string;
}

export interface ProjectProps {
  projectId: string;
  name: string;
  logo: string;
  isOnMap: boolean;
}

export interface InvestorDTO {
  type: string;
  project: ProjectProps;
  investors: FundDataDTO[];
  amount: number;
  date: string;
  announcement: string;
}

export interface TransformedInvestorDTO extends Omit<InvestorDTO, 'project'> {
  projectName: string;
  projectLogo: string;
  projectId: string;
  isOnMap: boolean;
}

interface FundData extends FetchDataState {
  data: FundDataDTO | null;
}

export interface DetailFundState {
  investorsData: InvestorDTO[] | null;
  investorsDataLoading: boolean;
  fundData: FundData;
  projectIdListFromInvestors: string[];
}

export type ContainerState = DetailFundState;
