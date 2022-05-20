import { TradingDownIcon, TradingUpIcon } from 'assets';

import { PriceChange, ProjectChangeHeader, StyledProjectChange, TradingInfo } from './styled';

type ProjectChangeProps = {
  textAlign?: 'start' | 'end';
  changePeriod: '24H Change' | '7D Change';
  lightVariant?: boolean;
  percentageChange: string;
  priceChange?: string | null;
};

const isTradeUp = (value: string) => +value >= 0;

export const ProjectChange = ({
  textAlign,
  percentageChange,
  changePeriod,
  priceChange,
  lightVariant,
}: ProjectChangeProps) => {
  const isTardeUp = isTradeUp(percentageChange);
  const isPriceUp =
    priceChange && isTradeUp(priceChange) ? `+$${priceChange}` : `-$${-1 * Number(priceChange)}`;
  return (
    <StyledProjectChange textAlign={textAlign}>
      <ProjectChangeHeader className="project-change-header" lightVariant={lightVariant}>
        {changePeriod}
      </ProjectChangeHeader>
      <TradingInfo className="project-change-traiding-info" isTardeUp={isTardeUp}>
        {isTardeUp ? <TradingUpIcon /> : <TradingDownIcon />}
        <span>{percentageChange}%</span>
      </TradingInfo>
      {priceChange && <PriceChange isTardeUp={isTardeUp}>{isPriceUp}</PriceChange>}
    </StyledProjectChange>
  );
};

ProjectChange.defaultProps = {
  priceChange: null,
  textAlign: 'start',
  lightVariant: false,
};
