import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const secondFontOptions = css`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const StatisticItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatistiсTitle = styled.span`
  ${secondFontOptions}
`;

export const Increase = styled.span`
  ${secondFontOptions}
`;
export const Rename = styled.span`
  font-size: 20px;
  line-height: 27px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin: 8px 0 4px 0;
`;

export const StatisticsSectionWrapper = styled.div`
  display: grid;
  grid-gap: 36px 0;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  margin-bottom: 36px;
`;
