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

const data = {
  company: {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    name: 'Robonomics Network',
    tiker: 'XRT',
    rank: 652,
  },
};

interface DetailHeaderSectionProps {
  showBackArrow?: boolean;
  showExtraInfo?: boolean;
  onClose: () => void;
}

const liked = false;

export const DetailHeaderSection = ({ showBackArrow, showExtraInfo, onClose }: DetailHeaderSectionProps) => (
  <HeaderSectionWrapper>
    <CompanyInfo>
      {showBackArrow && (
        <StyledRoundedButton onClick={onClose}>
          <RoundedButton />
        </StyledRoundedButton>
      )}
      <Icon src={data.company.logo} alt="logo" />
      <CompanyName>{data.company.name}</CompanyName>
      {showExtraInfo && (
        <>
          <CompanyTiker>{data.company.tiker}</CompanyTiker>
          <RankWrapper>
            <StarIcon />
            <RankText>{`Rank ${data.company.rank}`}</RankText>
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
