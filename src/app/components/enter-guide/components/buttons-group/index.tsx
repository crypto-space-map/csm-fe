import { Button } from 'common/components';

import { StyledButtonsGroup } from './styles';

type Props = {
  leftButtonText: string;
  rightButtonText: string;
  leftHandler: () => void;
  rightHandler: () => void;
};

export const ButtonsGroup = ({ leftButtonText, rightButtonText, leftHandler, rightHandler }: Props) => (
  <StyledButtonsGroup>
    <Button variant="outlined" onClick={leftHandler}>
      {leftButtonText}
    </Button>
    <Button onClick={rightHandler}>{rightButtonText}</Button>
  </StyledButtonsGroup>
);
