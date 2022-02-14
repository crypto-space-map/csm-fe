import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

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

export const AdditionalValue = styled.span`
  ${secondFontOptions}
`;
export const MainValue = styled.span`
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

export const ProjectChangeWrapper = styled.div`
  width: max-content;
  & .project-change-header {
    ${secondFontOptions}
    text-align: start;
  }
  & .project-change-traiding-info {
    margin: 8px 0 4px 0;
  }
`;

export const StyledLink = styled.a`
  ${link(COLOR_PALLETTE.MAIN_WHITE, COLOR_PALLETTE.MAIN_WHITE)}
  width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export const StyledLinkWrapper = styled.div`
  ${secondFontOptions}
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  margin-top: 8px;
`;
