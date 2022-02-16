import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { StyledReactMarkdown, StyledTextLink } from './styles';

interface MarkDownProps {
  text: string;
}

export const MarkDown = ({ text }: MarkDownProps) => (
  <StyledReactMarkdown
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
  </StyledReactMarkdown>
);
