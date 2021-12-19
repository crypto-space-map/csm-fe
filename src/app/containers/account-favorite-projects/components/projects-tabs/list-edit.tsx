import { PencilIcon } from 'assets';
import { Button, SVGWrapper } from 'common/components';

export const ListEditBlock = () => {
  const a = () => console.log('a');
  return (
    <Button variant="text" monoColor>
      <SVGWrapper fill="#BDBDBD">
        <PencilIcon />
      </SVGWrapper>
      Edit List
    </Button>
  );
};
