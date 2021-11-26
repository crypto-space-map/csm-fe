import { useMemo } from 'react';

import ArrowIcon from 'assets/arrow.svg';

import { StyledHeaderItem, ArrowIconWrapper } from '../../styles';
import { HeaderItemProps } from '../../types';

export const HeaderItem = <T,>({
  field,
  headerName,
  renderCustomHeaderName,
  sortable = true,
  onChangeSortField,
  selected,
  sortDirection,
}: HeaderItemProps<T>) => {
  const handleClick = () => {
    onChangeSortField(field);
  };
  const headerNameValue = useMemo(() => {
    if (renderCustomHeaderName) return renderCustomHeaderName();
    if (headerName) return headerName;
    return '';
  }, [headerName, renderCustomHeaderName]);
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
