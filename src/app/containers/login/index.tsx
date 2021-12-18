import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

import { LoginPage } from './components/page';
import { useLogin } from './hooks';

export const Login = memo(() => {
  // const token = getCookie('token');
  const { isAuth } = useLogin();
  if (isAuth) return <Redirect to="/" />;

  return <LoginPage />;
});
