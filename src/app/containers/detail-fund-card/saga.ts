import { put, takeLatest, call } from 'typed-redux-saga';

import { getInvestorsData } from './api';
import { actions } from './slice';

export function* fundsDataWorker(action: ReturnType<typeof actions.fetchInvestorsData>) {
  try {
    const { data } = yield* call(getInvestorsData, action.payload);
    yield* put(actions.fetchInvestorsDataSuccess(data));
  } catch {
    yield* put(actions.fetchInvestorsDataFail());
  }
}

export function* detailFundSaga() {
  yield* takeLatest(actions.fetchInvestorsData, fundsDataWorker);
}
