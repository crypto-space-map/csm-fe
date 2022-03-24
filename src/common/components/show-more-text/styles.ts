import styled from '@emotion/styled';
import { link } from 'global/styles';
import ShowMoreText from 'react-show-more-text';

export const StylesShowMoreText = styled(ShowMoreText)<{
  width: number;
  textDecoration?: 'dotted' | '';
  color?: 'black';
}>`
  width: ${props => (props.width ? `${props.width}px` : '490px')};
  & .anchor-class {
    text-decoration-style: ${props => (props.textDecoration ? 'dotted' : 'none')};
    ${props => (props.textDecoration ? '' : 'text-decoration: none')};
    ${link()};
  }
`;
