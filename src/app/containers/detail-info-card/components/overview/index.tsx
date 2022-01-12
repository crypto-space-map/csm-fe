import { memo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';
import { Loader } from 'common/components/loader';

import { selectedOverviewTradingStock, selectedOverviewTradingStockLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { overviewData } from './constants';
import { ContractItem } from './contract-item';
import {
  OverviewWrapper,
  LoaderWrapper,
  StyledProjectInfoWrapper,
  StyledCategoryWrapper,
  ContractsWrapper,
  StyledCategory,
  StylesShowMoreText,
  ContractsHeader,
  TradingWidgetWrapper,
} from './styles';

export const Overview = memo(() => {
  const overviewTradingStock = useSelector(selectedOverviewTradingStock);
  const overviewTradingStockLoading = useSelector(selectedOverviewTradingStockLoading);

  const { fetchOverviewTradingStock } = useDispatchAction();
  useEffect(() => {
    fetchOverviewTradingStock();
  }, [fetchOverviewTradingStock]);

  if (overviewTradingStockLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        <TradingWidget symbol={`${overviewTradingStock}:CEREUSDT`} />
      </TradingWidgetWrapper>
      <StyledProjectInfoWrapper>
        <StylesShowMoreText
          lines={3}
          more="More"
          less="Less"
          anchorClass="anchor-class"
          expanded={false}
          width={490}
          truncatedEndingComponent="... ">
          {overviewData.description}
        </StylesShowMoreText>
        <StyledCategoryWrapper>
          <span>Category:</span>
          <div>
            <StyledCategory label={overviewData.category} />
          </div>
        </StyledCategoryWrapper>
      </StyledProjectInfoWrapper>
      <ContractsWrapper>
        <ContractsHeader>
          <span>Smart Contracts:</span>
        </ContractsHeader>
        {overviewData.contracts.map(item => (
          <ContractItem key={item.id} {...item} />
        ))}
      </ContractsWrapper>
    </OverviewWrapper>
  );
});
