export enum MenuItems {
  FAVORITE_PROJECTS = 'Favorite Projects',
  MY_REFFERALS = 'My Refferals',
  PLANS = 'Plans',
  PROFILE_SETTINGS = 'Profile & Notification Settings',
  CSM_NEWS = 'CSM News & Development',
}

export interface AccountPageStateDTO {
  selectedTab: MenuItems;
}
