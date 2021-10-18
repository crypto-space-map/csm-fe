import React from 'react';

import styled from '@emotion/styled';
import { Tab as MuiTab, TabProps } from '@mui/material';
import { gradientBorder } from 'global/styles';

const StyledTab = styled(MuiTab)`
  color: #ffffff;
  &.Mui-selected {
    color: #ffffff;
    ${gradientBorder({ border: '0 0 4px 0' })};
  }
`;

export const Tab = (props: TabProps) => <StyledTab {...props}>{props.children}</StyledTab>;
