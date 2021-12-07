import { memo } from 'react';

import { Redirect } from 'react-router-dom';

import { FormContainer } from 'app/containers/login/components/forms/form-container';
import { getCookie } from 'utils/cookie';

export const Login = memo(() => {
  const token = getCookie('token');
  if (token) return <Redirect to="/" />;

  return (
    /** TODO create styled */
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FormContainer />
    </div>
  );
});
