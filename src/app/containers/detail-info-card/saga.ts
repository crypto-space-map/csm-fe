import { put, takeLatest, call } from 'typed-redux-saga';

import { actions as notifierActions } from 'store/notifier/slice';

import { getExchangesData, getProjectData, getSocialData, getEventsData, getCommunityData } from './api';
import { actions } from './slice';

export function* exchangesDataWorker(action: ReturnType<typeof actions.fetchExchangesData>) {
  try {
    const {
      data: { data },
    } = yield* call(getExchangesData, action.payload);
    yield* put(actions.setExchangesPage(action.payload.page));
    yield* put(actions.fetchExchangesDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchExchangesDataError({ message }));
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
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
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
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchSocialDataError({ message }));
    }
  }
}

export function* fetchEventsDataWorker(action: ReturnType<typeof actions.fetchEventsData>) {
  try {
    const { data } = yield* call(getEventsData, action.payload);
    yield* put(actions.fetchEventsDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchEventsDataError({ message }));
    }
  }
}

export function* fetchComminityDataWorker(action: ReturnType<typeof actions.fetchComminityData>) {
  try {
    const { data } = yield* call(getCommunityData, action.payload);
    yield* put(actions.fetchComminityDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchComminityDataError({ message }));
    }
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchExchangesData, exchangesDataWorker);
  yield* takeLatest(actions.fetchProjectData, projectDataWorker);
  yield* takeLatest(actions.fetchSocialData, fetchSocialDataWorker);
  yield* takeLatest(actions.fetchEventsData, fetchEventsDataWorker);
  yield* takeLatest(actions.fetchComminityData, fetchComminityDataWorker);
}
