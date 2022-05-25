import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const CompanyTiker = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const RankWrapper = styled.div`
  display: flex;
  margin-left: 26px;
  align-items: center;
`;

export const RankText = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin-left: 6px;
`;

export const ButtonsControl = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  grid-gap: 20px;
`;
