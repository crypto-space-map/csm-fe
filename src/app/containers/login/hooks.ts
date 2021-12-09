import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { getCookie } from 'utils/cookie';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { loginPageSaga } from './saga';
import { selectAuth } from './selectors';
import { actions, reducer } from './slice';
import { sliceKey } from './utils';

export function useLoginPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: loginPageSaga });
  return useActions(actions);
}

export function useLogin() {
  const { fetchUser, registerUser, setAuth } = useLoginPageSlice();
  const isAuth = useSelector(selectAuth);
  const token = getCookie('token');

  useEffect(() => {
    if (!token && isAuth) setAuth({ isAuth: false });
  }, [token, isAuth, setAuth]);

  return {
    fetchUser,
    registerUser,
  };
}
