import { useCallback, useEffect, useState } from 'react';

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
  const { fetchData, setAuth } = useLoginPageSlice();
  const isAuth = useSelector(selectAuth);
  const token = getCookie('token');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setUName = useCallback(
    e => {
      e.preventDefault();
      const {
        target: { value },
      } = e;
      if (username.length > 24) {
        setUsername(username.slice(0, -1));
      } else setUsername(value);
    },
    [username]
  );

  const setUPass = useCallback(
    e => {
      e.preventDefault();
      const {
        target: { value },
      } = e;
      if (password.length > 24) {
        setPassword(password.slice(0, -1));
      } else setPassword(value);
    },
    [password]
  );
  useEffect(() => {
    if (!token && isAuth) setAuth({ isAuth: false });
  }, [token, isAuth, setAuth]);

  const load = useCallback(
    e => {
      e.preventDefault();
      fetchData({ username, password });
    },
    [fetchData, username, password]
  );

  return {
    load,
    setUsername: setUName,
    setPassword: setUPass,
    username,
    password,
  };
}
