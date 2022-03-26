import { StyledText } from './styles';

interface InvestorsCellProps {
  name: string;
}

export const ProjectCellWithoutLink = ({ name }: InvestorsCellProps) => <StyledText>{name}</StyledText>;
