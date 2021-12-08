import { useState } from 'react';

import { LoginPageLink } from '../styled';
import { UserForms } from '../types';
import { SignForm } from './sign';
import { FormsBlock, StyledFormContainer, StyledFormHeader } from './styled';

export const FormContainer = () => {
  const [selectedForm, setSelectedForm] = useState(UserForms.LOGIN);

  const isRegisterForm = UserForms.REGISTER === selectedForm;

  const helperText = isRegisterForm ? `Don't` : 'Already';
  const sign = isRegisterForm ? 'Sign In' : 'Sign Up';
  const linkText = isRegisterForm ? 'Sign Up' : 'Sign In';

  const handleClick = () => setSelectedForm(selectedForm === 1 ? UserForms.LOGIN : UserForms.REGISTER);

  return (
    <FormsBlock>
      <StyledFormContainer>
        <StyledFormHeader>{sign}</StyledFormHeader>
        <SignForm signIn={isRegisterForm} />
      </StyledFormContainer>
      <span>
        {helperText} have an account? <LoginPageLink onClick={handleClick}>{linkText}</LoginPageLink>
      </span>
    </FormsBlock>
  );
};
