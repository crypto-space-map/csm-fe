import React from 'react';

import styled from '@emotion/styled';
import { IconButton, IconButtonProps } from '@mui/material';

import BellIcon from 'assets/icons/bell.svg';

import { UserButtonAvatar } from './user-avatar';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  justify-content: end;
`;

const Notifications = (props: IconButtonProps) => (
  <IconButton {...props}>
    <BellIcon />
  </IconButton>
);

export const HeaderUserBlock = () => (
  <Wrapper>
    <Notifications />
    <UserButtonAvatar
      src="https://i.pinimg.com/736x/e2/2a/da/e22ada859cdcfde86fa199dd0f2404e5.jpg"
      alt="shrek"
      size="small"
    />
  </Wrapper>
);
