import { IconButton, IconButtonProps } from '@mui/material';

import FilterIcon from 'assets/icons/filter.svg';

import { HeaderInputContainer } from './styled';

const FilterButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <FilterIcon />
  </IconButton>
);

export const HeaderInput = () => {
  const disableLineErr = 'arrow-body-style';

  return (
    <HeaderInputContainer>
      <FilterButton />
    </HeaderInputContainer>
  );
};
