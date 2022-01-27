import { RefObject } from 'react';

import { select } from 'd3';

type ContainerCreatorProps<T, D> = {
  ref: RefObject<T>;
  data: D;
  className: string;
};

export const containerCreator = <T extends Element, D extends Array<D[number]>>({
  ref,
  data,
  className,
}: ContainerCreatorProps<T, D>) => {
  const component = select(ref.current)
    .selectAll(ref.current?.nodeName as string)
    .data(data)
    .enter()
    .append('g')
    .classed(className, true);

  component.merge(component);

  component.exit().remove();
  return { component, className };
};
