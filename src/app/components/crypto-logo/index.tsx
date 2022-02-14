import { StyledImg } from './styles';

interface CryptoLogoProps {
  path: string;
  size?: number;
}
export const CryptoLogo = ({ path, size = 24 }: CryptoLogoProps) => (
  <StyledImg size={size} src={path} alt="Logo" />
);

CryptoLogo.defaultProps = {
  size: 24,
};
