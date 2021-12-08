import { forwardRef } from 'react';

import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

const { ERROR_COLOR, MAIN_WHITE } = COLOR_PALLETTE;

export type InputProps = TextFieldProps & {
  errorMessage?: string;
};

type LabelProps = {
  error?: boolean;
};

const isError = (error?: boolean) => (error ? ERROR_COLOR : '#828282');

const StyledInput = styled(TextField)`
  background-color: ${({ disabled }) => (disabled ? '#BDBDBD' : MAIN_WHITE)};
  color: #4f4f4f;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid ${({ error }) => isError(error)};
`;

const InputContainer = styled.div`
  display: grid;
  grid-gap: 2px 0;
`;

const Label = styled.span<LabelProps>`
  color: ${({ error }) => isError(error)};
  font-size: 14px;
  line-height: 16px;
  min-height: 16px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, label, errorMessage } = props;
  return (
    <InputContainer>
      <Label error={error}>{label}</Label>
      <StyledInput
        {...props}
        ref={ref}
        variant="standard"
        label=""
        InputProps={{ ...props.InputProps, disableUnderline: true }}
        InputLabelProps={{ ...props.InputLabelProps, shrink: false }}
      />
      {error && errorMessage && <Label error={error}>{errorMessage}</Label>}
    </InputContainer>
  );
});
