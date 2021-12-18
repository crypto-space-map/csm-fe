import { Children, cloneElement, forwardRef, isValidElement, memo, ReactNode, SVGProps } from 'react';

export interface SVGWrapperProps extends SVGProps<SVGElement> {
  children: ReactNode;
}

export const SVGWrapper = memo(
  forwardRef<SVGElement, SVGWrapperProps>(({ children, ...props }, ref) => {
    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, { ...props, ref });
      }
      return child;
    });
    return <>{childrenWithProps}</>;
  })
);
