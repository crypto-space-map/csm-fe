import { MarkDown } from 'common/components';

import { TextSection } from './styles';

interface TextContentProps {
  text: string;
}

export const TextContent = ({ text }: TextContentProps) => (
  <TextSection>
    <MarkDown text={text} />
  </TextSection>
);
