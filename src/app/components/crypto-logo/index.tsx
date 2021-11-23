import { StyledImg } from './styles';

interface CryptoLogoProps {
  path: string;
}
export const CryptoLogo = ({ path }: CryptoLogoProps) => <StyledImg src={path} alt="small_logo" />;
