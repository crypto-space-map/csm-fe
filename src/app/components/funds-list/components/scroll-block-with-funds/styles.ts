import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { hidingScrollBarStyles } from 'global/styles';

import { commonItemStyle } from '../../styles';
import { cellHeight, correctionHeight } from '../../utils';

export const StyledScrollBlockWithFunds = styled.div<{ isShow: boolean; selectedCount: number }>`
  display: flex;
  flex-direction: column;
  height: ${props =>
    props.isShow ? `calc(100% - ${correctionHeight}px)` : `${props.selectedCount * cellHeight}px`};
  overflow-y: scroll;
  overflow-y: overlay;
  overflow-x: hidden;
  position: relative;
  ${hidingScrollBarStyles};

  color: transparent;
  transition: color 0.3s ease;

  &:hover {
    color: #c4c4c4;
  }
`;

export const StyledScrollFundItem = styled.div<{ selected: boolean; isShow: boolean }>`
  ${commonItemStyle}

  opacity: ${props => (props.isShow || props.selected ? 1 : 0)};
  display: ${props => (props.selected ? 'none' : 'unset')};
  transition: opacity 0.2s ease 0s, background ease 0.7s;

  &:hover {
    background: ${COLOR_PALLETTE.MAIN_WHITE};
    color: ${COLOR_PALLETTE.MAIN_BLACK};
  }
`;
