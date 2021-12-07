import { FormContainer } from 'app/containers/login/components/forms/form-container';
import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

export const Login = memo(() => {
  const token = getCookie('token');
  if (token) return <Redirect to="/" />;

  return (
    <div>
      <FormContainer />
    </div>
  );
});
