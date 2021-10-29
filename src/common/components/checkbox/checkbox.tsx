import styled from '@emotion/styled';
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { gradientText } from 'global/styles';

import CheckBoxCheckedIcon from './icons/checkbox-checked.svg';
import CheckBoxIcon from './icons/checkbox.svg';

const StyledFCL = styled(FormControlLabel)`
  ${gradientText}
`;

type FCLCheckbox = CheckboxProps & { label: string };

export const CheckBox = (props: FCLCheckbox) => (
  <StyledFCL
    label={props.label}
    control={<MuiCheckbox {...props} icon={<CheckBoxIcon />} checkedIcon={<CheckBoxCheckedIcon />} />}
  />
);
