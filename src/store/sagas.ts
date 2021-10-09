/**
 * Run all sagas
 */

import { all } from 'redux-saga/effects';

// import { someSaga } from 'store/something/saga';
// [IMPORT NEW SLICESAGA ABOVE] < Needed for generating slices seamlessly

export function* rootSaga(): Generator<unknown> {
  yield all([
    // someSaga(),
    // [INSERT NEW SLICE SAGA ABOVE] < Needed for generating slices seamlessly
  ]);
}
