import { RefObject } from 'react';

import { select } from 'd3';

type ContainerCreatorProps<T, D> = {
  ref: RefObject<T>;
  data: D;
};

export const containerCreator = <T extends Element, D>({ ref, data }: ContainerCreatorProps<T, D>) => {
  const component = select(ref.current)
    .selectAll(ref.current?.nodeName as string)
    .data([data as D]);

  component.enter().append('g');

  component.merge(component);

  component.exit().remove();
  return component;
};
