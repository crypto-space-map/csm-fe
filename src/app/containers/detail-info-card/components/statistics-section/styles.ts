import { css } from '@emotion/react';
import styled from '@emotion/styled';

const secondFontOptions = css`
  font-size: 16px;
  line-height: 22px;
  color: #b2b2b2;
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
  color: #ffffff;
  margin: 8px 0 4px 0;
`;

export const StatisticsSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > div {
    margin-bottom: 36px;
  }
`;
