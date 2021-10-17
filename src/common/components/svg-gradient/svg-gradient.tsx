import React from 'react';

import styled from '@emotion/styled';

const Svg = styled.svg`
  position: fixed;
  z-index: -1;
  width: 0;
  height: 0;
  fill: none;
`;

/**
 * Use csm_icon_gradient id to add ico fill like (  fill: url(#csm_icon_gradient)   )
 */
export const SvgGradient = () => (
  <Svg viewBox="0 0 0 0">
    <defs>
      <linearGradient
        id="csm_icon_gradient"
        x1="18"
        y1="8.01351e-07"
        x2="-2.75068"
        y2="13.891"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#A8F8A0" />
        <stop offset="1" stopColor="#83D9F5" />
      </linearGradient>
    </defs>
  </Svg>
);
