import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const startPosition = '-55px';

export const StyledHelloCosmo = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: flex;
  top: ${props => (props.isVisible ? 0 : startPosition)};
  left: 320px;
  z-index: 20;
  cursor: pointer;
  transition: top 0.6s;
`;

export const StyledTooltip = styled.div`
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
  font-size: 14px;
  line-height: 18px;
  max-height: 42px;

  margin-right: 18px;
  margin-top: 10px;

  & > span {
    padding: 0 12px;
  }

  &:before {
    content: '';
    border: solid transparent;
    position: absolute;
    left: 100%;
    top: 50%;
    border-left-color: ${COLOR_PALLETTE.MAIN_WHITE};
    border-width: 9px;
    margin-top: -9px;
  }
`;
