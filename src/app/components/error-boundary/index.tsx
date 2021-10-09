/* eslint-disable react/destructuring-assignment */
import type { ReactNode, ReactElement } from 'react';

import { ErrorBoundary as OriginalErrorBoundary } from 'react-error-boundary';

import { ErrorPage } from 'app/containers/pages';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps): ReactElement {
  return (
    <OriginalErrorBoundary FallbackComponent={ErrorPage}>
      <>{children}</>
    </OriginalErrorBoundary>
  );
}
