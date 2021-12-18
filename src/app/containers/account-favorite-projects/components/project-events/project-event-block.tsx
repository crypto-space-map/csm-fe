import { ProjectEventCard } from './project-event-card';
import { EventsContainerHeader, StyledEventsContainer } from './styled';

export const ProjectEventsBlock = () => (
  <StyledEventsContainer>
    <EventsContainerHeader>Favorite Projects Events</EventsContainerHeader>
    <ProjectEventCard />
    <ProjectEventCard />
    <ProjectEventCard />
  </StyledEventsContainer>
);
