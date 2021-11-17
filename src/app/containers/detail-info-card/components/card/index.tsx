import { Button } from './button';
import { Header } from './header';
import { CardWrapper, TextSection, ButtonsContentWrapper } from './styles';
import { CardProps } from './types';

export const Card = ({ company, text, date, buttons }: CardProps) => (
  <CardWrapper>
    <Header company={company} postDate={date} />
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

Card.defaultProps = {
  date: '',
  buttons: null,
};
