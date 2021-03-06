import { useCallback } from 'react';

import { StarIcon, CloseIcon, RoundedButton, HideCardIcon, ShowCardIcon } from 'assets';
import { IconPlug } from 'common/components';

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
  StyledRoundedButton,
  StyledDefaultLogo,
  IconWrapper,
  ControlsWrapper,
} from './styles';
import { HeaderData } from './types';

interface DetailHeaderSectionProps extends HeaderData {
  showExtraInfo?: boolean;
  isHide: boolean;
  toggleIsHide: () => void;
}

const getLogo = (name: string, icon?: string) =>
  icon ? (
    <Icon src={icon} alt="logo" />
  ) : (
    <StyledDefaultLogo>
      <IconPlug text={name} />
    </StyledDefaultLogo>
  );

export const DetailHeaderSection = ({
  name,
  symbol,
  icon,
  rank,
  showExtraInfo,
  isHide,
  toggleIsHide,
}: DetailHeaderSectionProps) => {
  const { isShowArrowBack, handleArrowBack, handleClose } = useDetailHeader();
  const handleHideCard = useCallback(() => {
    toggleIsHide();
  }, [toggleIsHide]);

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
            {rank && (
              <RankWrapper>
                <StarIcon />
                <RankText>{`Rank ${rank}`}</RankText>
              </RankWrapper>
            )}
          </>
        )}
      </CompanyInfo>
      <ControlsWrapper>
        <Controls>
          <IconWrapper onClick={handleHideCard}>{isHide ? <ShowCardIcon /> : <HideCardIcon />}</IconWrapper>
          <IconWrapper onClick={handleClose} id="close-card-block">
            <CloseIcon />
          </IconWrapper>
        </Controls>
      </ControlsWrapper>
    </HeaderSectionWrapper>
  );
};

DetailHeaderSection.defaultProps = {
  showExtraInfo: true,
};
