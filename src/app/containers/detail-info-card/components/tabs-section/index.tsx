import { memo, useState } from 'react';

import { CustomTabs } from 'app/components';
import { infiniteScrollTarget } from 'app/components/grid/utils';

import { Community, Events, Exchanges, Funds, Overview, Partners, Social } from '..';
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
      <TabContentWrapper id={infiniteScrollTarget}>
        <TabContent>{selectComponentByTabValue(activeTab)}</TabContent>
      </TabContentWrapper>
    </TabSectionWrapper>
  );
});
