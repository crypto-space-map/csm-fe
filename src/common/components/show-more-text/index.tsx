import { StylesShowMoreText } from './styles';

interface ShowMoreTextProps {
  width: number;
  children: React.ReactNode;
  textDecoration?: 'dotted' | '';
}

export const ShowMoreText = ({ width = 460, textDecoration = '', children }: ShowMoreTextProps) => (
  <StylesShowMoreText
    lines={3}
    more="More"
    less="Less"
    anchorClass="anchor-class"
    expanded={false}
    width={width}
    truncatedEndingComponent="... "
    textDecoration={textDecoration}>
    {children}
  </StylesShowMoreText>
);

ShowMoreText.defaultProps = {
  textDecoration: '',
};
