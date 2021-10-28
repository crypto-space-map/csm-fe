import React from 'react';

import { MainLogo } from './header-logo';
import { StyledHeader } from './styled';
import { HeaderUserBlock } from './user-block';

export const Header = () => (
  <StyledHeader>
    <MainLogo />
    <HeaderUserBlock />
  </StyledHeader>
);
