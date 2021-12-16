import { COLOR_PALLETTE } from 'global/pallette';

import { Counter } from 'common/components/counter';
import { MenuItem } from 'common/components/menu-item';
import { SVGWrapper } from 'common/components/svg-wrapper';

import { useAccount } from '../../hooks';
import { MenuWrapper } from './styled';
import { menuTabs } from './tabs';

export const AccountMenu = () => {
  const { selectedTab, onSetTab } = useAccount();
  return (
    <MenuWrapper>
      {menuTabs.map(({ label, icon: Ico }) => (
        <MenuItem key={label} value={label} onClick={onSetTab} selected={label === selectedTab}>
          <SVGWrapper fill={COLOR_PALLETTE.MAIN_GRAY}>
            <Ico />
          </SVGWrapper>
          {label}
          <Counter>1</Counter>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};
