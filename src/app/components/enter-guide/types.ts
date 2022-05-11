export enum LinesType {
  FILTER = 'FILTER',
  RANGE = 'RANGE',
  MAP = 'MAP',
  ACCOUNT = 'ACCOUNT',
  FUND = 'FUND',
  CARD = 'CARD',
  END = 'END',
}
export type SizeOptionsTypes = {
  top: number;
  bottom: number;
  left: number;
  right: number;
} | null;

export interface TemplateProps {
  onBackClick: () => void;
  onNextClick: () => void;
  onClose: () => void;
  setSizeOptions: (arg0: SizeOptionsTypes) => void;
  totalSteps: number;
  position: number;
}
