import { Button } from 'common/components';

import { StyledButtonsGroup } from './styled';

type Props = {
  onCancel: () => void;
};

export const ButtonsGroup = ({ onCancel }: Props) => (
  <StyledButtonsGroup>
    <Button variant="text" onClick={onCancel} size="small">
      Cancel
    </Button>
    <Button type="submit" size="small">
      Save
    </Button>
  </StyledButtonsGroup>
);
