import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

import { SortingValues } from './types';

export const additionalText = css`
  color: ${COLOR_PALLETTE.MAIN_GRAY};
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

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
  padding: 24px 0 20px 0;
  margin-bottom: 4px;
  position: sticky;
  top: 0;
  background: ${COLOR_PALLETTE.MAIN_WHITE};
  z-index: 1;
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
`;

export const StyledNoFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

export const MainAdditionalText = styled.span`
  ${additionalText}
`;

export const SecondAdditionalText = styled.span`
  ${additionalText}
  font-size: 16px;
  font-weight: normal;
  margin-top: 16px;
`;
