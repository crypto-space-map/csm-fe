import { useEffect, useState } from 'react';

import { IconButton } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import EyeCrossed from 'assets/icons/eye-cross-out.svg';
import Eye from 'assets/icons/eye.svg';
import { Button } from 'common/components';
import { EMAIL_REG_EXP, PASS_REG_EXP } from 'utils/reg-exp';

import { useLogin } from '../../hooks';
import { PrivacyBlock } from '../privacy-block/privacy-block';
import { LoginPageLink } from '../styled';
import { SignFormProps } from '../types';
import { PasswordHelperRow, RowsContainer, StyledForm } from './styled';
import { SignFormInput } from './styled-input';

const helperRows = [
  { text: '8 characters minimum', key: 'minLength' },
  { text: 'Minimum one letter uppercase', key: 'uppercase' },
  { text: 'Numbers', key: 'numbers' },
  { text: 'Special Symbols', key: 'specialSymbols' },
];

const defaultValues = {
  email: '',
  password: '',
};

const isPassword = (fieldType: string) => fieldType === 'password';

export const SignForm = ({ signIn = false, handleClickForgotPass }: SignFormProps) => {
  const btnText = signIn ? 'Sign In' : 'Sign Up';

  const {
    registerUser,
    fetchUser,
    isAuthError,
    actions: { loading },
  } = useLogin();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleShowPass = () => setIsVisible(!isVisible);
  const onSubmit = (data: typeof defaultValues) => (signIn ? fetchUser(data) : registerUser(data));

  const passwordErrors = {
    minLength: watch().password.length < 8,
    uppercase: !/[A-Z]/.test(watch().password),
    numbers: !/[0-9]/.test(watch().password),
    specialSymbols: !/[!@#$%^&*)(=._]/.test(watch().password),
  };

  const signUpRegExp = !signIn ? PASS_REG_EXP : undefined;

  const forgotPassLink = (field: string) => field === 'password' && signIn;

  useEffect(() => {
    if (isAuthError) {
      Object.keys(defaultValues).forEach(elem =>
        setError(elem as keyof typeof defaultValues, {
          type: 'pattern',
          message: 'Invalid credentials',
        })
      );
    }
  }, [isAuthError, setError]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(defaultValues).map(item => (
        <Controller
          name={item as keyof typeof defaultValues}
          control={control}
          key={item}
          rules={{
            required: true,
            pattern: isPassword(item) ? signUpRegExp : EMAIL_REG_EXP,
          }}
          render={({ field }) => (
            <SignFormInput
              {...field}
              type={isVisible ? 'text' : item}
              label={item}
              error={!!errors[item as keyof typeof errors]?.type}
              errorMessage="Invalid credentials"
              labelHelper={
                forgotPassLink(item) && (
                  <LoginPageLink fontSize={14} onClick={handleClickForgotPass}>
                    Forgot Password?
                  </LoginPageLink>
                )
              }
              InputProps={{
                endAdornment: isPassword(item) ? (
                  <IconButton onClick={handleShowPass}>{isVisible ? <Eye /> : <EyeCrossed />}</IconButton>
                ) : null,
              }}
            />
          )}
        />
      ))}
      {!signIn && (
        <RowsContainer>
          {helperRows.map(({ text, key }) => (
            <PasswordHelperRow
              key={key}
              error={!!watch().password && passwordErrors[key as keyof typeof passwordErrors]}
              touched={!!watch().password}>
              {text}
            </PasswordHelperRow>
          ))}
        </RowsContainer>
      )}
      <Button type="submit" disabled={loading}>
        {btnText}
      </Button>
      {!signIn && <PrivacyBlock />}
    </StyledForm>
  );
};
