import { useMemo } from 'react';

import ArrowIcon from 'assets/arrow.svg';

import { StyledHeaderItem, ArrowIconWrapper } from '../../styles';
import { HeaderItemProps } from '../../types';

const defaultFunc = () => {};

export const HeaderItem = <T,>({
  field,
  headerName,
  renderCustomHeaderName,
  sortable = true,
  onChangeSortField,
  selected,
  sortDirection,
  textAlign,
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
    <StyledHeaderItem
      textAlign={textAlign}
      sortable={sortable}
      onClick={sortable ? handleClick : defaultFunc}>
      <span>{headerNameValue}</span>
      {sortable && (
        <ArrowIconWrapper selected={selected} sortDirection={sortDirection}>
          <ArrowIcon />
        </ArrowIconWrapper>
      )}
    </StyledHeaderItem>
  );
};
