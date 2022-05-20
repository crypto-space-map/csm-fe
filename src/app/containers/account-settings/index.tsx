import { memo } from 'react';

import { ContentSection } from 'app/components/account';

import { DataWrapper } from '../account-refferals/styled';
import { ContainerOverflow } from '../account/components/action-block/styled';
import { NotificationSettings } from './components/notification-settings';
import { NotifyVia } from './components/notify';
import { ProfileSettings } from './components/profile-settings';
import { SessionBlock } from './components/sessions-block';
import { SettingsSection } from './styled';

export const AccountSettings = memo(() => (
  <ContentSection fullWidth>
    <ContainerOverflow>
      <DataWrapper>
        <SettingsSection>
          <ProfileSettings />
          <NotificationSettings />
          <NotifyVia />
        </SettingsSection>
        <SessionBlock />
      </DataWrapper>
    </ContainerOverflow>
  </ContentSection>
));
