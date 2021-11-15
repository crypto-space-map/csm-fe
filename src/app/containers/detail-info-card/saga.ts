import { put, takeLatest, call } from 'typed-redux-saga';

import { getDetailInfoCard } from './api';
import { actions } from './slice';

export function* fetchDetailInfo() {
  try {
    const { data } = yield* call(getDetailInfoCard);

    yield* put(actions.fetchDetialInfoSuccess(data));
  } catch {
    yield* put(actions.fetchDetialInfoFail());
  }
}

export function* providersSaga() {
  yield* takeLatest(actions.fetchDetialInfo, fetchDetailInfo);
}
