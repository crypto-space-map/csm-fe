import { Fade } from '@mui/material';

import { StyledContentContainer } from 'app/components/account';
import { AccountCsmNews } from 'app/containers/account-csm-news';
import { FavoriteProjects } from 'app/containers/account-favorite-projects';
import { AccountPlans } from 'app/containers/account-plans';
import { AccountRefferals } from 'app/containers/account-refferals';

import { useAccount } from '../../hooks';
import { MenuItems } from '../../types';
import { SelectedMenuItemWrapper, StyledActionBlock } from './styled';

const switchedTab = (selectedTab: MenuItems) => {
  const render = () => {
    switch (selectedTab) {
      case MenuItems.FAVORITE_PROJECTS:
        return <FavoriteProjects />;
      case MenuItems.MY_REFFERALS:
        return <AccountRefferals />;
      case MenuItems.PLANS:
        return <AccountPlans />;
      case MenuItems.CSM_NEWS:
        return <AccountCsmNews />;
      default:
        return null;
    }
  };
  return (
    <Fade in>
      <StyledContentContainer>{render()}</StyledContentContainer>
    </Fade>
  );
};

export const ActionBlock = () => {
  const { selectedTab } = useAccount();
  return (
    <>
      <StyledActionBlock />
      <SelectedMenuItemWrapper>{switchedTab(selectedTab)}</SelectedMenuItemWrapper>
    </>
  );
};
