import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledProjectCard = styled.div<{ liked?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 14px 14px 16px;
  border-radius: 8px;
  max-width: 740px;
  background-color: ${({ liked = false }) =>
    liked ? COLOR_PALLETTE.MAIN_WHITE : COLOR_PALLETTE.MAIN_BLACK};
  transition: 0.2s linear;
`;

export const StyledProjectCardContainer = styled.div`
  display: grid;
  gap: 6px 0;
  padding: 32px 0;
`;

export const ProjectCardSection = styled.section`
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  gap: 15px;
`;

export const ProjectCardHeader = styled.span<{ liked: boolean }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${({ liked }) => (liked ? COLOR_PALLETTE.MAIN_BLACK : COLOR_PALLETTE.MAIN_WHITE)};
  & > span {
    color: ${COLOR_PALLETTE.MAIN_GRAY};
  }
`;
export const InfoBlock = styled.div`
  display: grid;
  grid-gap: 4px;
`;

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: inherit;
  text-align: end;
  gap: 4px 2px;
`;

export const StyledLikeButton = styled(IconButton)`
  padding: 0;
  height: fit-content;
`;