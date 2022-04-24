import { sizeOptionsTypes } from '../../types';
import { StyledBorderBlock } from './styles';

interface BorderBlockProps {
  options: sizeOptionsTypes;
}
export const BorderBlock = ({ options }: BorderBlockProps) => {
  if (!options) return null;
  return <StyledBorderBlock {...options} />;
};
