/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import { lazy, Suspense } from 'react';
import type { ComponentProps, ReactNode, ComponentType } from 'react';

interface Opts {
  fallback: ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>, U extends ComponentType<any>>(
  importFunc: () => T,
  selectorFunc: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null }
): ((props: ComponentProps<U>) => JSX.Element) => {
  const lazyFactory = (): Promise<{ default: U }> =>
    importFunc().then(
      module => ({ default: selectorFunc(module) }),
      () => {
        window.location.reload();
        const FallbackComponent: ComponentType<any> = () => <>{opts.fallback}</>;
        return { default: FallbackComponent as U };
      }
    );

  const LazyComponent = lazy(lazyFactory);

  return (props: ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
