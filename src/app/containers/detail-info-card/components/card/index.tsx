import { SocialDataDTO } from '../../types';
import { Button } from './button';
import { Header } from './header';
import { CardWrapper, ButtonsContentWrapper } from './styles';
import { TextContent } from './text-content';

export const Card = ({ text, buttons, ...restCardProps }: SocialDataDTO) => (
  <CardWrapper>
    <Header {...restCardProps} />
    <TextContent text={text} />
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
