import { useHistory } from 'react-router-dom';

import BellIcon from 'assets/icons/bell.svg';

import { StyledIconButton, Wrapper } from './styled';
import { UserBellButtonProps, UserBlockProps } from './types';
import { UserButtonAvatar } from './user-avatar';

const Notifications = (props: UserBellButtonProps) => (
  <StyledIconButton {...props}>
    <BellIcon />
  </StyledIconButton>
);

export const HeaderUserBlock = ({ avatarSrc, haveUnreadMessages }: UserBlockProps = {}) => {
  const { push: historyPush } = useHistory();
  const handleClick = () => historyPush('/account');
  return (
    <Wrapper>
      <Notifications haveUnreadMessages={haveUnreadMessages} />
      <UserButtonAvatar src={avatarSrc} alt="user-avatar-image" size="small" onClick={handleClick} />
    </Wrapper>
  );
};
