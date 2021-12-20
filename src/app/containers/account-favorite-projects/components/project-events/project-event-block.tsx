import { ContainerOverflow } from 'app/containers/account/components/action-block/styled';

import { ProjectEventCard } from './project-event-card';
import { EventsContainerHeader, StyledEventsContainer } from './styled';

export const ProjectEventsBlock = () => (
  <StyledEventsContainer>
    <EventsContainerHeader>Favorite Projects Events</EventsContainerHeader>
    <ContainerOverflow>
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
      <ProjectEventCard />
    </ContainerOverflow>
  </StyledEventsContainer>
);
