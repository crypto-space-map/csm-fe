import { memo } from 'react';

import { ContentSection, AccountSelectedMenuHeader } from 'app/components/account';

import { useAccount } from '../account/hooks';
import { RefferalProgress } from './components/refferal-progress/refferal-progress';
import { Refferals } from './components/refferals/refferals';
import { DataWrapper } from './styled';

export const AccountRefferals = memo(() => {
  const { selectedTab } = useAccount();
  return (
    <ContentSection fullWidth>
      <AccountSelectedMenuHeader>{selectedTab}</AccountSelectedMenuHeader>
      <DataWrapper>
        <Refferals />
        <RefferalProgress />
      </DataWrapper>
    </ContentSection>
  );
});
