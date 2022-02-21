import { COLOR_PALLETTE } from 'global/pallette';

import { ShareIcon, StarIcon, LikeIcon, CloseIcon, RoundedButton } from 'assets';
import { DefaultFirstLetterLogo } from 'common/components/default-first-letter-logo';
import { SVGWrapper } from 'common/components/svg-wrapper';

import { useDetailHeader } from './hooks';
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
  showExtraInfo?: boolean;
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
  showExtraInfo,
}: DetailHeaderSectionProps) => {
  const { isShowArrowBack, handleArrowBack, handleClose } = useDetailHeader();
  return (
    <HeaderSectionWrapper>
      <CompanyInfo>
        {isShowArrowBack && (
          <StyledRoundedButton onClick={handleArrowBack}>
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

        <CloseIconWrapper onClick={handleClose}>
          <CloseIcon />
        </CloseIconWrapper>
      </Controls>
    </HeaderSectionWrapper>
  );
};

DetailHeaderSection.defaultProps = {
  showExtraInfo: true,
};
