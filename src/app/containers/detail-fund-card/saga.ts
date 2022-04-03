import { put, takeLatest, call } from 'typed-redux-saga';

import { actions as notifierActions } from 'store/notifier/slice';

import { getInvestorsData, getFundData } from './api';
import { actions } from './slice';

export function* fundsDataWorker(action: ReturnType<typeof actions.fetchInvestorsData>) {
  try {
    const { data } = yield* call(getInvestorsData, action.payload);
    yield* put(actions.fetchInvestorsDataSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchInvestorsDataFail());
    }
  }
}

export function* fundDataWorker(action: ReturnType<typeof actions.fetchFundData>) {
  try {
    const { data } = yield* call(getFundData, action.payload);
    yield* put(actions.fetchFundDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchFundDataError({ message }));
    }
  }
}

export function* detailFundSaga() {
  yield* takeLatest(actions.fetchInvestorsData, fundsDataWorker);
  yield* takeLatest(actions.fetchFundData, fundDataWorker);
}
