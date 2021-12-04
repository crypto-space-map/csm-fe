import { ShareIcon, StarIcon, LikeIcon, CloseIcon } from 'assets';

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

const data = {
  company: {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    name: 'Robonomics Network',
    tiker: 'XRT',
    rank: 652,
  },
};

interface HeaderSectionProps {
  onClose: () => void;
}

export const HeaderSection = ({ onClose }: HeaderSectionProps) => (
  <HeaderSectionWrapper>
    <CompanyInfo>
      <Icon src={data.company.logo} alt="logo" />
      <CompanyName>{data.company.name}</CompanyName>
      <CompanyTiker>{data.company.tiker}</CompanyTiker>
      <RankWrapper>
        <StarIcon />
        <RankText>{`Rank ${data.company.rank}`}</RankText>
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
