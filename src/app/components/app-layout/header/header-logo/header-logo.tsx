import React from 'react';

import styled from '@emotion/styled';

import Logo from '../../../../../assets/images/csm-logo.svg';

const CSMLogoContainer = styled.div`
  cursor: pointer;
  justify-content: start;
  z-index: 20;
`;

export const MainLogo = (props: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <CSMLogoContainer {...props}>
    <Logo />
  </CSMLogoContainer>
);
