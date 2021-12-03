import styled from '@emotion/styled';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps, FormControlLabel } from '@mui/material';
import { gradientText } from 'global/styles';

import CheckBoxCheckedIcon from './icons/checkbox-checked.svg';
import CheckBoxIcon from './icons/checkbox.svg';

const StyledFCL = styled(FormControlLabel)`
  ${gradientText}
`;

export type CheckboxProps = MuiCheckboxProps & { label: string };

export const CheckBox = (props: CheckboxProps) => (
  <StyledFCL
    label={props.label}
    control={<MuiCheckbox {...props} icon={<CheckBoxIcon />} checkedIcon={<CheckBoxCheckedIcon />} />}
  />
);
