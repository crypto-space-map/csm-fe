import { COLOR_PALLETTE } from 'global/pallette';

import { ShareIcon } from 'assets';
import { Button, Refferal, SVGWrapper } from 'common/components';

import { ProgressHint, RefferalProgressContainer } from './styled';

export const RefferalProgress = () => (
  <RefferalProgressContainer>
    Your Statistics
    <Refferal percent={3} text="Refferals" />
    <ProgressHint>Earn 7 more refferals and get discount 30% for update plan</ProgressHint>
    <ProgressHint>Earn 37 more refferals and get Plan for free</ProgressHint>
    <Button>
      <SVGWrapper fill={COLOR_PALLETTE.MAIN_BLACK}>
        <ShareIcon />
      </SVGWrapper>
      Share Refferal Link
    </Button>
  </RefferalProgressContainer>
);
