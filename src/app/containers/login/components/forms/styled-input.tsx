import { forwardRef, ReactNode } from 'react';

import { Input, InputProps } from 'common/components/input';

import { InputActionHelper, SignFormInputContainer } from './styled';

type Props = InputProps & {
  labelHelper?: ReactNode;
};

export const SignFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <SignFormInputContainer>
    <InputActionHelper>{props.labelHelper || null}</InputActionHelper>
    <Input {...props} ref={ref} />
  </SignFormInputContainer>
));
