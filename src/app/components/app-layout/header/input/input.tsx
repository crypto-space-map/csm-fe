import { IconButtonProps } from '@mui/material';

import FilterIcon from 'assets/icons/filter.svg';

import { HeaderInputContainer, StyledIconButton } from './styled';
import { SuggestInput } from './suggest-input/suggest-input';

const FilterButton = (props: IconButtonProps) => (
  <StyledIconButton {...props}>
    <FilterIcon />
  </StyledIconButton>
);

export const HeaderInput = () => (
  <HeaderInputContainer>
    <SuggestInput />
    <FilterButton />
  </HeaderInputContainer>
);
