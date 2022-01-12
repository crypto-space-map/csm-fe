import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { hidingScrollBarStyles } from 'global/styles';

export const StyledFundListWrapper = styled.div`
  position: absolute;
  top: 110px;
  height: calc(100% - 250px);
`;

export const StyledFundList = styled.div`
  position: relative;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  width: 153px;
  height: 100%;
  border-radius: 0px 16px 0px 0px;
  padding: 16px 4px 16px 16px;
  overflow: hidden;
`;

export const StyledFundContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 26px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  ${hidingScrollBarStyles};

  color: rgba(255, 255, 255, 0);
  transition: color 0.3s ease;

  &:hover {
    color: #c4c4c4;
  }
`;

export const ContentItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  opacity: 0.5;
  padding: 7px 0;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  background: ${props => (props.selected ? COLOR_PALLETTE.MAIN_GRAY : 'unset')};

  & > span {
    white-space: nowrap;
    margin-left: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background: ${COLOR_PALLETTE.MAIN_GRAY};
  }
`;

export const StyledFundHeader = styled.div`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  opacity: 0.5;
  margin-bottom: 4px;
`;

export const StyledGradientBlock = styled.div`
  height: 20px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
  margin-left: -16px;
  margin-right: -16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
