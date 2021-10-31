import BellIcon from 'assets/icons/bell.svg';

import { StyledIconButton, Wrapper } from './styled';
import { UserBellButtonProps, UserBlockProps } from './types';
import { UserButtonAvatar } from './user-avatar';

const Notifications = (props: UserBellButtonProps) => (
  <StyledIconButton {...props}>
    <BellIcon />
  </StyledIconButton>
);

export const HeaderUserBlock = ({ avatarSrc, haveUnreadMessages }: UserBlockProps = {}) => (
  <Wrapper>
    <Notifications haveUnreadMessages={haveUnreadMessages} />
    <UserButtonAvatar src={avatarSrc} alt="user-avatar-image" size="small" />
  </Wrapper>
);
