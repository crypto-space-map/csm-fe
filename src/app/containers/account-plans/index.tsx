import { memo } from 'react';

import { ContentSection, AccountSelectedMenuHeader } from 'app/components/account';

import { useAccount } from '../account/hooks';
import { PlansContainer } from './components/plans-container';

export const AccountPlans = memo(() => {
  const { selectedTab } = useAccount();
  return (
    <ContentSection fullWidth>
      <AccountSelectedMenuHeader>{selectedTab}</AccountSelectedMenuHeader>
      <PlansContainer />
    </ContentSection>
  );
});
