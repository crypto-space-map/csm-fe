import styled from '@emotion/styled';
import { FormControlLabel, Radio as MuiRadio, RadioProps } from '@mui/material';
import { gradientText } from 'global/styles';

import RadioIconChecked from './icons/radio-checked.svg';
import RadioIcon from './icons/radio.svg';

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
