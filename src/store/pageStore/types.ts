/* --- STATE --- */
export interface FundOptionsProps {
  id: string;
  name: string;
  website: string;
}
export interface PageTypesState {
  projectName: string | null;
  fundName: string | null;
  fundOptions: FundOptionsProps | null;
}

export type ContainerState = PageTypesState;
