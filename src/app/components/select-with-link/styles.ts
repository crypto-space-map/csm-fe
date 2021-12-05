import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

const { MAIN_BLACK, LIGHT_GRAY, MAIN_WHITE } = COLOR_PALLETTE;

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
  height: 16px;
  padding: 8px 0 8px 8px;
  ${link(MAIN_BLACK)}

  &:hover {
    background-color: ${LIGHT_GRAY};
    border-radius: 4px;
  }
`;

export const CustomSelect = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

export const SelectHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  font-size: 14px;
  line-height: 14px;
  color: rgba(66, 67, 72, 0.8);
  cursor: pointer;
  user-select: none;
`;

export const LinkArrowWrapper = styled.div<{ isShowOptionList: boolean }>`
  transform: ${props => (props.isShowOptionList ? 'rotate(180deg)' : 'unset')};
  margin-right: 6px;
`;

export const SelectList = styled.ul`
  position: absolute;
  right: 0;

  background: ${MAIN_WHITE};
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 4px;
  margin-top: 5px;
  width: 206px;
  max-height: 150px;
  overflow-x: hidden;
  z-index: 10;
  margin: 0;
  padding: 4px;
  font-size: 14px;
  color: #424348;

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f8f9fa;
    padding: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d9d9d9;
  }
`;

export const SelectItem = styled.li`
  position: relative;
  cursor: pointer;
  list-style-type: none;
  width: 100%;
`;
