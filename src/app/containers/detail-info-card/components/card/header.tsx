import moment from 'moment';

import { CardProps } from '../../types';
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
  imageUrl,
  title,
  titleUrl,
  createdAt,
  subTitleUrl,
}: Omit<CardProps, 'socialMediaType' | 'text' | 'proof' | 'source'>) => (
  <TitleSection>
    <CompanyInfo>
      {imageUrl && (
        <IconWrapper>
          <Icon src={imageUrl} alt="logo" />
        </IconWrapper>
      )}
      <TitleTextContent>
        {titleUrl ? (
          <StyledAccountName href={titleUrl} target="_blank" rel="noreferrer">
            {title}
          </StyledAccountName>
        ) : (
          <span>{title}</span>
        )}

        {subTitleUrl && (
          <StyledAccountLink href={subTitleUrl} target="_blank" rel="noreferrer">
            {subTitleUrl}
          </StyledAccountLink>
        )}
      </TitleTextContent>
    </CompanyInfo>
    {createdAt && <PostDate>{moment(createdAt).format('DD MMMM YYYY')}</PostDate>}
  </TitleSection>
);
