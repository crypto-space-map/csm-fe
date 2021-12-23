import { memo, useState, useMemo } from 'react';

import { DetailTabSection, TabContent } from 'app/components';
import { infiniteScrollTarget } from 'app/components/grid/utils';

import { Investments } from '..';

const detailInfoTabs = {
  investments: 'investments',
};

const tabOptions = Object.keys(detailInfoTabs).map(item => ({
  label: item,
  value: detailInfoTabs[item as keyof typeof detailInfoTabs],
}));

export const TabsSection = memo(() => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.investments);

  const options = useMemo(
    () => ({
      activeTab,
      options: tabOptions,
      targetId: infiniteScrollTarget,
      setActiveTab,
    }),
    [activeTab]
  );

  return (
    <DetailTabSection detailTabProps={options}>
      <TabContent show={activeTab === detailInfoTabs.investments}>
        <Investments />
      </TabContent>
    </DetailTabSection>
  );
});
