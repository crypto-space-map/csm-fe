import { ContractItemWrapper, StyledTextLink, Point } from './styles';

interface ContractItemProps {
  address: string;
}

export const ContractItem = ({ address }: ContractItemProps) => (
  <ContractItemWrapper>
    <Point />
    <StyledTextLink target="_blank" rel="noreferrer" href={address}>
      {address}
    </StyledTextLink>
  </ContractItemWrapper>
);
