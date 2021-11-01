import { memo, useState } from 'react';

import { CustomTabs } from 'app/components';

import { Community } from '../community';
import { Exchanges } from '../exchanges';
import { Funds } from '../funds';
import { Partners } from '../partners';
import { TabContentWrapper, TabContent } from './styles';

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
  // @ts-ignore
  value: detailInfoTabs[item],
}));

export const TabsSection = memo(() => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.community);

  return (
    <>
      <CustomTabs value={activeTab} options={options} onChangeTabValue={setActiveTab} />
      <TabContentWrapper>
        <TabContent>
          {activeTab === detailInfoTabs.funds && <Funds />}
          {activeTab === detailInfoTabs.partners && <Partners />}
          {activeTab === detailInfoTabs.exchanges && <Exchanges />}
          {activeTab === detailInfoTabs.community && <Community />}
        </TabContent>
      </TabContentWrapper>
    </>
  );
});
