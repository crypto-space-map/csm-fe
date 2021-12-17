import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Button } from 'common/components/button';
import { Input } from 'common/components/input';
import { EMAIL_REG_EXP } from 'utils/reg-exp';

import { useLoginPageSlice } from '../../hooks';
import { ChangePasswordNotify, StyledForm } from './styled';

type ForgotPassFormProps = {
  onBack: () => void;
};

const defaultValues = {
  email: '',
};

export const ForgotPassForm = ({ onBack }: ForgotPassFormProps) => {
  const { recoverMsg } = useLoginPageSlice();

  const [userMail, setUserMail] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'all',
    criteriaMode: 'all',
  });

  const notifyText = `We’ve sent an EMail to ${userMail}. To change password click the link in the EMail`;

  const btnText = !userMail ? 'Change Password' : 'Back to Sing in';

  const onSubmit = ({ email }: typeof defaultValues) => {
    setUserMail(email);
    if (userMail) return onBack();
    return recoverMsg({ email });
  };

  const isError = touchedFields.email && errors.email?.type;

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {!!userMail ? (
        <ChangePasswordNotify>{notifyText}</ChangePasswordNotify>
      ) : (
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: EMAIL_REG_EXP,
          }}
          render={({ field }) => (
            <Input {...field} label="email" type="email" error={!!isError} errorMessage="No such Email" />
          )}
        />
      )}
      <Button type="submit" size="large">
        {btnText}
      </Button>
    </StyledForm>
  );
};
