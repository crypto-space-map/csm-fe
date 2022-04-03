// Компонент списка из верхнего статичного блока. Появляется при клике на проект карты.

import { useCallback, useState, useEffect } from 'react';

import { PointCoords } from 'store/pageStore/types';

import { staticFundPointClass } from '../../utils';
import { StyledItem, StyledStaticFundPoint, StyledStaticFundItem } from './styles';

interface StaticFundItemProps {
  id: string;
  name: string;
  isShowLines: boolean;
  handleSelectFund: (arg0: string) => void;
  setPointsCoords: (arg0: PointCoords) => void;
}

export const StaticFundItem = ({
  id,
  name,
  isShowLines,
  handleSelectFund,
  setPointsCoords,
}: StaticFundItemProps) => {
  const [node, setRef] = useState<HTMLDivElement | null>(null);

  const handleClick = useCallback(() => {
    handleSelectFund(id);
  }, [handleSelectFund, id]);

  useEffect(() => {
    if (node && isShowLines) {
      const rect = node.getBoundingClientRect();
      setPointsCoords({ x: rect.x + rect.width, y: rect.y + rect.height / 2 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node, isShowLines]);

  return (
    <StyledStaticFundItem ref={setRef}>
      <StyledItem onClick={handleClick}>
        <span>{name}</span>
      </StyledItem>
      <StyledStaticFundPoint className={staticFundPointClass} />
    </StyledStaticFundItem>
  );
};
