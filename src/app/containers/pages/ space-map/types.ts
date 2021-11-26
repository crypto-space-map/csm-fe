import { FetchDataState } from 'utils/@reduxjs/fetchData';

export type CsmMapProject = {
  id: string;
  name: string;
  projectId: string;
  symbol: string;
};

export type CSMMapCategory = {
  id: string;
  name: string;
  children: Array<CSMMapCategory>;
  projects: Array<CsmMapProject>;
};

export interface SpaceMapPageState extends FetchDataState {
  data: Array<CSMMapCategory> | null;
}

export type ContainerState = SpaceMapPageState;
