import styled from '@emotion/styled';
import { Tab as MuiTab, TabProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder } from 'global/styles';

const StyledTab = styled(MuiTab)`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  &.Mui-selected {
    color: ${COLOR_PALLETTE.MAIN_WHITE};
    ${gradientBorder({ border: '0 0 4px 0' })};
  }
`;

export const Tab = (props: TabProps) => <StyledTab {...props}>{props.children}</StyledTab>;
