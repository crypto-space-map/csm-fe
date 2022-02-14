import { LetterLogoWrapper } from './styles';

interface DefaultFirstLetterLogoProps {
  name: string;
}
export const DefaultFirstLetterLogo = ({ name }: DefaultFirstLetterLogoProps) => {
  const letter = name ? name.charAt(0).toLocaleUpperCase() : 'D';

  return (
    <LetterLogoWrapper>
      <span>{letter}</span>
    </LetterLogoWrapper>
  );
};
