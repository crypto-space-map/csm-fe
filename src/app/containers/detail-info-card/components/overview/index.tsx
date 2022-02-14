import { memo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';
import { ShowMoreText } from 'common/components';

import { selectedProjectTicker } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { overviewData } from './constants';
import { ContractItem } from './contract-item';
import {
  OverviewWrapper,
  StyledProjectInfoWrapper,
  StyledCategoryWrapper,
  ContractsWrapper,
  StyledCategory,
  ContractsHeader,
  TradingWidgetWrapper,
} from './styles';

export const Overview = memo(() => {
  const ticker = useSelector(selectedProjectTicker);

  const { fetchOverviewTradingStock } = useDispatchAction();
  useEffect(() => {
    fetchOverviewTradingStock();
  }, [fetchOverviewTradingStock]);

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        <TradingWidget symbol={`${ticker}USDT`} />
      </TradingWidgetWrapper>
      <StyledProjectInfoWrapper>
        <ShowMoreText width={460}>{overviewData.description}</ShowMoreText>
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
