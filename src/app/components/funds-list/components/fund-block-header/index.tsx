import ArrowIcon from 'assets/arrow.svg';

import { StyledFundHeader, StyledHeaderText, ArrowIconWrapper } from './styles';

interface FundBlockHeaderProps {
  isShow: boolean;
  toggleIsShow: () => void;
}

export const FundBlockHeader = ({ isShow, toggleIsShow }: FundBlockHeaderProps) => (
  <StyledFundHeader onClick={toggleIsShow}>
    <StyledHeaderText>Top 50 Funds</StyledHeaderText>
    <ArrowIconWrapper isShow={isShow}>
      <ArrowIcon />
    </ArrowIconWrapper>
  </StyledFundHeader>
);
