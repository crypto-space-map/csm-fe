import { FetchDataState } from 'utils/@reduxjs/fetchData';

export interface LoginDTORequestParams {
  email?: string;
  password?: string;
}
export interface LoginPageStateDTO {
  token: string;
}
export interface LoginPageState extends FetchDataState {
  data: LoginPageStateDTO | null;
  isAuth: boolean;
  recoverMsgSended: boolean;
  userMail: string | null;
  isAuthError: boolean;
}

export type ContainerState = LoginPageState;
