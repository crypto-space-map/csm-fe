import { useState } from 'react';

import { IconButton } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { Button } from 'common/components/button';
import { Input } from 'common/components/input';

import { PasswordHelperRow, RowsContainer, StyledForm } from './styled';

import Eye from 'assets/icons/eye.svg';
import EyeCrossed from 'assets/icons/eye-cross-out.svg';

const PASS_REG_EXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/;
const helperRows = [
  { text: '8 characters minimum', key: 'minLength' },
  { text: 'Letters. Minimum one uppercase', key: 'uppercase' },
  { text: 'Numbers', key: 'numbers' },
  { text: 'Special Symbols', key: 'specialSymbols' },
];

const defaultValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { touchedFields, isValid },
    watch,
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'onChange',
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleShowPass = () => setIsVisible(!isVisible);

  const onSubmit = (data: typeof defaultValues) => console.log({ data });

  const passwordErrors = {
    minLength: watch().password.length < 8,
    uppercase: !PASS_REG_EXP.test(watch().password),
    numbers: !PASS_REG_EXP.test(watch().password),
    specialSymbols: !PASS_REG_EXP.test(watch().password),
  };

  console.log(passwordErrors, isValid);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(defaultValues).map(item => (
        <Controller
          name={item as keyof typeof defaultValues}
          control={control}
          rules={{
            minLength: 8,
            pattern: PASS_REG_EXP,
          }}
          render={({ field }) => (
            <Input
              type={isVisible ? 'text' : item}
              {...field}
              label={item}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPass}>{isVisible ? <Eye /> : <EyeCrossed />}</IconButton>
                ),
              }}
            />
          )}
        />
      ))}
      <RowsContainer>
        {helperRows.map(({ text, key }) => (
          <PasswordHelperRow
            key={key}
            error={touchedFields.password && passwordErrors[key as keyof typeof passwordErrors]}>
            {text}
          </PasswordHelperRow>
        ))}
      </RowsContainer>

      <Button type="submit">Sign up</Button>
    </StyledForm>
  );
};
