import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';
import { setCookie, deleteCookie } from 'utils/cookie';

import {
  getToken,
  getUser,
  forgotPassword,
  logOut as logOutUser,
  registerUser as apiRegisterUser,
} from './api';
import { actions } from './slice';
import { LoginDTORequestParams } from './types';

export function* fetchUser(action: ReturnType<typeof actions['fetchUser']>) {
  try {
    const { data } = yield* call(getUser, action.payload);
    yield* put(actions.setAuth({ isAuth: true }));

    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    yield* put(actions.setAuth({ isAuth: false }));
    if (error instanceof Error) {
      const { message } = error;
      yield* put(actions.fetchDataError({ message }));
      toast(message, 'error');
    }
  }
}

export function* registerUser(action: ReturnType<typeof actions['registerUser']>) {
  try {
    const { data } = yield* call(apiRegisterUser, action.payload);
    yield* put(actions.setAuth({ isAuth: true }));
    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(actions.fetchDataError({ message }));
      toast(message, 'error');
    }
  }
}

export function* fetchToken(payload: LoginDTORequestParams) {
  try {
    const { data: tokenResponse } = yield* call(getToken, payload);
    if (tokenResponse?.token) {
      setCookie('token', tokenResponse.token);
      yield* put(actions.setAuth({ isAuth: true }));
    }
  } catch (error) {
    if (error instanceof Error) {
      toast(error.message, 'error');
    }
  }
}

export function* forgotPassSaga(action: ReturnType<typeof actions['recoverMsg']>) {
  try {
    yield* call(forgotPassword, action.payload.email);
    yield* put(actions.recoverMsgSended());
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(actions.fetchDataError({ message }));
      toast(message, 'error');
    }
  }
}

export function* logOut() {
  try {
    yield* call(logOutUser);
    deleteCookie('token');
    yield* put(actions.setAuth({ isAuth: false }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(actions.fetchDataError({ message }));
      toast(message, 'error');
    }
  }
}

export function* loginPageSaga() {
  yield* takeLatest(actions.registerUser, registerUser);
  yield* takeLatest(actions.fetchUser, fetchUser);
  yield* takeLatest(actions.recoverMsg, forgotPassSaga);
  yield* takeLatest(actions.logOut, logOut);
}
