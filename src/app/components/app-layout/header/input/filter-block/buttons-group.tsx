import { CustomButton, Button } from 'common/components';

import { StyledButtonsGroup } from './styled';

type Props = {
  onClear: () => void;
};

export const ButtonsGroup = ({ onClear }: Props) => (
  <StyledButtonsGroup>
    <Button type="submit">Apply Filter</Button>
    <CustomButton variant="outlined" onClick={onClear} text="Clear" />
  </StyledButtonsGroup>
);
