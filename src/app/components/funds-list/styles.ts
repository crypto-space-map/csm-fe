import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

import { cellHeight, correctionHeight } from './utils';

export const commonItemStyle = css`
  padding: 7px 0 7px 16px;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  color: ${COLOR_PALLETTE.MAIN_GRAY};

  & > span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    width: 155px;
  }
`;

export const commonPointStyle = css`
  width: 6px;
  height: 13px;
  border: 1px solid ${COLOR_PALLETTE.MAIN_LAYOUT};
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
  background: ${COLOR_PALLETTE.MAIN_BLUE};
`;

export const StyledMainFundBlock = styled.div<{ show: boolean; selectedItems: number }>`
  position: absolute;
  display: flex;
  top: 110px;
  left: 0;
  height: 100%;
  max-height: ${props =>
    props.show ? 'calc(100% - 250px)' : `${props.selectedItems * cellHeight + correctionHeight}px`};
  transition: max-height 0.3s ease;
`;

export const StyledFundBlockWrapper = styled.div<{ show: boolean }>`
  position: relative;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  width: 180px;
  height: 100%;
  border-radius: 0px 16px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const StyledGradientBlock = styled.div`
  height: 20px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
`;
