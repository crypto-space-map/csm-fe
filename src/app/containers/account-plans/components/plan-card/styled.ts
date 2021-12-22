import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder, gradientText } from 'global/styles';

import { Status } from 'common/components';

export const PlanPrice = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

export const PlanName = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  gap: 18px;
  & > span {
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    ${gradientText}
  }
`;

export const StyledPlanCard = styled.div<{ selected?: boolean }>`
  position: relative;
  display: grid;
  max-width: 416px;
  width: 100%;
  padding: 36px 40px;
  gap: 6px 0;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  box-sizing: border-box;
  ${({ selected }) => selected && gradientBorder({ borderRadius: 16 })}
`;

export const PlanPropertiesContainer = styled.div`
  display: grid;
  gap: 44px 0;
  padding: 20px 0;
`;

export const PropertiesBlock = styled.div`
  display: grid;
  gap: 18px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

export const StyledProperty = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 15px;
  font-weight: normal;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    &::before {
      width: 80vw;
      background-color: ${COLOR_PALLETTE.MAIN_BLACK};
    }
  }
`;

export const SelectedPlan = styled.span`
  min-height: 30px;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

export const ButtonsBlock = styled.div`
  display: grid;
  grid-auto-flow: column;
  min-height: 37px;
  gap: 16px;
`;

export const StyledPlanStatus = styled(Status)<{ gradient?: boolean; redColored?: boolean }>`
  ${({ gradient }) =>
    gradient &&
    css`
      ${gradientText}
      ${gradientBorder({ borderRadius: 20 })}
          background-color: inherit;
    `}
  ${({ redColored }) =>
    redColored &&
    css`
      background-color: ${COLOR_PALLETTE.ERROR_COLOR};
    `}
`;
