import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

import { commonItemStyle, commonPointStyle } from '../../styles';

export const StyledStaticBlockWithFunds = styled.div``;

export const StyledStaticFundItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

export const StyledItem = styled.div`
  ${commonItemStyle}
  flex-basis: 100%;
  background: ${COLOR_PALLETTE.MAIN_WHITE};
  color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const StyledStaticFundPoint = styled.div`
  ${commonPointStyle}
  margin-right: -7px;
`;
