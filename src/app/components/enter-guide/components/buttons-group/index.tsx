import { CustomButton } from 'common/components';

import { StyledButtonsGroup } from './styles';

type Props = {
  leftButtonText: string;
  rightButtonText: string;
  leftHandler: () => void;
  rightHandler: () => void;
};

export const ButtonsGroup = ({ leftButtonText, rightButtonText, leftHandler, rightHandler }: Props) => (
  <StyledButtonsGroup>
    <CustomButton variant="outlined" onClick={leftHandler} text={leftButtonText} />
    <CustomButton onClick={rightHandler} text={rightButtonText} />
  </StyledButtonsGroup>
);
