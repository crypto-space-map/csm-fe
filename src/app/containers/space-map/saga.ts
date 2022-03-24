import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { apiFetchMapData, apiFetchPartners, apiFetchProjects } from './api';
import { actions } from './slice';

/** READ */
export function* fetchMapData({ payload }: ReturnType<typeof actions.fetchSpaceMapData>) {
  try {
    const { data } = yield* call(apiFetchMapData, payload);
    yield* put(actions.fetchSpaceMapDataSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchSpaceMapDataError({ message }));
    }
  }
}

export function* fetchPartnershipsData({ payload }: ReturnType<typeof actions.fetchPartnerships>) {
  try {
    const { data } = yield* call(apiFetchPartners, payload);
    yield* put(actions.fetchPartnershipsSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      toast(message, 'error');
      yield* put(actions.fetchPartnershipsError({ message }));
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
  yield* takeLatest(actions.fetchPartnerships, fetchPartnershipsData);
}
