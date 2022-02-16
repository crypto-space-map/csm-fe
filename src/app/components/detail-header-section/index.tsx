import { COLOR_PALLETTE } from 'global/pallette';

import { ShareIcon, StarIcon, LikeIcon, CloseIcon, RoundedButton } from 'assets';
import { SVGWrapper } from 'common/components/svg-wrapper';

import {
  Icon,
  CompanyName,
  CompanyInfo,
  CompanyTiker,
  RankWrapper,
  HeaderSectionWrapper,
  RankText,
  Controls,
  CloseIconWrapper,
  StyledRoundedButton,
} from './styles';
import { HeaderData } from './types';

interface DetailHeaderSectionProps extends HeaderData {
  showBackArrow?: boolean;
  showExtraInfo?: boolean;
  onClose: () => void;
}

export const DetailHeaderSection = ({
  name,
  symbol,
  icon,
  rank,
  showBackArrow,
  showExtraInfo,
  onClose,
}: DetailHeaderSectionProps) => (
  <HeaderSectionWrapper>
    <CompanyInfo>
      {showBackArrow && (
        <StyledRoundedButton onClick={onClose}>
          <RoundedButton />
        </StyledRoundedButton>
      )}
      <Icon src={icon} alt="logo" />
      <CompanyName>{name}</CompanyName>
      {showExtraInfo && (
        <>
          <CompanyTiker>{symbol.toUpperCase()}</CompanyTiker>
          <RankWrapper>
            <StarIcon />
            <RankText>{`Rank ${rank}`}</RankText>
          </RankWrapper>
        </>
      )}
    </CompanyInfo>
    <Controls>
      <SVGWrapper fill="none" stroke={COLOR_PALLETTE.MAIN_GRAY}>
        <LikeIcon />
      </SVGWrapper>
      <SVGWrapper fill={COLOR_PALLETTE.MAIN_GRAY}>
        <ShareIcon />
      </SVGWrapper>

      <CloseIconWrapper onClick={onClose}>
        <CloseIcon />
      </CloseIconWrapper>
    </Controls>
  </HeaderSectionWrapper>
);

DetailHeaderSection.defaultProps = {
  showBackArrow: false,
  showExtraInfo: true,
};
