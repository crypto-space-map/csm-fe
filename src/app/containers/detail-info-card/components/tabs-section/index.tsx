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

export const TabsSection = memo(() => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.overview);

  return (
    <TabSectionWrapper>
      <CustomTabs value={activeTab} options={options} onChangeTabValue={setActiveTab} />
      <TabContentWrapper>
        <TabContent>
          {activeTab === detailInfoTabs.overview && <Overview />}
          {activeTab === detailInfoTabs.funds && <Funds />}
          {activeTab === detailInfoTabs.partners && <Partners />}
          {activeTab === detailInfoTabs.exchanges && <Exchanges />}
          {activeTab === detailInfoTabs.community && <Community />}
          {activeTab === detailInfoTabs.social && <Social />}
          {activeTab === detailInfoTabs.events && <Events />}
        </TabContent>
      </TabContentWrapper>
    </TabSectionWrapper>
  );
});
