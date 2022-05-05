import { useCallback, useRef } from 'react';

import FilterIcon from 'assets/icons/filter.svg';
import { useBooleanState, useOnClickOutside } from 'hooks';

import { FilterBlock } from './filter-block/filter-block';
import { FilterButtonContainer, HeaderInputContainer, StyledIconButton } from './styled';
import { SuggestInput } from './suggest-input/suggest-input';

interface Props {
  mustSkip: boolean;
}

const FilterButton = ({ mustSkip = false }: Props) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [open, setOpen, setClose] = useBooleanState();

  const handleClick = useCallback(() => (open ? setClose() : setOpen()), [open, setClose, setOpen]);
  const handleClickOutside = useCallback(() => setClose(), [setClose]);

  useOnClickOutside(filterRef, handleClickOutside, mustSkip);

  return (
    <FilterButtonContainer ref={filterRef}>
      <StyledIconButton onClick={handleClick} id="filter-button">
        <FilterIcon />
      </StyledIconButton>
      <FilterBlock visible={open} setClose={setClose} />
    </FilterButtonContainer>
  );
};

export const HeaderInput = ({ mustSkip }: Props) => (
  <HeaderInputContainer id="search-block">
    <SuggestInput />
    <FilterButton mustSkip={mustSkip} />
  </HeaderInputContainer>
);
