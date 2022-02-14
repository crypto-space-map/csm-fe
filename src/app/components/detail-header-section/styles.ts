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

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: inherit;
`;

export const CompanyName = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin: 0 14px;
  flex-shrink: inherit;
`;

export const CompanyTiker = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const RankWrapper = styled.div`
  display: flex;
  margin-left: 26px;
`;

export const RankText = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin-left: 6px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-right: 38px;
  & > svg:first-of-type {
    margin-right: 20px;
  }
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 23px;
  right: 23px;
  cursor: pointer;
`;

export const StyledRoundedButton = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

export const StyledDefaultLogo = styled.div`
  width: 40px;
  height: 40px;
`;
