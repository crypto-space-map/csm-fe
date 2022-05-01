import { useState, useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useMainPage } from 'app/containers/mainPage/hooks';
import { useSetNewProject } from 'hooks/use-set-new-project';
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

export const FundsList = () => {
  const projectName = useSelector(selectedProjectName);
  const funds = useSelector(selectedTopFunds);
  const selectedFundIds = useSelector(selectedFundBlockItemsIdList);
  const isShowLines = useSelector(selectedIsShowLines);
  const { handleSelectFund } = useSetNewProject();
  const { setPointsCoords, clearPointsCoords } = useMainPage();

  const [isShow, setShow] = useState(true);

  const selectedFunds = useMemo(
    () => funds?.filter(item => selectedFundIds.includes(item.id)) ?? [],
    [funds, selectedFundIds]
  );

  useEffect(() => {
    // При переключении проект->проект проект->фонд зануляем список координат
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
