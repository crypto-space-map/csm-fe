import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';
import { setCookie, deleteCookie } from 'utils/cookie';

import { getToken, getUser, logOut as logOutUser, registerUser as apiRegisterUser } from './api';
import { actions } from './slice';
import { LoginDTORequestParams } from './types';

export function* fetchUser() {
  try {
    const { data } = yield* call(getUser);
    yield* put(actions.setAuth({ isAuth: true }));

    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    yield* put(actions.setAuth({ isAuth: false }));
    if (error instanceof Error) {
      toast(error.message, 'error');
    }
  }
}

export function* registerUser() {
  try {
    const { data } = yield* call(apiRegisterUser);
    yield* put(actions.setAuth({ isAuth: true }));
    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    yield* put(actions.setAuth({ isAuth: false }));
    if (error instanceof Error) {
      toast(error.message, 'error');
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

export function* logOut() {
  try {
    yield* call(logOutUser);
    deleteCookie('token');
    yield* put(actions.setAuth({ isAuth: false }));
  } catch (error) {
    if (error instanceof Error) {
      toast(error.message, 'error');
    }
  }
}

export function* loginPageSaga() {
  yield* takeLatest(actions.registerUser, registerUser);
  yield* takeLatest(actions.fetchUser, fetchUser);
  yield* takeLatest(actions.logOut, logOut);
}
