import moment from 'moment';

import { CardProps } from '../../types';
import {
  CompanyInfo,
  PostDate,
  TitleSection,
  Icon,
  TitleTextContent,
  StyledTitleLink,
  StyledSubTitleLink,
  StyledTitle,
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
          <StyledTitleLink href={titleUrl} target="_blank" rel="noreferrer">
            {title}
          </StyledTitleLink>
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}

        {subTitleUrl && (
          <StyledSubTitleLink href={subTitleUrl} target="_blank" rel="noreferrer">
            {subTitleUrl}
          </StyledSubTitleLink>
        )}
      </TitleTextContent>
    </CompanyInfo>
    {createdAt && <PostDate>{moment(createdAt).format('DD MMMM YYYY')}</PostDate>}
  </TitleSection>
);
