import { sizeOptionsTypes } from '../../types';
import {
  StyledColoredBackgroundWrapper,
  StyledColoredBackgroundWrapperTop,
  StyledColoredBackgroundWrapperBottom,
  StyledColoredBackgroundWrapperLeft,
  StyledColoredBackgroundWrapperRight,
} from './styles';

interface BackgroundBlockProps {
  options: sizeOptionsTypes;
}
export const BackgroundBlock = ({ options }: BackgroundBlockProps) => {
  const { top = 0, bottom = 0, left = 0, right = 0 } = options ?? {};

  if (!options) return <StyledColoredBackgroundWrapper />;
  return (
    <>
      <StyledColoredBackgroundWrapperLeft width={left} top={top} bottom={bottom} />
      <StyledColoredBackgroundWrapperRight width={right} top={top} bottom={bottom} />
      <StyledColoredBackgroundWrapperTop value={top} />
      <StyledColoredBackgroundWrapperBottom value={bottom} />
    </>
  );
};
