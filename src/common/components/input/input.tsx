import { forwardRef } from 'react';

import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

const { ERROR_COLOR, MAIN_WHITE } = COLOR_PALLETTE;

export type InputProps = TextFieldProps & {
  errorMessage?: string;
  withLabel?: boolean;
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
  /** Hide arrows at number input */
  & ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputContainer = styled.div<InputProps>`
  display: grid;
  grid-gap: 2px 0;
  width: ${({ fullWidth }) => fullWidth && '100%'};
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
  const { error, label, errorMessage, withLabel = true } = props;
  return (
    <InputContainer fullWidth={props.fullWidth}>
      {withLabel && <Label error={error}>{label}</Label>}
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
