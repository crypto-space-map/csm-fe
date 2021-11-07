import { IconButtonProps } from '@mui/material';

import FilterIcon from 'assets/icons/filter.svg';
import SearchIcon from 'assets/icons/search.svg';

import { HeaderInputContainer, StyledIconButton, StyledInput } from './styled';

const FilterButton = (props: IconButtonProps) => (
  <StyledIconButton {...props}>
    <FilterIcon />
  </StyledIconButton>
);

export const HeaderInput = () => {
  const disableLineErr = 'arrow-body-style at HeaderInput';
  console.log(disableLineErr);

  return (
    <HeaderInputContainer>
      <StyledInput placeholder="Search" disableUnderline fullWidth startAdornment={<SearchIcon />} />
      <FilterButton />
    </HeaderInputContainer>
  );
};