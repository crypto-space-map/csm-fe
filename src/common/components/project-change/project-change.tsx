import { TradingDownIcon, TradingUpIcon } from 'assets';

import { ProjectChangeHeader, StyledProjectChange, TradingInfo } from './styled';

type ProjectChangeProps = {
  alignItems?: 'start' | 'end';
  change: number;
  price?: number;
};

export const ProjectChange = ({ alignItems, change, price = 0 }: ProjectChangeProps) => {
  const isTardeUp = change >= 0;
  return (
    <StyledProjectChange alignItems={alignItems}>
      <ProjectChangeHeader>24H Change</ProjectChangeHeader>
      <TradingInfo isTardeUp={isTardeUp}>
        {isTardeUp ? <TradingUpIcon /> : <TradingDownIcon />}
        <div>
          <span>{change}%</span>
        </div>
      </TradingInfo>
    </StyledProjectChange>
  );
};

ProjectChange.defaultProps = {
  price: 0,
  alignItems: 'start',
};
