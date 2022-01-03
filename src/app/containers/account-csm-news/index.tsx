import { memo } from 'react';

import { ContentSection, AccountSelectedMenuHeader } from 'app/components/account';

import { useAccount } from '../account/hooks';
import { AccountNewsContainer } from './components/news-container';

export const AccountCsmNews = memo(() => {
  const { selectedTab } = useAccount();
  return (
    <ContentSection fullWidth>
      <AccountSelectedMenuHeader>{selectedTab}</AccountSelectedMenuHeader>
      <AccountNewsContainer />
    </ContentSection>
  );
});
