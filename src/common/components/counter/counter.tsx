import React from 'react';

import styled from '@emotion/styled';
import { gradientBackground } from 'global/styles';

export type CounterProps = React.HtmlHTMLAttributes<HTMLSpanElement> & { children: React.ReactNode };

const StyledCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 14px;
  color: #1d1c1c;
  width: fit-content;
  border-radius: 20px;
  -webkit-text-fill-color: #1d1c1c;
  ${gradientBackground}
`;

export const Counter = ({ children, ...rest }: CounterProps) => (
  <StyledCounter {...rest}>{children}</StyledCounter>
);
