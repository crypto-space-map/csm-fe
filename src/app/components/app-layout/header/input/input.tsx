import { useRef, useState } from 'react';

import FilterIcon from 'assets/icons/filter.svg';
import { useOnClickOutside } from 'hooks';

import { FilterBlock } from './filter-block/filter-block';
import { FilterButtonContainer, HeaderInputContainer, StyledIconButton } from './styled';
import { SuggestInput } from './suggest-input/suggest-input';

const FilterButton = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(filterRef, handleClickOutside);

  return (
    <FilterButtonContainer ref={filterRef}>
      <StyledIconButton onClick={handleClick}>
        <FilterIcon />
      </StyledIconButton>
      <FilterBlock visible={open} />
    </FilterButtonContainer>
  );
};

export const HeaderInput = () => (
  <HeaderInputContainer>
    <SuggestInput />
    <FilterButton />
  </HeaderInputContainer>
);
