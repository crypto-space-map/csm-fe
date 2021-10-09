/**
 *
 * ErrorPage
 *
 */

// TO-DO make custom error page instead of current one
import { FallbackProps } from 'react-error-boundary';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export function ErrorPage({ error, resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ошибка</title>
      </Helmet>
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </HelmetProvider>
  );
}
