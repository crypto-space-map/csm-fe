/**
 * Run all sagas
 */

import { all } from 'redux-saga/effects';

import { pageStoreSaga } from 'store/pageStore/saga';

export function* rootSaga(): Generator<unknown> {
  yield all([pageStoreSaga()]);
}
