import styled from '@emotion/styled';
import { Tabs as MuiTabs, TabsProps } from '@mui/material';
import { gradientBorder } from 'global/styles';

const Indicator = styled.span`
  ${gradientBorder({ border: '0 0 4px 0' })}
`;

const StyledMuiTabs = styled(MuiTabs)`
  & .MuiTabs-flexContainer {
    gap: 24px;
  }
`;

export const Tabs = (props: TabsProps) => (
  <StyledMuiTabs TabIndicatorProps={{ children: <Indicator /> }} {...props}>
    {props.children}
  </StyledMuiTabs>
);
