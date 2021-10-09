import { FetchDataState } from 'utils/@reduxjs/fetchData';

export interface LoginDTORequestParams {
  username?: string;
  password?: string;
}
export interface LoginPageStateDTO {
  auth: boolean;
  uid: string;
  uname: string;
  sn: string;
  fullname: string;
  mail: string;
  admin: boolean;
  supervisor: boolean;
  cost: string;
  capManager: boolean;
  jwt: {
    iat: number;
    exp: number;
  };
}
export interface LoginPageState extends FetchDataState {
  data: LoginPageStateDTO | null;
  isAuth: boolean;
}

export type ContainerState = LoginPageState;
