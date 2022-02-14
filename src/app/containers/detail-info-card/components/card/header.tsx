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
  url,
}: Omit<SocialDataDTO, 'text' | 'buttons'>) => (
  <TitleSection>
    <CompanyInfo>
      <IconWrapper>
        <Icon src={accountImageUrl} alt="logo" />
      </IconWrapper>
      <TitleTextContent>
        <StyledAccountName href={accountUrl} target="_blank" rel="noreferrer">
          {accountName}
        </StyledAccountName>
        <StyledAccountLink href={url} target="_blank" rel="noreferrer">
          {url}
        </StyledAccountLink>
      </TitleTextContent>
    </CompanyInfo>
    {createdAt && <PostDate>{moment(createdAt).format('DD MMMM YYYY')}</PostDate>}
  </TitleSection>
);

Header.defaultProps = {
  postDate: '',
};
