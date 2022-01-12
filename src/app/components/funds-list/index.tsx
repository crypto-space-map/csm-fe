import { funds } from './contanst';
import { FundListItem } from './fund-list-item';
import {
  StyledFundList,
  StyledFundListWrapper,
  StyledFundHeader,
  StyledFundContentWrapper,
  StyledGradientBlock,
} from './styles';

interface FundsListProps {
  selectedFund: string | null;
  handleSelectFund: (arg0: string) => void;
}

export const FundsList = ({ handleSelectFund, selectedFund = '' }: FundsListProps) => (
  <StyledFundListWrapper>
    <StyledFundList>
      <StyledFundHeader>
        <span>Funds</span>
      </StyledFundHeader>
      <StyledFundContentWrapper>
        {funds.map(item => (
          <FundListItem
            key={item.id}
            handleSelectFund={handleSelectFund}
            selected={item.id === selectedFund}
            {...item}
          />
        ))}
      </StyledFundContentWrapper>
      <StyledGradientBlock />
    </StyledFundList>
  </StyledFundListWrapper>
);
