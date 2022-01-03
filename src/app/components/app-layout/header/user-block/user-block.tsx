import { useHistory } from 'react-router-dom';

import { useLogin } from 'app/containers/login/hooks';
import BellIcon from 'assets/icons/bell.svg';
import { Button } from 'common/components/button';

import { StyledIconButton, Wrapper } from './styled';
import { UserBellButtonProps, UserBlockProps } from './types';
import { UserButtonAvatar } from './user-avatar';

const Notifications = (props: UserBellButtonProps) => (
  <StyledIconButton {...props}>
    <BellIcon />
  </StyledIconButton>
);

export const HeaderUserBlock = ({ avatarSrc, haveUnreadMessages }: UserBlockProps = {}) => {
  const { isAuth } = useLogin();
  const { push: pushHistory } = useHistory();
  const handleClickLogin = () => pushHistory('/login');
  const handleClickAccount = () => pushHistory('/account');

  return (
    <Wrapper>
      {!isAuth ? (
        <Button onClick={handleClickLogin}>Sign in or Sign up</Button>
      ) : (
        <>
          <Notifications haveUnreadMessages={haveUnreadMessages} />
          <UserButtonAvatar
            src={avatarSrc}
            alt="user-avatar-image"
            size="small"
            onClick={handleClickAccount}
          />
        </>
      )}
    </Wrapper>
  );
};
