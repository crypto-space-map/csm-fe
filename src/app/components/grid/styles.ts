import styled from '@emotion/styled';

import { SortingValues } from './types';

export const GridWrapper = styled.div``;

const StyledGridRow = styled.div<{ columnWidths: string }>`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: ${props => props.columnWidths};
  align-items: flex-start;
  font-size: 14px;
  line-height: 16px;
`;

export const StyledGridHeader = styled(StyledGridRow)`
  margin-bottom: 24px;
`;

export const StyledGridContentRow = styled(StyledGridRow)`
  padding-bottom: 17px;
`;

export const StyledGridRowWrapper = styled.div`
  border-bottom: 1px solid #b2b2b2;
`;

export const StyledGridContent = styled.div`
  & > div:not(:first-of-type) {
    margin-top: 17px;
  }
`;

export const StyledHeaderItem = styled.div<{ sortable: boolean }>`
  cursor: ${props => (props.sortable ? 'pointer' : 'default')};
  font-size: 14px;
  line-height: 16px;
  display: flex;
  width: min-content;
  user-select: none;
`;

export const ArrowIconWrapper = styled.div<{ selected: boolean; sortDirection: string }>`
  margin-left: 7px;
  & > svg {
    fill: ${props => (props.selected ? '#1d1c1c' : '#bdbdbd')};

    transform: rotate(
      ${props => (props.selected && props.sortDirection === SortingValues.Desc ? '180deg' : '0deg')}
    );
  }
`;
