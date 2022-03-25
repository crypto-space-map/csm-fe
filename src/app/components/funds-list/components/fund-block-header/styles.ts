import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledFundHeader = styled.div`
  margin: 16px;
  display: flex;
  grid-gap: 10px;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;
`;

export const StyledHeaderText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const ArrowIconWrapper = styled.div<{ isShow: boolean }>`
  & > svg {
    fill: ${COLOR_PALLETTE.MAIN_WHITE};
    transform: translateY(${props => (props.isShow ? '4px' : '0')})
      rotate(${props => (props.isShow ? '180deg' : '0deg')});
  }
`;
