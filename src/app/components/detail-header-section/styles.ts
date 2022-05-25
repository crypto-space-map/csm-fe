import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const HeaderSectionWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CompanyName = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin: 0 14px;
  flex-shrink: inherit;
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: max-content;
  height: 16px;
`;
