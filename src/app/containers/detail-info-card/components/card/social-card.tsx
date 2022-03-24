import { CardProps } from '../../types';
import { Header } from './header';
import { CardWrapper } from './styles';
import { TextContent } from './text-content';

export const SocialCard = ({ text, ...restCardProps }: CardProps) => (
  <CardWrapper>
    <Header {...restCardProps} />
    <TextContent text={text} />
  </CardWrapper>
);
