import { useMemo } from 'react';

import { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { StyledReactMarkdown, StyledTextLink } from './styles';

interface MarkDownProps {
  text: string;
  customComponents?: Components;
}
const components: Components = {
  h1: 'p',
  h2: 'p',
  h3: 'p',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({ node, ...props }) => <StyledTextLink target="_blank" rel="noreferrer" {...props} />,
};

export const MarkDown = ({ text, customComponents }: MarkDownProps) => {
  const resultComponents = useMemo(
    () => (customComponents ? { ...components, ...customComponents } : components),
    [customComponents]
  );

  return (
    <StyledReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={resultComponents}>
      {text}
    </StyledReactMarkdown>
  );
};

MarkDown.defaultProps = {
  customComponents: null,
};
