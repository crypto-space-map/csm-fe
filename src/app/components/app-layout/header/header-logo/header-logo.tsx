import { HtmlHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Logo from '../../../../../assets/images/csm-logo.svg';

const CSMLogoContainer = styled(Link)`
  cursor: pointer;
  justify-content: start;
  z-index: 20;
`;

export const MainLogo = (props: HtmlHTMLAttributes<HTMLAnchorElement>) => (
  <CSMLogoContainer {...props} to="/">
    <Logo />
  </CSMLogoContainer>
);
