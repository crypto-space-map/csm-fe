import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { detailInfoSaga } from './saga';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useDetailInfoSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: detailInfoSaga });
  return useActions(actions);
}
