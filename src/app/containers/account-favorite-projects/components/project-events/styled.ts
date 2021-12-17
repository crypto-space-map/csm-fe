import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledEventsContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  padding: 16px 0 0 18px;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  height: 100%;
  border-radius: 16px 0px 0px 0px;
`;

export const EventsContainerHeader = styled.span`
  padding: 24px 0;
  font-size: 20px;
  line-height: 27px;
  font-weight: bold;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

// Card

export const StyledEventCard = styled.div`
  display: grid;
  grid-gap: 13px 0;
  padding: 13px;
`;

export const ProjectIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProjectName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const ProjectSite = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const AboutProjectSection = styled.section`
  display: grid;
  grid-gap: 0 16px;
  & ${ProjectIcon} {
    grid-area: 1/1/3/2;
  }
  & ${ProjectName} {
    grid-area: 1/2/2/2;
  }
  & ${ProjectSite} {
    grid-area: 2/2/3/2;
  }
`;
