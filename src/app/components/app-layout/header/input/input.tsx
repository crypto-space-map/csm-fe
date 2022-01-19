import { useCallback, useRef } from 'react';

import FilterIcon from 'assets/icons/filter.svg';
import { useBooleanState, useOnClickOutside } from 'hooks';

import { FilterBlock } from './filter-block/filter-block';
import { FilterButtonContainer, HeaderInputContainer, StyledIconButton } from './styled';
import { SuggestInput } from './suggest-input/suggest-input';

const FilterButton = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [open, setOpen, setClose] = useBooleanState();

  const handleClick = useCallback(() => (open ? setClose() : setOpen()), [open, setClose, setOpen]);
  const handleClickOutside = useCallback(() => setClose(), [setClose]);

  useOnClickOutside(filterRef, handleClickOutside);

  return (
    <FilterButtonContainer ref={filterRef}>
      <StyledIconButton onClick={handleClick}>
        <FilterIcon />
      </StyledIconButton>
      <FilterBlock visible={open} setClose={setClose} />
    </FilterButtonContainer>
  );
};

export const HeaderInput = () => (
  <HeaderInputContainer>
    <SuggestInput />
    <FilterButton />
  </HeaderInputContainer>
);
