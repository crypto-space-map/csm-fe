import React from 'react';

import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

type InputProps = TextFieldProps;

const StyledInput = styled(TextField)`
  background-color: ${({ disabled }) => (disabled ? '#BDBDBD' : '#ffffff')};
  color: #4f4f4f;
  border-radius: 4px;
  padding: 4px 8px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-gap: 2px 0;
`;

const Label = styled.span`
  color: #828282;
  font-size: 14px;
  line-height: 16px;
`;

export const Input = (props: InputProps) => (
  <InputContainer>
    <Label>{props.label}</Label>
    <StyledInput
      {...props}
      variant="standard"
      label=""
      InputProps={{ ...props.InputProps, disableUnderline: true }}
      InputLabelProps={{ ...props.InputLabelProps, shrink: false }}
    />
  </InputContainer>
);
