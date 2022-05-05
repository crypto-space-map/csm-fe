import { TemplateProps } from '../../types';

interface StepProps extends TemplateProps {
  isActive: boolean;
  render: (obj: TemplateProps) => JSX.Element;
}

export const Step = ({ isActive, render, ...rest }: StepProps) => {
  if (isActive) {
    return <>{render(rest)}</>;
  }

  return null;
};
