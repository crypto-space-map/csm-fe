import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const text = () => css`
  font-weight: normal;
  font-size: 16px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledText = styled.span`
  ${text}
`;
