import { Fade } from '@mui/material';

import { StyledContentContainer } from 'app/components/account';
import { FavoriteProjects } from 'app/containers/account-favorite-projects';
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
