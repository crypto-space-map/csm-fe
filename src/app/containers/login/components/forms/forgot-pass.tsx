import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Button } from 'common/components/button';
import { Input } from 'common/components/input';

import { ChangePasswordNotify, StyledForm } from './styled';

type ForgotPassFormProps = {
  onBack: () => void;
};

const defaultValues = {
  email: '',
};

export const ForgotPassForm = ({ onBack }: ForgotPassFormProps) => {
  const [userMail, setUserMail] = useState('');
  const { control, handleSubmit } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'all',
    criteriaMode: 'all',
  });

  const notifyText = `We’ve sent an EMail to ${userMail}. To change password click the link in the EMail`;

  const btnText = !userMail ? 'Change Password' : 'Back to Sing in';

  const onSubmit = (val: typeof defaultValues) => {
    setUserMail(val.email);
    if (userMail) return onBack();
    return console.log(val);
  };

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
          }}
          render={({ field }) => <Input {...field} label="email" type="email" />}
        />
      )}
      <Button type="submit" size="large">
        {btnText}
      </Button>
    </StyledForm>
  );
};
