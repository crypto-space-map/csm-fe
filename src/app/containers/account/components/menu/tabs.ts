import { GearIcon, LightningIcon, LikeIcon, ListIcon, RefferalIcon } from 'assets';

import { MenuItems } from '../../types';

export const menuTabs = [
  { label: MenuItems.FAVORITE_PROJECTS, icon: LikeIcon },
  { label: MenuItems.MY_REFFERALS, icon: RefferalIcon },
  { label: MenuItems.PLANS, icon: LightningIcon },
  { label: MenuItems.PROFILE_SETTINGS, icon: GearIcon },
  { label: MenuItems.CSM_NEWS, icon: ListIcon },
];
