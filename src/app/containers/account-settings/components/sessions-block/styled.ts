import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledSessionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px;
  background: ${COLOR_PALLETTE.MAIN_BLACK};
  border-radius: 8px;
  max-width: 230px;
`;

export const SessionRow = styled.span<{ current?: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${({ current }) => (current ? COLOR_PALLETTE.MAIN_WHITE : COLOR_PALLETTE.MAIN_GRAY)};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
