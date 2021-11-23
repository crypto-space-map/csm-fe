import { memo, useState } from 'react';

import { CustomTabs } from 'app/components';

import { Community } from '../community';
import { Events } from '../events';
import { Exchanges } from '../exchanges';
import { Funds } from '../funds';
import { Overview } from '../overview';
import { Partners } from '../partners';
import { Social } from '../social';
import { TabContentWrapper, TabContent, TabSectionWrapper } from './styles';

const detailInfoTabs = {
  overview: 'overview',
  funds: 'funds',
  partners: 'partners',
  community: 'community',
  exchanges: 'exchanges',
  social: 'social',
  events: 'events',
};

const options = Object.keys(detailInfoTabs).map(item => ({
  label: item,
  value: detailInfoTabs[item as keyof typeof detailInfoTabs],
}));

const selectComponentByTabValue = (value: string) => {
  switch (value) {
    case detailInfoTabs.overview:
      return <Overview />;
    case detailInfoTabs.funds:
      return <Funds />;
    case detailInfoTabs.partners:
      return <Partners />;
    case detailInfoTabs.exchanges:
      return <Exchanges />;
    case detailInfoTabs.community:
      return <Community />;
    case detailInfoTabs.social:
      return <Social />;
    case detailInfoTabs.events:
      return <Events />;
    default:
      return null;
  }
};

export const TabsSection = memo(() => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.overview);

  return (
    <TabSectionWrapper>
      <CustomTabs value={activeTab} options={options} onChangeTabValue={setActiveTab} />
      <TabContentWrapper>
        <TabContent>{selectComponentByTabValue(activeTab)}</TabContent>
      </TabContentWrapper>
    </TabSectionWrapper>
  );
});
