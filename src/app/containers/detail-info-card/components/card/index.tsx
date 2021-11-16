import moment from 'moment';

import { Button } from './button';
import {
  CardWrapper,
  CompanyInfo,
  PostDate,
  TitleSection,
  Icon,
  TitleTextContent,
  TextSection,
  ButtonsContentWrapper,
} from './styles';
import { CardProps } from './types';

export const Card = ({ company, text, date, buttons }: CardProps) => {
  const { title, link, logo, linkText } = company;
  return (
    <CardWrapper>
      <TitleSection>
        <CompanyInfo>
          <Icon src={logo} alt="logo" />
          <TitleTextContent>
            <h5>{title}</h5>
            <a href={link} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          </TitleTextContent>
        </CompanyInfo>
        {date && <PostDate>{moment(date).format('DD MMMM YYYY')}</PostDate>}
      </TitleSection>
      <TextSection>{text}</TextSection>
      {buttons && (
        <ButtonsContentWrapper>
          {buttons.map(item => (
            <Button key={item.id} {...item} />
          ))}
        </ButtonsContentWrapper>
      )}
    </CardWrapper>
  );
};

Card.defaultProps = {
  date: '',
  buttons: null,
};
