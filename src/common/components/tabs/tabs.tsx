import React from 'react';

import styled from '@emotion/styled';
import { Tabs as MuiTabs, TabsProps } from '@mui/material';
import { gradientBorder } from 'global/styles';

const Indicator = styled.span`
  ${gradientBorder({ border: '0 0 4px 0' })}
`;

export const Tabs = (props: TabsProps) => (
  <MuiTabs TabIndicatorProps={{ children: <Indicator /> }} {...props}>
    {props.children}
  </MuiTabs>
);
