import { RoundedButton } from 'assets';

import { StyledRoundedButton } from './styles';

interface BackButtonProps {
  handleArrowBack: () => void;
}

export const BackButton = ({ handleArrowBack }: BackButtonProps) => (
  <StyledRoundedButton onClick={handleArrowBack}>
    <RoundedButton />
  </StyledRoundedButton>
);
