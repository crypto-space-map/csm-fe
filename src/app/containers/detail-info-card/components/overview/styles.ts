import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';
import ShowMoreText from 'react-show-more-text';

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
`;

export const StylesShowMoreText = styled(ShowMoreText)`
  width: 490px;
  & .anchor-class {
    text-decoration: none;
    ${link()};
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
  & > span {
    margin-left: 4px;
  }
`;
