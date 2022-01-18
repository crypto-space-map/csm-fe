import { useCallback } from 'react';

import { CryptoLogo } from '../crypto-logo';
import { ContentItem } from './styles';

interface FundListItemProps {
  id: string;
  imgSrc: string;
  name: string;
  selected: boolean;
  handleSelectFund: (arg0: string) => void;
}

const iconSize = 16;

export const FundListItem = ({
  id,
  imgSrc,
  name,
  selected = false,
  handleSelectFund,
}: FundListItemProps) => {
  const handleClick = useCallback(() => {
    handleSelectFund(id);
  }, [handleSelectFund, id]);
  return (
    <ContentItem key={id} onClick={handleClick} selected={selected}>
      <CryptoLogo size={iconSize} path={imgSrc} />
      <span>{name}</span>
    </ContentItem>
  );
};
