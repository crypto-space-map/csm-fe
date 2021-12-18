import { FavoriteProjects } from '../../../account-favorite-projects';
import { useAccount } from '../../hooks';
import { MenuItems } from '../../types';
import { SelectedMenuItemWrapper, StyledActionBlock } from './styled';

const switchedTab = (selectedTab: MenuItems) => {
  switch (selectedTab) {
    case MenuItems.FAVORITE_PROJECTS:
      return <FavoriteProjects />;
    default:
      return null;
  }
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
