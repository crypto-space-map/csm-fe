import { useMemo } from 'react';

import ArrowIcon from 'assets/arrow.svg';

import { StyledHeaderItem, ArrowIconWrapper } from './styles';
import { HeaderItemProps } from './types';

export const HeaderItem = <T,>({
  field,
  headerName,
  sortable = true,
  onChangeSortField,
  selected,
  sortDirection,
}: HeaderItemProps<T>) => {
  const handleClick = () => {
    onChangeSortField(field);
  };
  const headerNameValue = useMemo(
    () => (typeof headerName === 'string' ? headerName : headerName()),
    [headerName]
  );
  return (
    <StyledHeaderItem sortable={sortable} onClick={handleClick}>
      <span>{headerNameValue}</span>
      {sortable && (
        <ArrowIconWrapper selected={selected} sortDirection={sortDirection}>
          <ArrowIcon />
        </ArrowIconWrapper>
      )}
    </StyledHeaderItem>
  );
};
