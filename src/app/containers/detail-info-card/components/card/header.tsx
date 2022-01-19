import moment from 'moment';

import { SocialDataDTO } from '../../types';
import {
  CompanyInfo,
  PostDate,
  TitleSection,
  Icon,
  TitleTextContent,
  StyledAccountName,
  StyledAccountLink,
  IconWrapper,
} from './styles';

export const Header = ({
  accountImageUrl,
  accountName,
  accountUrl,
  createdAt,
}: Omit<SocialDataDTO, 'text' | 'buttons'>) => {
  const a = 'a';
  return (
    <TitleSection>
      <CompanyInfo>
        <IconWrapper>
          <Icon src={accountImageUrl} alt="logo" />
        </IconWrapper>
        <TitleTextContent>
          <StyledAccountName>{accountName}</StyledAccountName>
          <StyledAccountLink href={accountUrl} target="_blank" rel="noreferrer">
            {accountUrl}
          </StyledAccountLink>
        </TitleTextContent>
      </CompanyInfo>
      {createdAt && <PostDate>{moment(createdAt).format('DD MMMM YYYY')}</PostDate>}
    </TitleSection>
  );
};

Header.defaultProps = {
  postDate: '',
};
