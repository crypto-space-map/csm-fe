import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { loginPageSaga } from './saga';
import { selectAuth, selectLoading } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useLoginPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: loginPageSaga });
  return useActions(actions);
}

export function useLogin() {
  const { fetchUser, registerUser, recoverMsg } = useLoginPageSlice();
  const isAuth = useSelector(selectAuth);
  const loading = useSelector(selectLoading);

  return {
    fetchUser,
    registerUser,
    recoverMsg,
    actions: { loading },
    isAuth,
  };
}
