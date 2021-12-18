import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

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
  &:not(:first-of-type) {
    margin-top: 17px;
  }
  border-bottom: 1px solid ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const StyledGridContent = styled.div`
  & .infinite-scroll-component {
    overflow: unset !important;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
`;

export const StyledEndMessage = styled.p`
  text-align: center;
  padding: 24px 0;
  margin: 0;
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
      ${props => (props.selected && props.sortDirection === SortingValues.DESC ? '180deg' : '0deg')}
    );
  }
`;

export const StyledRefreshContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;

  & > span {
    color: ${COLOR_PALLETTE.MAIN_GRAY};
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 24px;
  }
`;
