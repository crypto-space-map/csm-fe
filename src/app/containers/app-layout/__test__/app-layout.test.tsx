import { render } from '@testing-library/react';

import { AppLayout } from '../app-layout';

describe('<AppLayout />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <AppLayout>
        <div>Some route</div>
      </AppLayout>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <AppLayout>
        <div>Some route</div>
      </AppLayout>
    );
    expect(container).toBeDefined();
  });
});
