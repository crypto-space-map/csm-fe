import { Button } from 'common/components';

import { StyledButtonsGroup } from './styled';

type Props = {
  onClear: () => void;
};

export const ButtonsGroup = ({ onClear }: Props) => (
  <StyledButtonsGroup>
    <Button type="submit">Apply Filter</Button>
    <Button variant="outlined" onClick={onClear}>
      Clear
    </Button>
  </StyledButtonsGroup>
);
