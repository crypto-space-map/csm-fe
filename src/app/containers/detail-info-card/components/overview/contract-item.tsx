import { useCallback } from 'react';

import { CopyIcon } from 'assets';

import { ContractItemWrapper, StyledTextLink, Point, StyledCopyButton } from './styles';

interface ContractItemProps {
  address: string;
  handleCopyClick: (arg0: string) => void;
}

export const ContractItem = ({ address, handleCopyClick }: ContractItemProps) => {
  const handleClick = useCallback(() => {
    handleCopyClick(address);
  }, [handleCopyClick, address]);

  return (
    <ContractItemWrapper>
      <Point />
      <StyledTextLink target="_blank" rel="noreferrer" href={address}>
        {address}
      </StyledTextLink>
      <StyledCopyButton disableRipple onClick={handleClick}>
        <CopyIcon />
      </StyledCopyButton>
    </ContractItemWrapper>
  );
};
