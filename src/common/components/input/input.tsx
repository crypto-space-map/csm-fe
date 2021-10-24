import React from 'react';

import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

export type InputProps = TextFieldProps & {
  errorMessage?: string;
};

type LabelProps = {
  error?: boolean;
};

const isError = (error?: boolean) => (error ? '#FF8484' : '#828282');

const StyledInput = styled(TextField)`
  background-color: ${({ disabled }) => (disabled ? '#BDBDBD' : '#ffffff')};
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
`;

export const Input = (props: InputProps) => (
  <InputContainer>
    <Label error={props.error}>{props.label}</Label>
    <StyledInput
      {...props}
      variant="standard"
      label=""
      InputProps={{ ...props.InputProps, disableUnderline: true }}
      InputLabelProps={{ ...props.InputLabelProps, shrink: false }}
    />
    {props.error && props.errorMessage && <Label error={props.error}>{props.errorMessage}</Label>}
  </InputContainer>
);

Input.defaultProps = {
  errorMessage: null,
};
