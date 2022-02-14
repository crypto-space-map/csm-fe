import { COLOR_PALLETTE } from 'global/pallette';

import { ShareIcon, StarIcon, LikeIcon, CloseIcon, RoundedButton } from 'assets';
import { DefaultFirstLetterLogo } from 'common/components/default-first-letter-logo';
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
  StyledDefaultLogo,
} from './styles';
import { HeaderData } from './types';

interface DetailHeaderSectionProps extends HeaderData {
  showBackArrow?: boolean;
  showExtraInfo?: boolean;
  onClose: () => void;
}

const getLogo = (name: string, icon?: string) =>
  icon ? (
    <Icon src={icon} alt="logo" />
  ) : (
    <StyledDefaultLogo>
      <DefaultFirstLetterLogo name={name} />
    </StyledDefaultLogo>
  );

const liked = false;

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

      {getLogo(name, icon)}

      <CompanyName>{name}</CompanyName>
      {showExtraInfo && (
        <>
          <CompanyTiker>{symbol?.toUpperCase() ?? ''}</CompanyTiker>
          <RankWrapper>
            <StarIcon />
            <RankText>{`Rank ${rank}`}</RankText>
          </RankWrapper>
        </>
      )}
    </CompanyInfo>
    <Controls>
      <SVGWrapper fill={liked ? COLOR_PALLETTE.MAIN_GRAY : 'none'} stroke={COLOR_PALLETTE.MAIN_GRAY}>
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
