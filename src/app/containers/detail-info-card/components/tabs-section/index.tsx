import { memo, useState, useMemo, useEffect } from 'react';

import { DetailTabSection, TabContent } from 'app/components';
import { infiniteScrollTarget } from 'app/components/grid/utils';

import { Community, Events, Exchanges, Funds, Overview, Partners, Social } from '..';

const detailInfoTabs = {
  overview: 'overview',
  funds: 'funds',
  partners: 'partners',
  community: 'community',
  exchanges: 'exchanges',
  social: 'social',
  events: 'events',
};

const tabOptions = Object.keys(detailInfoTabs).map(item => ({
  label: item,
  value: detailInfoTabs[item as keyof typeof detailInfoTabs],
}));

const selectComponentByTabValue = (value: string) => {
  switch (value) {
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

export const TabsSection = memo(({ isShow = false }: { isShow: boolean }) => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.community);

  const options = useMemo(
    () => ({
      activeTab,
      options: tabOptions,
      targetId: infiniteScrollTarget,
      setActiveTab,
    }),
    [activeTab]
  );

  useEffect(() => {
    if (!isShow) setActiveTab(detailInfoTabs.overview);
  }, [isShow, setActiveTab]);

  return (
    <DetailTabSection detailTabProps={options}>
      {isShow && (
        <>
          <TabContent show={activeTab === detailInfoTabs.overview}>
            <Overview />
          </TabContent>
          <TabContent show>{selectComponentByTabValue(activeTab)}</TabContent>
        </>
      )}
    </DetailTabSection>
  );
});
