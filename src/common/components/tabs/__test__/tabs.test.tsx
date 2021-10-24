import { render } from '@testing-library/react';

import { Tab, Tabs } from '..';

describe('<Tabs /> ans <Tab />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Tabs>
        <Tab value="snapshot" label="ISnapshot" />
      </Tabs>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <Tabs>
        <Tab value="defined" label="IDefined" />
      </Tabs>
    );
    expect(container).toBeDefined();
  });
});
