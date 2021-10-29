import React from 'react';

import { MainLogo } from './header-logo';
import { HeaderInput } from './input';
import { StyledHeader } from './styled';
import { HeaderUserBlock } from './user-block';

export const Header = () => (
  <StyledHeader>
    <MainLogo />
    <HeaderInput />
    <HeaderUserBlock />
  </StyledHeader>
);
