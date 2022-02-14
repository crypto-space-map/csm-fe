import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { TextSection, StyledTextLink } from './styles';

interface TextContentProps {
  text: string;
}

export const TextContent = ({ text }: TextContentProps) => (
  <TextSection>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: 'p',
        h2: 'p',
        h3: 'p',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        a: ({ node, ...props }) => <StyledTextLink target="_blank" rel="noreferrer" {...props} />,
      }}>
      {text}
    </ReactMarkdown>
  </TextSection>
);
