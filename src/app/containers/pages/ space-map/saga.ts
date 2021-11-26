import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { fetchMapData } from './api';
import { actions } from './slice';

/** READ */
export function* fetchData() {
  try {
    const { data } = yield* call(fetchMapData);
    yield* put(actions.fetchDataSuccess({ data }));
  } catch (error) {
    toast(error.message, 'error');
    yield* put(actions.fetchDataError({ message: error.message }));
  }
}

export function* spaceMapSaga() {
  yield* takeLatest(actions.fetchData, fetchData);
}
