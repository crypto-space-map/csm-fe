import { COLOR_PALLETTE } from 'global/pallette';

import { PencilIcon } from 'assets';
import { Button, SVGWrapper } from 'common/components';

export const ListEditBlock = () => (
  <Button variant="text" monoColor>
    <SVGWrapper fill={COLOR_PALLETTE.ICO_COMMON_COLOR}>
      <PencilIcon />
    </SVGWrapper>
    Edit List
  </Button>
);
