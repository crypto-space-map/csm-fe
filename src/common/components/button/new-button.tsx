import { DetailedHTMLProps, ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBackground, gradientText, mainGradient } from 'global/styles';

const hoverGradient = `-webkit-linear-gradient(236.2deg, ${COLOR_PALLETTE.MAIN_BLUE}, ${COLOR_PALLETTE.MAIN_BLUE})`;

export type CommonButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'outlined' | 'contained' | 'text';
  size?: 's' | 'm' | 'l';
  text?: string;
  icon?: ReactNode;
  adornment?: 'start' | 'end';
};

const beforeStyles = css`
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const getSize = (size: CommonButtonProps['size']) => {
  switch (size) {
    case 'l':
      return css`
        padding: 9px 14px;
        font-size: 0.875rem;
        line-height: 1.75;
      `;
    case 'm':
      return css`
        padding: 5px 14px;
        font-size: 0.875rem;
        line-height: 1.75;
      `;
    case 's':
      return css`
        padding: 3px 10px;
        font-size: 0.875rem;
        line-height: 1.75;
      `;
  }
  return '';
};

const getVariant = (variant: CommonButtonProps['variant']) => {
  switch (variant) {
    case 'contained':
      return css`
        position: relative;
        ${gradientBackground};
        &::before {
          ${beforeStyles}
          background-image: ${hoverGradient};
        }
        &:hover {
          &::before {
            opacity: 1;
          }
        }
        &:active {
          background-image: linear-gradient(#41aacc, #41aacc);
          color: ${COLOR_PALLETTE.DARK_GRAY};
        }
      `;
    case 'outlined':
      return css`
        background: -webkit-linear-gradient(#222, #222), ${mainGradient};
        background-origin: padding-box, border-box;
        background-repeat: no-repeat;
        &::before {
          ${beforeStyles}
          background: #383838;
        }
        &::after {
          ${beforeStyles}
          background-image: linear-gradient(#1D1C1C, #1D1C1C);
        }
        &:hover {
          &::before {
            opacity: 1;
          }
        }
        &:active {
          &::after {
            opacity: 1;
          }
        }
      `;
    case 'text':
      return css`
        background-color: inherit;
        &:hover {
          background-color: #383838;
        }
        &:active {
          background-color: #1d1c1c;
        }
      `;
  }
  return '';
};

export const StyledButton = styled.button<CommonButtonProps>`
  position: relative;
  width: fit-content;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1em;
  grid-auto-flow: column;
  ${({ size }) => getSize(size)}
  ${({ variant }) => getVariant(variant)}
  font-weight: 500;
  border-radius: 4px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s linear;
`;

const StyledText = styled.span<CommonButtonProps>`
  position: relative;
  ${({ variant }) => variant !== 'contained' && gradientText}
  z-index: 1;
`;

export const CustomButton = ({ text, icon, adornment, ...rest }: CommonButtonProps) => (
  <StyledButton {...rest}>
    {icon && adornment === 'start' && icon}
    {text && <StyledText {...rest}>{text}</StyledText>}
    {icon && adornment === 'end' && icon}
  </StyledButton>
);

CustomButton.defaultProps = {
  size: 'm',
  variant: 'contained',
  text: '',
  adornment: 'start',
  icon: null,
};
