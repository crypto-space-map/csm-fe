import { PointCoords } from 'store/pageStore/types';
import { InvestorsProps } from 'types/dto';

import { StaticFundItem } from './static-fund-item';
import { StyledStaticBlockWithFunds } from './styles';

interface StaticBlockWithFundsProps {
  handleSelectFund: (arg0: string) => void;
  setPointsCoords: (arg0: PointCoords) => void;
  selectedFunds: InvestorsProps[];
  isShowLines: boolean;
}

export const StaticBlockWithFunds = ({
  selectedFunds,
  isShowLines,
  handleSelectFund,
  setPointsCoords,
}: StaticBlockWithFundsProps) => (
  <StyledStaticBlockWithFunds>
    {selectedFunds.map(({ id, name }) => (
      <StaticFundItem
        name={name}
        id={id}
        key={id}
        isShowLines={isShowLines}
        handleSelectFund={handleSelectFund}
        setPointsCoords={setPointsCoords}
      />
    ))}
  </StyledStaticBlockWithFunds>
);
