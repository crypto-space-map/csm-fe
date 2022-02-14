export interface InvestorProps {
  id: string;
  name: string;
  website: string;
}

export interface ProjectProps {
  projectId: string;
  name: string;
  logo: string;
}

export interface InvestorDTO {
  type: string;
  project: ProjectProps;
  investors: InvestorProps[];
  amount: number;
  date: string;
  announcement: string;
}

export interface TransformedInvestorDTO extends Omit<InvestorDTO, 'project'> {
  projectName: string;
  projectLogo: string;
}

export interface DetailFundState {
  investorsData: InvestorDTO[] | null;
  investorsDataLoading: boolean;
}

export type ContainerState = DetailFundState;
