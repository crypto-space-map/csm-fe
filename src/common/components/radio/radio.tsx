import React from 'react';

import styled from '@emotion/styled';
import { FormControlLabel, Radio as MuiRadio, FormControlLabelProps } from '@mui/material';
import { gradientText } from 'global/styles';

const StyledRadio = styled(MuiRadio)`
  ${gradientText}
`;
// TODO необходимо понять нужен ли он (в макетах нет)
export const Radio = ({ ...props }: Omit<FormControlLabelProps, 'control'>) => (
  <FormControlLabel control={<StyledRadio />} {...props} />
);
