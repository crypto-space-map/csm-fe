import { COLOR_PALLETTE } from 'global/pallette';

import { ArrowIcon } from 'assets';
import { SVGWrapper } from 'common/components';

import { StyledShowNewsButton } from './styled';

export type ShowNewsButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const ShowNewsButton = ({ onClick, isOpen }: ShowNewsButtonProps) => (
  <StyledShowNewsButton variant="text" size="small" onClick={onClick} isOpen={isOpen}>
    {isOpen ? 'Read Less' : 'Read More'}
    <SVGWrapper fill={COLOR_PALLETTE.DARK_GREEN}>
      <ArrowIcon />
    </SVGWrapper>
  </StyledShowNewsButton>
);
