import { useCallback } from 'react';

import { CloseIcon, HideCardIcon, ShowCardIcon } from 'assets';

import { Logo, BackButton, ExtraInfo } from './components';
import { useDetailHeader } from './hooks';
import {
  CompanyName,
  CompanyInfo,
  HeaderSectionWrapper,
  Controls,
  IconWrapper,
  ControlsWrapper,
} from './styles';
import { HeaderData } from './types';

interface DetailHeaderSectionProps extends HeaderData {
  showExtraInfo?: boolean;
  isHide: boolean;
  toggleIsHide: () => void;
}

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
        {isShowArrowBack && <BackButton handleArrowBack={handleArrowBack} />}
        <Logo name={name} icon={icon} />
        <CompanyName>{name}</CompanyName>
        {showExtraInfo && <ExtraInfo symbol={symbol} rank={rank} />}
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
