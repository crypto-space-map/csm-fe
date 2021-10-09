import { FetchDataState } from 'utils/@reduxjs/fetchData';

export interface ProvidersEntries {
  provider_id: number;
  name: string;
}

export type ProvidersStateDTO = ProvidersEntries[] | [];

export interface ProvidersState extends FetchDataState {
  data: ProvidersStateDTO | [];
}

export type ContainerState = ProvidersState;
