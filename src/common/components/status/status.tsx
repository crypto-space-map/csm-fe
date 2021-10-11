import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { gradientBorder } from 'global/styles';

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
        background-size: 100%;
        background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
      `;
  }
};

const StyledStatus = styled.div<StatusProps>`
  position: relative;
  color: #1d1c1c;
  border-radius: 20px;
  padding: 4px 8px;
  text-align: center;
  ${({ variant }) => getStatusVariant(variant)}
`;

export const Status = (props: StatusProps) => <StyledStatus {...props}>{props.text}</StyledStatus>;

Status.defaultProps = {
  variant: 'contained',
  size: 'm',
};
