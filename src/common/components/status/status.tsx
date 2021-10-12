import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { gradientBackground, gradientBorder } from 'global/styles';

type StatusProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  size?: 's' | 'm' | 'l';
  variant?: 'text' | 'outlined' | 'contained';
  text: string;
};

const getStatusVariant = (variant: StatusProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        background: #ffffff;
        ${gradientBorder({ borderRadius: 20 })}
      `;
    case 'text':
      return css`
        background: none;
        color: #ffffff;
      `;
    case 'contained':
    default:
      return css`
        ${gradientBackground}
      `;
  }
};

const getStatusSize = (size: StatusProps['size']) => {
  switch (size) {
    default:
    case 'm':
      return css`
        padding: 4px 8px;
        font-size: 12px;
      `;
    case 'l':
      return css`
        padding: 8px 16px;
        font-size: 16px;
        line-height: 22px;
      `;
  }
};

const StyledStatus = styled.div<StatusProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1c1c;
  border-radius: 20px;
  text-align: center;
  ${({ variant }) => getStatusVariant(variant)}
  ${({ size }) => getStatusSize(size)}
`;

export const Status = (props: StatusProps) => <StyledStatus {...props}>{props.text}</StyledStatus>;

Status.defaultProps = {
  variant: 'contained',
  size: 'm',
};
