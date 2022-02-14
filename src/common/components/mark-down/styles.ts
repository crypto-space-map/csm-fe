import styled from '@emotion/styled';
import { link } from 'global/styles';
import ReactMarkdown from 'react-markdown';

export const StyledTextLink = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  ${link()}
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledReactMarkdown = styled(ReactMarkdown)`
  & > h3 {
    margin: 0;
  }
  & > p {
    margin-top: 0;
  }
  & > p:last-of-type {
    margin-bottom: 0;
  }
`;
