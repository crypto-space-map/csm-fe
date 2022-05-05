import styled from '@emotion/styled';
import { Avatar, AvatarProps, IconButton, IconButtonProps } from '@mui/material';

type UserAvatarProps = IconButtonProps & AvatarProps;

const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
`;

export const UserButtonAvatar = (props: UserAvatarProps) => (
  <IconButton {...props} id="account-block">
    <StyledAvatar {...props} />
  </IconButton>
);
