import { memo, useState, useMemo, useEffect, useCallback } from 'react';

import { DetailTabSection, TabContent } from 'app/components';
import { infiniteScrollTarget } from 'app/components/grid/utils';
import {
  setSessionStorageItem,
  getSessionStorageItem,
  ItemNames,
  clearSessionStorageItems,
} from 'utils/session-storage';

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
  const selectedTabFromSS = getSessionStorageItem(ItemNames.SELECTED_TAB);
  const [activeTab, setActiveTab] = useState(selectedTabFromSS || detailInfoTabs.overview);

  const changeActiveTab = useCallback((value: string) => {
    setActiveTab(value);
    setSessionStorageItem(ItemNames.SELECTED_TAB, value);
  }, []);

  const options = useMemo(
    () => ({
      activeTab,
      options: tabOptions,
      targetId: infiniteScrollTarget,
      setActiveTab: changeActiveTab,
    }),
    [activeTab, changeActiveTab]
  );

  useEffect(() => {
    if (!isShow) {
      changeActiveTab(detailInfoTabs.overview);
    }
    return () => {
      clearSessionStorageItems([ItemNames.SELECTED_TAB]);
    };
  }, [isShow, changeActiveTab]);

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
