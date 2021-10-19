import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { getProviders } from './api';
import { actions } from './slice';

export function* fetchProviders() {
  try {
    const { data } = yield* call(getProviders);

    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    yield* put(actions.fetchDataError({ message: error.message }));
    toast(error.message, 'error');
  }
}

export function* providersSaga() {
  yield* takeLatest(actions.fetchData, fetchProviders);
}
