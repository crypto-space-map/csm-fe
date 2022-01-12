import { memo } from 'react';

import { TabContentWrapper, TabSectionWrapper } from './styles';
import { CustomTabs } from './tabs';
import { DetailTabSectionProps } from './types';

export const DetailTabSection = memo(
  ({ children, detailTabProps: { activeTab, options, targetId, setActiveTab } }: DetailTabSectionProps) => (
    <TabSectionWrapper>
      <CustomTabs value={activeTab} options={options} onChangeTabValue={setActiveTab} />
      <TabContentWrapper id={targetId}>{children}</TabContentWrapper>
    </TabSectionWrapper>
  )
);
