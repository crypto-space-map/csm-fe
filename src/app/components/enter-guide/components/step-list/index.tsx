import { memo } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { TemplateProps } from '../../types';
import { Step } from '../step';
import { Introduce, Filter, Account, Range, Fund, Map, Card, End } from '../templates';

interface StepListProps extends Omit<TemplateProps, 'totalSteps' | 'position'> {
  activeStepIndex: number;
}

const order = [Introduce, Filter, Range, Account, Fund, Map, Card, End];

export const StepList = memo(({ activeStepIndex, ...rest }: StepListProps) => (
  <>
    {order.map((Component, index) => (
      <Step
        key={nanoid()}
        position={index}
        render={Component}
        isActive={index === activeStepIndex}
        totalSteps={order.length}
        {...rest}
      />
    ))}
  </>
));
