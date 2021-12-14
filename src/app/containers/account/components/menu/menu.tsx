import { useState } from 'react';

import { Counter } from 'common/components/counter';
import { MenuItem } from 'common/components/menu-item';
import { SVGWrapper } from 'common/components/svg-wrapper';

import { menuTabs } from './tabs';

export const AccountMenu = () => {
  const [selectedTab, setSelectedTab] = useState(menuTabs[3].label);
  const onChange = val => setSelectedTab(val);
  console.log(selectedTab)
  return (
    <div style={{ paddingTop: 100 }}>
      {menuTabs.map(({ label, icon: Ico }) => (
        <MenuItem key={label} onClick={() => onChange(label)} selected={selectedTab === label}>
          <SVGWrapper fill="white">
            <Ico />
          </SVGWrapper>
          {label}
          <Counter>1</Counter>
        </MenuItem>
      ))}
    </div>
  );
};
