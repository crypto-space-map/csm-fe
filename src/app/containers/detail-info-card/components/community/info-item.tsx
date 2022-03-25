import { StyledCount } from './styles';

interface InfoItemProps {
  count: number;
  unit: string;
}

export const InfoItem = ({ count = 0, unit = '' }: InfoItemProps) => (
  <>
    <StyledCount>{count?.toLocaleString() ?? '--'}</StyledCount>
    <span>{unit}</span>
  </>
);
