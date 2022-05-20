import { FundItemDTO } from '../../types';
import { ScrollFundItem } from './scroll-fund-item';
import { StyledScrollBlockWithFunds } from './styles';

interface ScrollBlockWithFundssProps {
  isShow: boolean;
  selectedFundIds: string[];
  handleSelectFund: (arg0: string) => void;
  funds: FundItemDTO[];
}

export const ScrollBlockWithFunds = ({
  isShow,
  selectedFundIds,
  handleSelectFund,
  funds,
}: ScrollBlockWithFundssProps) => (
  <StyledScrollBlockWithFunds
    // ref={fundsContainer} // пока под вопросом
    isShow={isShow}
    selectedCount={selectedFundIds.length ?? 0}>
    {funds.map(item => (
      <ScrollFundItem
        key={item.id}
        handleSelectFund={handleSelectFund}
        selected={selectedFundIds.includes(item.id)}
        isShow={isShow}
        {...item}
      />
    ))}
  </StyledScrollBlockWithFunds>
);
