import { memo } from 'react';

import { AccountTabHeader } from '../account/components/action-block/styled';
import { useAccount } from '../account/hooks';
import { ProjectsCardContainer } from './components/project-cards/project-cards-container';
import { ProjectsTabs } from './components/projects-tabs';
import { ContentSection, SideDataSection, StyledFavoriteProject } from './styled';

export const FavoriteProjects = memo(() => {
  const { selectedTab } = useAccount();
  return (
    <StyledFavoriteProject>
      <ContentSection>
        <AccountTabHeader>{selectedTab}</AccountTabHeader>
        <ProjectsTabs />
        <ProjectsCardContainer />
      </ContentSection>
      <SideDataSection>
        <div style={{ height: '100%' }}>123</div>
      </SideDataSection>
    </StyledFavoriteProject>
  );
});
