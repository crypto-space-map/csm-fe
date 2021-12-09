import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

import { LoginPage } from './components/page';

export const Login = memo(() => {
  const token = getCookie('token');
  if (token) return <Redirect to="/" />;

  return <LoginPage />;
});
