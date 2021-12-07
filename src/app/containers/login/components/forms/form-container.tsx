import { useState } from 'react';

import { Button } from 'common/components/button';

import { UserForms } from '../types';
import { SignInForm } from './sign-up';
import { StyledFormContainer, StyledFormHeader } from './styled';

export const FormContainer = () => {
  const [selectedForm, setSelectedForm] = useState(UserForms.LOGIN);

  const handleClick = () => setSelectedForm(selectedForm === 1 ? UserForms.LOGIN : UserForms.REGISTER);

  const renderForm = () => {
    switch (selectedForm) {
      case UserForms.LOGIN:
        return <SignInForm />;
      case UserForms.REGISTER:
        return <div>register</div>;
      default:
        return null;
    }
  };

  return (
    <StyledFormContainer>
      <StyledFormHeader>Sing up</StyledFormHeader>
      {renderForm()}
      <Button onClick={handleClick}>NEXT FORM</Button>
    </StyledFormContainer>
  );
};
