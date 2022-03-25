import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { getTopFundsData, getFundsData } from './api';
import { actions } from './slice';

export function* topFundsDataWorker() {
  try {
    const { data } = yield* call(getTopFundsData);
    yield* put(actions.fetchTopFundsDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchTopFundsDataError({ message }));
    }
  }
}

export function* fundsDataWorker(action: ReturnType<typeof actions.fetchFundsData>) {
  try {
    const { data } = yield* call(getFundsData, action.payload);
    yield* put(actions.fetchFundsDataSuccess({ data }));
    yield* put(actions.setIsShowLines(true));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchFundsDataError({ message }));
    }
  }
}

export function* pageStoreSaga() {
  yield* takeLatest(actions.fetchTopFundsData, topFundsDataWorker);
  yield* takeLatest(actions.fetchFundsData, fundsDataWorker);
}
