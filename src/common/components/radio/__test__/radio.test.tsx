import { render } from '@testing-library/react';

import { Radio } from '..';

describe('<Radio />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Radio value="snapshot" label="ISnapshot" />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Radio value="defined" label="IDefined" />);
    expect(container).toBeDefined();
  });
});
