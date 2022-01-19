import { SocialDataDTO } from '../../types';
import { Button } from './button';
import { Header } from './header';
import { CardWrapper, TextSection, ButtonsContentWrapper } from './styles';

export const Card = ({ text, buttons, ...restCardProps }: SocialDataDTO) => (
  <CardWrapper>
    <Header {...restCardProps} />
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
