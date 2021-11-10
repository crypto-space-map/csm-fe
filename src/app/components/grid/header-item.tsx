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
  return (
    <StyledHeaderItem sortable={sortable} onClick={handleClick}>
      <span>{headerName}</span>
      {sortable && (
        <ArrowIconWrapper selected={selected} sortDirection={sortDirection}>
          <ArrowIcon />
        </ArrowIconWrapper>
      )}
    </StyledHeaderItem>
  );
};
