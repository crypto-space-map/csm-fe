import { PencilIcon } from 'assets';
import { Button, SVGWrapper } from 'common/components';

export const ListEditBlock = () => (
  <Button variant="text" monoColor>
    <SVGWrapper fill="#BDBDBD">
      <PencilIcon />
    </SVGWrapper>
    Edit List
  </Button>
);
