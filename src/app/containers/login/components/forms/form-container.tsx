import { useState } from 'react';

import { OutlinedArrow } from 'assets/icons';
import { IconButton } from 'common/components/button';

import { LoginPageLink } from '../styled';
import { UserForms } from '../types';
import { ForgotPassForm } from './forgot-pass';
import { SignForm } from './sign';
import { FormsBlock, StyledFormContainer, StyledFormHeader } from './styled';

export const FormContainer = () => {
  const [selectedForm, setSelectedForm] = useState(UserForms.REGISTER);

  const isRegisterForm = UserForms.REGISTER === selectedForm;
  const isForgotPassForm = UserForms.FORGOT_PASS === selectedForm;

  const helperText = isRegisterForm ? 'Already' : `Don't`;
  const sign = isRegisterForm ? 'Sign Up' : 'Sign In';
  const linkText = isRegisterForm ? 'Sign In' : 'Sign Up';

  const headerText = isForgotPassForm ? 'Change Password' : sign;

  const handleClick = () => setSelectedForm(isRegisterForm ? UserForms.LOGIN : UserForms.REGISTER);

  const handleClickForgotPass = () => setSelectedForm(UserForms.FORGOT_PASS);

  return (
    <FormsBlock>
      <StyledFormContainer>
        {isForgotPassForm && (
          <IconButton variant="text" onClick={handleClick}>
            <OutlinedArrow />
          </IconButton>
        )}
        <StyledFormHeader>{headerText}</StyledFormHeader>
        {isForgotPassForm ? (
          <ForgotPassForm onBack={handleClick} />
        ) : (
          <SignForm signIn={!isRegisterForm} handleClickForgotPass={handleClickForgotPass} />
        )}
      </StyledFormContainer>
      <span>
        {helperText} have an account? <LoginPageLink onClick={handleClick}>{linkText}</LoginPageLink>
      </span>
    </FormsBlock>
  );
};
