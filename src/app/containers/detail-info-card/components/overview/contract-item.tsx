import { CryptoLogo } from 'app/components';

import { ContractItemWrapper } from './styles';
import { ContractProps } from './types';

export const ContractItem = ({ imgSrc, name, address }: Omit<ContractProps, 'id'>) => (
  <ContractItemWrapper>
    <CryptoLogo path={imgSrc} />
    <span>{`${name}: ${address}`}</span>
  </ContractItemWrapper>
);
