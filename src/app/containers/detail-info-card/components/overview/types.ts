export interface ContractProps {
  id: number;
  name: string;
  address: string;
  imgSrc: string;
}

export interface OverviewProps {
  description: string;
  category: string;
  contracts: ContractProps[];
}
