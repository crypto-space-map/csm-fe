import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

import { UserBellButtonProps } from './types';

const unreadMessagesStyles = css`
  & > svg {
    transform: rotate(-15deg);
    & > path {
      fill: #ff8484;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  justify-content: end;
  z-index: 30;
  & > * {
    transition: all 0.2 linear;
  }
`;

export const StyledIconButton = styled(IconButton)<UserBellButtonProps>`
  ${({ haveUnreadMessages }) => haveUnreadMessages && unreadMessagesStyles}
`;
