import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { apiFetchMapData, apiFetchProjects } from './api';
import { actions } from './slice';

/** READ */
export function* fetchMapData() {
  try {
    const { data } = yield* call(apiFetchMapData);
    yield* put(actions.fetchSpaceMapDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchSpaceMapDataError({ message }));
    }
  }
}

export function* fetchProjectsData() {
  try {
    const { data } = yield* call(apiFetchProjects);
    yield* put(actions.fetchProjectsSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchSpaceMapDataError({ message }));
    }
  }
}

export function* spaceMapSaga() {
  yield* takeLatest(actions.fetchSpaceMapData, fetchMapData);
  yield* takeLatest(actions.fetchProjects, fetchProjectsData);
}
