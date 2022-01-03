import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledRefferalsBlock = styled.div`
  display: grid;
  gap: 6px;
  padding: 32px 0;
  max-width: 740px;
`;

// Refferal Card

export const StyledRefferalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const UserDataContainer = styled.div`
  display: grid;
  align-items: start;
  gap: 12px;
  grid-auto-flow: column;
  width: fit-content;
`;

export const RefferalDate = styled.div`
  display: grid;
  align-items: start;
  justify-content: end;
  gap: 4px;
  width: fit-content;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: end;
  & > span {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid ${COLOR_PALLETTE.MAIN_GREEN};
  color: ${COLOR_PALLETTE.ERROR_COLOR};
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;
