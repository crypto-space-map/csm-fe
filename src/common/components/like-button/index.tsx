import { IconButtonProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

import { LikeIcon } from 'assets';
import { SVGWrapper } from 'common/components/svg-wrapper';

import { StyledLikeButton } from './styled';

type LikeButtonProps = IconButtonProps & {
  liked?: boolean;
};

export const LikeButton = ({ liked, ...rest }: LikeButtonProps) => (
  <StyledLikeButton disableRipple {...rest}>
    <SVGWrapper fill={liked ? COLOR_PALLETTE.ERROR_COLOR : 'none'} stroke={COLOR_PALLETTE.ERROR_COLOR}>
      <LikeIcon />
    </SVGWrapper>
  </StyledLikeButton>
);

LikeButton.defaultProps = {
  liked: true,
};
