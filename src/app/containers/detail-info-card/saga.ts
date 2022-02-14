import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { getExchangesData, getProjectData, getSocialData, getFundsData } from './api';
import { actions } from './slice';

export function* exchangesDataWorker(action: ReturnType<typeof actions.fetchExchangesData>) {
  try {
    const { data } = yield* call(getExchangesData, action.payload);
    yield* put(actions.setExchangesPage(action.payload.page));
    yield* put(actions.fetchExchangesDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchExchangesDataError({ message }));
    }
  }
}

export function* fundsDataWorker(action: ReturnType<typeof actions.fetchFundsData>) {
  try {
    const { data } = yield* call(getFundsData, action.payload);
    yield* put(actions.fetchFundsDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchFundsDataError({ message }));
    }
  }
}

export function* projectDataWorker(action: ReturnType<typeof actions.fetchProjectData>) {
  try {
    const { data } = yield* call(getProjectData, action.payload);
    yield* put(actions.fetchProjectDataSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchProjectDataError());
    }
  }
}

export function* fetchSocialDataWorker(action: ReturnType<typeof actions.fetchSocialData>) {
  try {
    const { data } = yield* call(getSocialData, action.payload);
    yield* put(actions.fetchSocialDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchSocialDataError({ message }));
    }
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchExchangesData, exchangesDataWorker);
  yield* takeLatest(actions.fetchProjectData, projectDataWorker);
  yield* takeLatest(actions.fetchSocialData, fetchSocialDataWorker);
  yield* takeLatest(actions.fetchFundsData, fundsDataWorker);
}
