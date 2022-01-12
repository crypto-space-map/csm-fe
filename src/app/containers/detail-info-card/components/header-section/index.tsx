import { ShareIcon, StarIcon, LikeIcon, CloseIcon } from 'assets';

import { HeaderData } from '../../types';
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
} from './styles';

interface HeaderSectionProps extends HeaderData {
  onClose: () => void;
}

export const HeaderSection = ({ name, symbol, icon, rank, onClose }: HeaderSectionProps) => (
  <HeaderSectionWrapper>
    <CompanyInfo>
      <Icon src={icon} alt="logo" />
      <CompanyName>{name}</CompanyName>
      <CompanyTiker>{symbol.toUpperCase()}</CompanyTiker>
      <RankWrapper>
        <StarIcon />
        <RankText>{`Rank ${rank}`}</RankText>
      </RankWrapper>
    </CompanyInfo>
    <Controls>
      <LikeIcon />
      <ShareIcon />
      <CloseIconWrapper onClick={onClose}>
        <CloseIcon />
      </CloseIconWrapper>
    </Controls>
  </HeaderSectionWrapper>
);
