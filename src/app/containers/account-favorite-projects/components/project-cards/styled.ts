import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledProjectCard = styled.div<{ color?: 'black' | 'white' }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 14px 14px 16px;
  border-radius: 8px;
  background-color: ${({ color = 'white' }) => color};
`;

export const StyledProjectCardContainer = styled.div`
  display: grid;
  gap: 6px 0;
  padding: 32px 0;
`;

export const ProjectCardSection = styled.section<{ flow?: 'column' | 'row' }>`
  display: grid;
  grid-auto-flow: ${({ flow = 'column' }) => flow};
  gap: 6px 18px;
`;

export const ProjectCardHeader = styled.span`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
  & > span {
    color: ${COLOR_PALLETTE.MAIN_GRAY};
  }
`;

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: inherit;
`;
