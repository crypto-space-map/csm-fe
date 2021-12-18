import { ProjectEventCard } from './project-event-card';
import { EventsContainerHeader, EventsContainerOverflow, StyledEventsContainer } from './styled';

export const ProjectEventsBlock = () => (
  <StyledEventsContainer>
    <EventsContainerHeader>Favorite Projects Events</EventsContainerHeader>
    <EventsContainerOverflow>
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
    </EventsContainerOverflow>
  </StyledEventsContainer>
);
