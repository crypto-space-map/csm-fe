import { useCallback } from 'react';

import { StyledScrollFundItem } from './styles';

interface FundListItemProps {
  id: string;
  name: string;
  selected: boolean;
  isShow: boolean;
  handleSelectFund: (arg0: string) => void;
}

export const ScrollFundItem = ({
  id,
  name,
  selected = false,
  isShow = false,
  handleSelectFund,
}: FundListItemProps) => {
  const handleClick = useCallback(() => {
    handleSelectFund(id);
  }, [handleSelectFund, id]);
  return (
    <StyledScrollFundItem onClick={handleClick} selected={selected} isShow={isShow}>
      <span>{name}</span>
    </StyledScrollFundItem>
  );
};
