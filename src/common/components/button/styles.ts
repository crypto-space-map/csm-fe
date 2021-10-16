import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from '@mui/material';
import { gradientBackground, gradientBorder, gradientText } from 'global/styles';

export const StyledChildren = styled.span`
  grid-area: 1/1/2/2;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1em;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const notContainedButtonsActions = css`
  & ${StyledChildren} {
    ${gradientText}
  }
  &:hover {
    border: none;
    background-color: #383838;
    & ${StyledChildren} {
      ${gradientText}
    }
  }
  &:active {
    border: none;
    background-color: #1d1c1c;
    & ${StyledChildren} {
      ${gradientText}
    }
  }
`;

export const getButtonVariant = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        ${gradientBorder({ borderRadius: 4 })}
        ${notContainedButtonsActions}
      `;
    case 'text':
      return css`
        background-color: none;
        border: none;
        ${notContainedButtonsActions}
      `;
    case 'contained':
    default:
      return css`
        ${gradientBackground}
        color: #333;
        transition: --mainGreen 0.2s, --mainBlue 0.2s; //transition for gradient
        &:active {
          --mainGreen: #41aacc;
          --mainBlue: #41aacc;
        }

        &:hover {
          --mainGreen: #83d9f5;
        }
      `;
  }
};
