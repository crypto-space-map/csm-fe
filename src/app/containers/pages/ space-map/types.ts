import { FetchDataState } from 'utils/@reduxjs/fetchData';

export type CSMMapCategory = {
  id: string;
  name: string;
  children: CSMMapCategory[];
  marketCap: number;
};

export interface SpaceMapPageState extends FetchDataState {
  data: Array<CSMMapCategory> | null;
}

export type ContainerState = SpaceMapPageState;
