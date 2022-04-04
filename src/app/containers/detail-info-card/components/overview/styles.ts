import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Chip from '@mui/material/Chip';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

export const linkStyles = css`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  ${link()}
`;

export const StyledTextLink = styled.a`
  ${linkStyles}
  max-width: 350px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export const OverviewWrapper = styled.div`
  height: 400px;
  margin-top: 24px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledProjectInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const StyledCategoryWrapper = styled.div`
  min-width: 140px;
  & > span {
    margin-bottom: 6px;
    display: inline-block;
  }
`;

export const TradingWidgetWrapper = styled.div`
  height: 400px;
  #tradingview_widget_wrapper {
    & > div:last-child {
      display: none;
    }
  }
`;

export const StyledCategory = styled(Chip)`
  &.MuiChip-root {
    background-color: ${COLOR_PALLETTE.PROJECT_CATEGORY};
  }
`;

export const ContractsWrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 24px;
  width: 400px;
`;
export const ContractsHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const ContractItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  & > button {
    display: none;
    margin-left: 4px;
  }

  &:hover {
    & > button {
      display: inline-flex;
    }
  }
`;

export const Point = styled.div`
  margin-right: 4px;
  border: 3px solid ${COLOR_PALLETTE.MAIN_BLACK};
  border-radius: 20px;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const StyledCopyButton = styled(IconButton)`
  padding: 0;
  height: fit-content;

  & > svg {
    fill: ${COLOR_PALLETTE.MAIN_GRAY};
  }

  & > svg:hover {
    fill: ${COLOR_PALLETTE.MAIN_LAYOUT};
  }
`;
