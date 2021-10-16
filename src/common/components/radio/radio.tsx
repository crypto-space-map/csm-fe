import React from 'react';

import styled from '@emotion/styled';
import { FormControlLabel, Radio as MuiRadio, RadioProps } from '@mui/material';
import { gradientText } from 'global/styles';

import { RadioIcon, RadioIconChecked } from './icons';

const StyledFCL = styled(FormControlLabel)`
  ${gradientText}
`;

type FCLRadio = RadioProps & { label: string };

export const Radio = (props: FCLRadio) => (
  <StyledFCL
    control={<MuiRadio checkedIcon={<RadioIconChecked />} icon={<RadioIcon />} {...props} />}
    label={props.label}
  />
);
