import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

export const Login = memo(() => {
  const token = getCookie('token');
  if (token) return <Redirect to="/" />;

  return <div style={{ height: '100vh', overflow: 'hidden' }}>тут скоро что-то будет</div>;
});
