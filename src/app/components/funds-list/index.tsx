import { useState, useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import {
  selectedProjectName,
  selectedTopFunds,
  selectedFundBlockItemsIdList,
  selectedIsShowLines,
} from 'store/pageStore/selectors';
import { PointCoords } from 'store/pageStore/types';

import { FundBlockHeader } from './components/fund-block-header';
import { ScrollBlockWithFunds } from './components/scroll-block-with-funds';
import { StaticBlockWithFunds } from './components/static-block-with-funds';
import { StyledFundBlockWrapper, StyledMainFundBlock, StyledGradientBlock } from './styles';

interface FundsListProps {
  setPointsCoords: (arg0: PointCoords) => void;
  handleSelectFund: (arg0: string) => void;
  clearPointsCoords: () => void;
}

export const FundsList = ({ handleSelectFund, setPointsCoords, clearPointsCoords }: FundsListProps) => {
  const projectName = useSelector(selectedProjectName);
  const funds = useSelector(selectedTopFunds);
  const selectedFundIds = useSelector(selectedFundBlockItemsIdList);
  const isShowLines = useSelector(selectedIsShowLines);

  const [isShow, setShow] = useState(false);

  const selectedFunds = useMemo(
    () => funds?.filter(item => selectedFundIds.includes(item.id)) ?? [],
    [funds, selectedFundIds]
  );

  useEffect(() => {
    // При переключении проект->проект проетк->фонд зануляем список координат
    clearPointsCoords();
  }, [projectName, clearPointsCoords]);

  const selectedFundsCount = selectedFunds?.length ?? 0;
  const toggleIsShow = () => setShow(!isShow);

  if (!funds) return null;

  return (
    <StyledMainFundBlock show={isShow} selectedItems={selectedFundsCount}>
      <StyledFundBlockWrapper show={isShow}>
        <FundBlockHeader isShow={isShow} toggleIsShow={toggleIsShow} />

        <StaticBlockWithFunds
          selectedFunds={selectedFunds}
          isShowLines={isShowLines}
          handleSelectFund={handleSelectFund}
          setPointsCoords={setPointsCoords}
        />

        <ScrollBlockWithFunds
          isShow={isShow}
          funds={funds}
          selectedFundIds={selectedFundIds}
          handleSelectFund={handleSelectFund}
        />
        <StyledGradientBlock />
      </StyledFundBlockWrapper>
    </StyledMainFundBlock>
  );
};
