import { useState } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { OutlinedArrow } from 'assets/icons';
import { IconButton } from 'common/components/button';
import { SVGWrapper } from 'common/components/svg-wrapper';

import { LoginPageLink } from '../styled';
import { UserForms } from '../types';
import { ForgotPassForm } from './forgot-pass';
import { SignForm } from './sign';
import { FormsBlock, StyledFormContainer, StyledFormHeader } from './styled';

export const FormContainer = () => {
  const [selectedForm, setSelectedForm] = useState(UserForms.LOGIN);

  const isRegisterForm = UserForms.REGISTER === selectedForm;
  const isForgotPassForm = UserForms.FORGOT_PASS === selectedForm;

  const helperText = isRegisterForm ? 'Already' : `Don't`;
  const sign = isRegisterForm ? 'Sign Up' : 'Sign In';
  const linkText = isRegisterForm ? 'Sign In' : 'Sign Up';

  const headerText = isForgotPassForm ? 'Change Password' : sign;

  const backForm = isForgotPassForm ? UserForms.LOGIN : UserForms.REGISTER;

  const handleClick = () => setSelectedForm(isRegisterForm ? UserForms.LOGIN : backForm);

  const handleClickForgotPass = () => setSelectedForm(UserForms.FORGOT_PASS);

  return (
    <FormsBlock>
      <StyledFormContainer>
        {isForgotPassForm && (
          <IconButton variant="text" onClick={handleClick}>
            <SVGWrapper fill={COLOR_PALLETTE.MAIN_GRAY}>
              <OutlinedArrow />
            </SVGWrapper>
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
