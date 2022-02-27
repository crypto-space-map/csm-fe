import { CardProps } from '../../types';
import { Button } from './button';
import { Header } from './header';
import { CardWrapper, ButtonsContentWrapper } from './styles';
import { TextContent } from './text-content';

export const EventsCard = ({ text, proof, source, ...restCardProps }: CardProps) => {
  const isShowButtons = proof || source;

  return (
    <CardWrapper>
      <Header {...restCardProps} />
      <TextContent text={text} />
      {isShowButtons && (
        <ButtonsContentWrapper>
          {proof && <Button text="Proof" link={proof} />}
          {source && <Button text="Source" link={source} />}
        </ButtonsContentWrapper>
      )}
    </CardWrapper>
  );
};
