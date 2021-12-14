import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

import { AccountMenu } from './components/menu';
import { AccountContainer } from './styled';

export const Account = memo(() => {
  const token = getCookie('token');
  if (token) return <Redirect to="/" />;

  return (
    <AccountContainer>
      <AccountMenu />
    </AccountContainer>
  );
});
