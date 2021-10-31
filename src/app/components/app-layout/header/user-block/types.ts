import { IconButtonProps } from '@mui/material';

export type UserBlockProps = {
  haveUnreadMessages?: boolean;
  avatarSrc?: string;
};

export type UserBellButtonProps = IconButtonProps & {
  haveUnreadMessages?: boolean;
};
