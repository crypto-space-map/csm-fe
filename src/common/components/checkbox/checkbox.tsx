import React from 'react';

import styled from '@emotion/styled';
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { gradientText } from 'global/styles';

import { CheckBoxCheckedIcon, CheckBoxIcon } from './icons';

const StyledFCL = styled(FormControlLabel)`
  ${gradientText}
`;

const StyledCheckbox = styled(MuiCheckbox)``;

type FCLCheckbox = CheckboxProps & { label: string };

export const CheckBox = (props: FCLCheckbox) => (
  <StyledFCL
    label={props.label}
    control={<StyledCheckbox {...props} icon={<CheckBoxIcon />} checkedIcon={<CheckBoxCheckedIcon />} />}
  />
);
