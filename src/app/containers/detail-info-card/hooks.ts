import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { providersSaga } from './saga';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useProvidersSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: providersSaga });
  return useActions(actions);
}
