import { memo } from 'react';

import { ContentSection, SideDataSection, AccountSelectedMenuHeader } from 'app/components/account';

import { useAccount } from '../account/hooks';
import { ProjectsCardContainer } from './components/project-cards/project-cards-container';
import { ProjectEventsBlock } from './components/project-events';
import { ProjectsTabs } from './components/projects-tabs';

export const FavoriteProjects = memo(() => {
  const { selectedTab } = useAccount();
  return (
    <>
      <ContentSection>
        <AccountSelectedMenuHeader>{selectedTab}</AccountSelectedMenuHeader>
        <ProjectsTabs />
        <ProjectsCardContainer />
      </ContentSection>
      <SideDataSection>
        <ProjectEventsBlock />
      </SideDataSection>
    </>
  );
});
