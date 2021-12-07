import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';
import { setCookie, getCookie, deleteCookie } from 'utils/cookie';

import { getToken, getUser, logOut as logOutUser } from './api';
import { actions } from './slice';
import { LoginDTORequestParams } from './types';

export function* fetchUser() {
  try {
    const { data } = yield* call(getUser);
    yield* put(actions.setAuth({ isAuth: true }));

    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    yield* put(actions.setAuth({ isAuth: false }));
    // const message = sendErrorResponseNotification(error);
    yield* put(actions.fetchDataError({ message: error.message }));
    toast(error.message, 'error');
  }
}

export function* logOut() {
  try {
    yield* call(logOutUser);
    deleteCookie('token');
    yield* put(actions.setAuth({ isAuth: false }));
  } catch (error) {
    toast(error.message, 'error');
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
    yield* put(actions.fetchDataError({ message: error.message }));
  }
}

/** READ */
export function* fetchData(action: ReturnType<typeof actions['fetchData']>) {
  try {
    yield call(fetchToken, action.payload);
    const token = getCookie('token');
    if (token) yield call(fetchUser);
    else throw Error('Ошибка авторизации. Обратитесь к администратору');
  } catch (error) {
    toast(error.message, 'error');
    yield* put(actions.fetchDataError({ message: error.message }));
  }
}

export function* loginPageSaga() {
  yield* takeLatest(actions.fetchData, fetchData);
  yield* takeLatest(actions.fetchUser, fetchUser);
  yield* takeLatest(actions.logOut, logOut);
}
